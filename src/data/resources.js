import raw from './data.json';

const collator = new Intl.Collator('en', { sensitivity: 'base' });

/** `https://www.figma.com/x` -> `figma.com` */
export function hostFrom(link) {
  try {
    return new URL(link).hostname.replace(/^www\./, '');
  } catch {
    return link;
  }
}

function idFrom(item, index) {
  const slug = item.link
    .replace(/^https?:\/\//, '')
    .replace(/[^a-z0-9]+/gi, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase()
    .slice(0, 48);
  return `${slug || 'resource'}-${index}`;
}

/**
 * Normalised, pre-sorted resource list. Search text is precomputed so
 * filtering stays a cheap substring check.
 */
export const resources = Object.freeze(
  raw
    .map((item, index) => {
      const host = hostFrom(item.link);
      const tags = item.tags ?? [];

      return Object.freeze({
        ...item,
        id: idFrom(item, index),
        host,
        tags,
        description: item.description ?? '',
        search: [item.name, item.category, host, ...tags]
          .join(' ')
          .toLowerCase(),
      });
    })
    .sort(
      (a, b) =>
        Number(Boolean(b.newTag)) - Number(Boolean(a.newTag)) ||
        collator.compare(a.name, b.name),
    ),
);

export const totalCount = resources.length;

const counts = new Map();
for (const item of resources) {
  counts.set(item.category, (counts.get(item.category) ?? 0) + 1);
}

export const categories = Object.freeze([
  { name: 'All', count: totalCount },
  ...[...counts.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => collator.compare(a.name, b.name)),
]);

/** Build a responsive `srcSet` for an optimised card image. */
export function imageSrcSet(src) {
  const small = src.replace(/-640\.webp$/, '-320.webp');
  return small === src ? undefined : `${small} 320w, ${src} 640w`;
}
