const fs = require('fs');

let mainJs = fs.readFileSync('assets/main.js', 'utf8');

// Add observer: true, observeParents: true to all Swiper instantiations
mainJs = mainJs.replace(/new Swiper\([^,]+,\s*\{/g, match => {
    return match + '\n\t\t\tobserver: true,\n\t\t\tobserveParents: true,';
});

fs.writeFileSync('assets/main.js', mainJs, 'utf8');
console.log('Updated main.js with observer: true');
