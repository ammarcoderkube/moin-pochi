import fs from 'fs';

async function check() {
  const res = await fetch('https://heynesh.com');
  const text = await res.text();
  const styles = text.match(/<style[^>]*>([\s\S]*?)<\/style>/gi) || [];
  styles.forEach((s, i) => {
    fs.writeFileSync(`src/live_style_${i}.css`, s);
    console.log(`Saved live_style_${i}.css, size: ${s.length}`);
  });
}
check().catch(console.error);
