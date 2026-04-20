const puppeteer = require('/tmp/node_modules/puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', err => { errors.push(err.toString()); });
    page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
    
    try {
      const response = await page.goto(`https://tareq-orabi.github.io/alufoq-2/`, { waitUntil: 'networkidle0' });
      const html = await page.content();
      const rootLength = await page.evaluate(() => document.getElementById('root')?.innerHTML.length);
      console.log(JSON.stringify({
         status: response.status(),
         htmlRootLength: rootLength,
         errors: errors
      }));
    } catch(e) {
      console.log("Navigation error:", e);
    }
    await browser.close();
    process.exit(0);
})();
