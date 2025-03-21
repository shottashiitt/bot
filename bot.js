const puppeteer = require('puppeteer');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
    for (let i = 0; i < 10000; i++) {
        const browser = await puppeteer.launch({headless: true});
        const page = await browser.newPage();
        await page.goto('https://www.sportyfoot.com');
    
        await sleep(1000);
    
        await page.click('a[data-src="https://stream-onsport.ru/blabla/1/1"]');
    
        await sleep(1000);
    
        await browser.close();
        console.log(i);
    }
})();