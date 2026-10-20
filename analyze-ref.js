const https = require('https');
const fs = require('fs');

https.get('https://solo-learner-tau.vercel.app/assets/index-BHRAQ6hP.js', res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('ref-bundle.js', data);
    console.log('Saved bundle, length:', data.length);
    // Find interesting text snippets
    const sectionNames = [];
    const regex = /"([^"\\]{4,60})"/g;
    let match;
    const phrases = new Set();
    while ((match = regex.exec(data)) !== null) {
      const text = match[1];
      if (/SOLO|Dashboard|Learner|Credential|Resume|Pathway|Enroll|Skill|Endorsement|Wallet|Job/i.test(text)) {
        if (!text.includes('{') && !text.includes(';') && !text.includes('/') && !text.includes('<') && text.length > 5) {
          phrases.add(text);
        }
      }
    }
    console.log('Found relevant phrases:', Array.from(phrases).slice(0, 50));
  });
}).on('error', err => {
  console.error(err);
});
