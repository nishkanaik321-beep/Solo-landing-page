import fs from 'fs';
const data = fs.readFileSync('ref-bundle.js', 'utf-8');

// match href: "..." or href:'...'
const hrefMatches = data.match(/href:\s*["'`]([^"'`]+)["'`]/g) || [];
console.log('Hrefs:', [...new Set(hrefMatches)]);

const navMatches = data.match(/to:\s*["'`]([^"'`]+)["'`]/g) || [];
console.log('To routes:', [...new Set(navMatches)]);

// Find all big text chunks (headings, section titles)
const textChunks = data.match(/["']([A-Z0-9\s—–\.\,\?\!\:\-\(\)\'\/\&]{10,60})["']/g) || [];
const uniqueTexts = [...new Set(textChunks.map(s => s.slice(1, -1)))];
console.log('Unique capitalized texts:', uniqueTexts.filter(t => t.length > 15 && !t.includes('{')).slice(0, 40));
