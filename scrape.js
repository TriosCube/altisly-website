const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://chatgpt.com/share/69fa608a-8538-83ea-8b74-b7185ef9f40a', { waitUntil: 'networkidle' });
  const text = await page.evaluate(() => document.body.innerText);
  console.log(text.substring(0, 2000));
  await browser.close();
})();
