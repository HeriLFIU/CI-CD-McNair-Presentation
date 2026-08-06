const fs = require('fs');
const content = fs.readFileSync('slides.md', 'utf8');
const slides = content.split(/^---$/m);
console.log("Slide 12:\n" + slides[11]);
console.log("Slide 14:\n" + slides[13]);
console.log("Slide 16:\n" + slides[15]);
