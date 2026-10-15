async function get() {
  const res = await fetch('https://heynesh.com');
  const text = await res.text();
  const scripts = text.match(/<script[^>]*src="([^"]+)"[^>]*>/g) || [];
  console.log('Scripts:', scripts);
}
get().catch(console.error);
