import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ESM replacement for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.resolve(__dirname, '../src');
const indexFile = path.join(srcDir, 'index.ts');

const files = fs.readdirSync(srcDir)
  .filter(file => file.endsWith('.ts') && file !== 'index.ts');

const exportsContent = files.map(
  file => {
    const filename = file.replace(/\.ts$/, '.js');
    const name = filename.split('.')[0];
    return `export * as ${name} from './${filename}';`;
  }
).join('\n');

fs.writeFileSync(indexFile, exportsContent);
console.log('Generated: src/index.ts');