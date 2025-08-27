const express = require('express');
// const puppeteer = require('puppeteer');


const app = express();
const port = 3000;
app.use(express.static('public'));
app.listen(port, () => {
  console.log(`Cookie thief app listening at http://localhost:${port}`);
});
app.get('/', async (req, res) => {
  res.json({ cookies: req.cookies });
});

// const getVersion = async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   // Navigate to a page to access the navigator object
//   await page.goto('https://www.apple.com');

//   const appVersion = await page.evaluate(() => navigator.appVersion);
//   console.log('App Version:', appVersion);

//   await browser.close();
//   return appVersion;
// };