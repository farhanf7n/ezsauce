import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const DATA_FILE = 'src/data/data.json';
const data = JSON.parse(await readFile(DATA_FILE, 'utf8'));
const errors = [];
const names = new Set();
const links = new Set();

if (!Array.isArray(data) || data.length === 0) {
  errors.push('data.json must contain a non-empty array');
}

const categories = new Set();

data.forEach((item, index) => {
  const where = `item ${index} (${item.name ?? 'unnamed'})`;

  for (const field of ['name', 'category', 'link', 'img']) {
    if (typeof item[field] !== 'string' || !item[field].trim()) {
      errors.push(`${where}: missing "${field}"`);
    }
  }

  if (item.name) {
    if (names.has(item.name)) errors.push(`${where}: duplicate name`);
    names.add(item.name);
  }

  if (item.link) {
    try {
      const url = new URL(item.link);
      if (url.protocol !== 'https:') {
        errors.push(`${where}: link must use https`);
      }
    } catch {
      errors.push(`${where}: invalid link "${item.link}"`);
    }

    if (links.has(item.link)) errors.push(`${where}: duplicate link`);
    links.add(item.link);
  }

  if (!Array.isArray(item.tags) || item.tags.length === 0) {
    errors.push(`${where}: needs at least one tag`);
  }

  if (item.description && typeof item.description !== 'string') {
    errors.push(`${where}: description must be a string`);
  }

  if (item.img) {
    const file = path.join('public', item.img);
    if (!existsSync(file)) {
      errors.push(`${where}: image not found (${item.img})`);
    } else if (item.img.includes('/assets/opt/')) {
      const small = item.img.replace(/-640\.webp$/, '-320.webp');
      if (!existsSync(path.join('public', small))) {
        errors.push(`${where}: missing 320px variant (${small})`);
      }
    }
  }

  if (item.category) categories.add(item.category);
});

if (errors.length > 0) {
  console.error(
    `Resource data validation failed with ${errors.length} error(s):`,
  );
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}

console.log(
  `Validated ${data.length} resources across ${categories.size} categories.`,
);
