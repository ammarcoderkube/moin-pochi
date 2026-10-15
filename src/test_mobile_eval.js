import { chromium } from 'playwright';

async function test() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 375, height: 812 } });
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(2000);

  const heroInfo = await page.evaluate(() => {
    const hero = document.getElementById('hero');
    const heroRect = hero ? hero.getBoundingClientRect() : null;
    const heroSticky = document.querySelector('.hero-sticky');
    const heroStickyRect = heroSticky ? heroSticky.getBoundingClientRect() : null;
    const heroContainer = document.querySelector('.hero-container');
    const heroContainerRect = heroContainer ? heroContainer.getBoundingClientRect() : null;
    const heroHeading = document.querySelector('.hero-heading');
    const mobileImgWrap = document.querySelector('.mobile-hero-image-wrap');
    const mobileImgWrapStyle = mobileImgWrap ? window.getComputedStyle(mobileImgWrap) : null;
    const neshPreload = document.querySelector('.nesh-logo-preload');
    const neshGhost = document.querySelector('.nesh-logo-ghost');

    return {
      heroRect,
      heroStickyRect,
      heroContainerRect,
      heroHeadingStyle: heroHeading ? {
        visibility: window.getComputedStyle(heroHeading).visibility,
        opacity: window.getComputedStyle(heroHeading).opacity,
        display: window.getComputedStyle(heroHeading).display
      } : null,
      mobileImgWrap: mobileImgWrap ? {
        display: mobileImgWrapStyle.display,
        height: mobileImgWrapStyle.height,
        opacity: mobileImgWrapStyle.opacity,
        visibility: mobileImgWrapStyle.visibility,
        rect: mobileImgWrap.getBoundingClientRect()
      } : null,
      neshPreload: neshPreload ? {
        rect: neshPreload.getBoundingClientRect(),
        display: window.getComputedStyle(neshPreload).display
      } : null,
      neshGhost: neshGhost ? {
        rect: neshGhost.getBoundingClientRect(),
        opacity: window.getComputedStyle(neshGhost).opacity,
        display: window.getComputedStyle(neshGhost).display
      } : null
    };
  });

  console.log(JSON.stringify(heroInfo, null, 2));
  await page.screenshot({ path: 'src/mobile_eval_screenshot.png' });
  await browser.close();
}
test().catch(console.error);
