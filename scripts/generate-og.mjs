import { readFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const data = JSON.parse(await readFile('src/data/data.json', 'utf8'));
const count = data.length;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#F1F0EE"/>
  <circle cx="1080" cy="120" r="54" fill="#FFC70F"/>
  <circle cx="960" cy="560" r="180" fill="#FFC70F"/>
  <g fill="#161616">
    <text x="90" y="300" font-family="Helvetica, Arial, sans-serif" font-size="136" font-weight="700" letter-spacing="-4">EZSauce</text>
  </g>
  <text x="94" y="372" font-family="Helvetica, Arial, sans-serif" font-size="34" fill="#5F5F5F">Curated resources for developers &amp; designers</text>
  <rect x="90" y="430" width="220" height="6" rx="3" fill="#161616"/>
  <text x="94" y="500" font-family="Helvetica, Arial, sans-serif" font-size="24" fill="#828282">${count} hand-picked tools, templates and learning material</text>
</svg>`;

await sharp(Buffer.from(svg))
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(path.join('public', 'og.jpg'));

console.log(`Generated public/og.jpg for ${count} resources`);
