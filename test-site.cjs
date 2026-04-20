const { execSync } = require('child_process');
try {
  execSync('npm install --prefix /tmp puppeteer express');
} catch(e) {}

const express = require('/tmp/node_modules/express');
const puppeteer = require('/tmp/node_modules/puppeteer');
const app = express();
app.use('/alufoq-2', express.static('dist'));

const server = app.listen(0, async () => {
    const port = server.address().port;
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', err => { errors.push(err.toString()); });
    page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
    
    try {
      await page.goto(`http://localhost:${port}/alufoq-2/`, { waitUntil: 'networkidle0' });
      const html = await page.content();
      const rootLength = await page.evaluate(() => document.getElementById('root')?.innerHTML.length);
      console.log(JSON.stringify({
         htmlRootLength: rootLength,
         errors: errors
      }));
    } catch(e) {
      console.log("Navigation error:", e);
    }
    await browser.close();
    server.close();
    process.exit(0);
});
