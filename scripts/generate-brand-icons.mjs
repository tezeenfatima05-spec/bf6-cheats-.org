import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const logoPng = path.join(publicDir, 'logo.png');

if (!fs.existsSync(logoPng)) {
  console.error('Missing public/logo.png — add a Battlefield 6 logo before generating icons.');
  process.exit(1);
}

await sharp(logoPng).resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon.png'));
await sharp(logoPng).resize(32, 32).png().toFile(path.join(publicDir, 'favicon-32.png'));
await sharp(logoPng).resize(16, 16).png().toFile(path.join(publicDir, 'favicon-16.png'));
await sharp(logoPng).resize(32, 32).png().toFile(path.join(publicDir, 'favicon.ico'));

console.log('Brand icons generated from logo.png');
