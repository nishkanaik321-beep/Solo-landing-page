import fs from 'fs';
const data = fs.readFileSync('ref-bundle.js', 'utf-8');

// Minified vite uses children:"..." or children:[...]
const childRegex = /children:\s*["'`]([^"'`]{4,100})["'`]/g;
const children = new Set();
let match;
while ((match = childRegex.exec(data)) !== null) {
  children.add(match[1]);
}
console.log('Children found:', children.size);
console.log(Array.from(children).slice(0, 50));
