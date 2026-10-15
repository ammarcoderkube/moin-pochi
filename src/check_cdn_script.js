import fs from 'fs';

async function check() {
  const res = await fetch('https://f1-assets.b-cdn.net/script.js');
  const js = await res.text();
  console.log('CDN script.js length:', js.length);
  
  // Search for mobile or innerWidth in CDN script
  const m = js.match(/innerWidth/g) || [];
  console.log('innerWidth count:', m.length);
  
  // Find Preloader
  const pIdx = js.indexOf('Preloader');
  if (pIdx !== -1) {
    console.log('Preloader in CDN script:');
    console.log(js.substring(pIdx, pIdx + 600));
  }
}
check().catch(console.error);
