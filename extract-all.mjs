import fs from 'fs';
const data = fs.readFileSync('ref-bundle.js', 'utf-8');

const childRegex = /children:\s*["'`]([^"'`]{2,150})["'`]/g;
const children = [];
let match;
while ((match = childRegex.exec(data)) !== null) {
  children.push(match[1]);
}
fs.writeFileSync('ref-strings.json', JSON.stringify([...new Set(children)], null, 2));
console.log('Saved', children.length, 'strings');
