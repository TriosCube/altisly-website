const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto('https://chatgpt.com/share/69fa6cd3-7b44-83ea-8112-7d6f18e54b92', { waitUntil: 'networkidle2' });
  
  const text = await page.evaluate(() => {
    return document.body.innerText;
  });
  
  console.log(text);
  await browser.close();
})();
