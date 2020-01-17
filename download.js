const puppeteer = require('puppeteer');
const fs = require('fs');
const { promisify } = require('util')
const path = require('path')
// const { promisify } = require('util')

// const readFileAsync = promisify(fs.readFile)
const writeFileAsync = promisify(fs.writeFile);
(async () => {
	const browser = await puppeteer.launch({});
	const page = await browser.newPage();

	await page.goto("https://streetfighter.com/characters/");
	const imageHrefList = await page.evaluate(() => {
		return Array.from(document.querySelectorAll('img.portrait')).map(item =>item.getAttribute('src'));
  });

  // console.log(imageHrefList);
  for(let i = 0; i< imageHrefList.length; i++) {
    let imageHref = imageHrefList[i];
    console.log(imageHref);
    const viewSource = await page.goto(imageHref);
    const buffer = await viewSource.buffer();
    let re = /portrait-([^\d]+)(-\d)?\.jpg/;
    let matches = imageHref.match(re);
    // console.log(matches);
    
    let name = matches[1];
    console.log(name);
	  await writeFileAsync(path.join(__dirname, 'avatars', `${name}.jpg`), buffer)
	  console.log("The file was saved!");
  }
	
	browser.close()
})()