import { existsSync } from 'node:fs';
import {
  mkdir,
  readFile,
  readdir,
  rm,
  stat,
  writeFile,
} from 'node:fs/promises';
import path from 'node:path';
import prettier from 'prettier';
import sharp from 'sharp';

const ROOT = process.cwd();
const SRC_DIR = path.join(ROOT, 'assets-src');
const OUT_DIR = path.join(ROOT, 'public', 'assets', 'opt');
const DATA_FILE = path.join(ROOT, 'src', 'data', 'data.json');

const CARD_WIDTHS = [320, 640];
const DECORATIVE_WIDTHS = [240];

/** Decorative images used by the hero (not part of the resource data). */
const DECORATIVE = [
  '3dicons',
  '21stdev',
  'appdb',
  'awwwards',
  'left-1',
  'left-2',
  'left-3',
  'right-1',
  'right-2',
  'right-3',
];

function slug(file) {
  return path
    .basename(file, path.extname(file))
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/** `…/foo-640.webp` and `…/foo.png` both map to `foo`. */
function sourceKey(imagePath) {
  return slug(path.basename(imagePath).replace(/-\d+\.webp$/, ''));
}

async function createVariants(sourceFile, widths) {
  const input = path.join(SRC_DIR, sourceFile);
  const key = slug(sourceFile);

  if (!existsSync(input)) {
    throw new Error(`Missing source image: assets-src/${sourceFile}`);
  }

  for (const width of widths) {
    const output = path.join(OUT_DIR, `${key}-${width}.webp`);
    await sharp(input)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 78, effort: 5 })
      .toFile(output);
  }
}

async function main() {
  const data = JSON.parse(await readFile(DATA_FILE, 'utf8'));
  const sourceFiles = await readdir(SRC_DIR);
  const sourcesByKey = new Map(sourceFiles.map((file) => [slug(file), file]));

  const resolve = (imagePath) => {
    const key = sourceKey(imagePath);
    const file = sourcesByKey.get(key);
    if (!file) {
      throw new Error(
        `No source image in assets-src/ for "${key}" (referenced by ${imagePath})`,
      );
    }
    return { key, file };
  };

  const cardSources = new Map();
  for (const item of data) {
    const source = resolve(item.img);
    cardSources.set(source.key, source.file);
  }

  // Start from a clean slate so renamed/removed resources do not leave
  // orphaned derivatives behind.
  await rm(OUT_DIR, { recursive: true, force: true });
  await mkdir(OUT_DIR, { recursive: true });

  for (const sourceFile of cardSources.values()) {
    await createVariants(sourceFile, CARD_WIDTHS);
  }

  for (const name of DECORATIVE) {
    const source = resolve(`${name}.png`);
    await createVariants(source.file, DECORATIVE_WIDTHS);
  }

  for (const item of data) {
    item.img = `/assets/opt/${sourceKey(item.img)}-640.webp`;
  }

  const formatted = await prettier.format(JSON.stringify(data), {
    filepath: DATA_FILE,
  });
  await writeFile(DATA_FILE, formatted);

  const files = await readdir(OUT_DIR);
  let total = 0;
  for (const file of files) {
    total += (await stat(path.join(OUT_DIR, file))).size;
  }

  console.log(
    `Optimised ${cardSources.size} card images + ${DECORATIVE.length} decorative images → ${files.length} files, ${(total / 1024 / 1024).toFixed(2)} MB`,
  );
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
