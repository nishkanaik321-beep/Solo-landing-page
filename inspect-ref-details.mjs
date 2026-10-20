import fs from 'fs';
const data = fs.readFileSync('ref-bundle.js', 'utf-8');

const companionRegex = /label:\s*["'`]([^"'`]+)["'`]/g;
let m;
const labels = [];
while ((m = companionRegex.exec(data)) !== null) {
  labels.push(m[1]);
}
console.log('Companion steps / labels:', labels);
