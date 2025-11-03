import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ESM replacement for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.resolve(__dirname, '../src');
const indexFile = path.join(srcDir, 'index.ts');

const files = fs.readdirSync(srcDir)
  .filter(f => f.endsWith('.ts') && f !== 'index.ts');

const exportsContent = files.map(f => {
  const name = f.replace(/\.ts$/, '.js');
  return `export * from './${name}';`;
}).join('\n');

fs.writeFileSync(indexFile, exportsContent);
console.log('Generated: src/index.ts');