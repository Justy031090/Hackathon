const puppeteer = require('puppeteer');
const getSongDetails = async (songName) => {
    const browser = await puppeteer.launch({
        headless: true,
        defaultViewport: null,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.goto('https://www.shazam.com/home');
    await page.waitForTimeout(1500);
    await page.type('input[type="search"]', songName);
    await page.click('button[class="magnifying-glass"]');

    await page.waitForTimeout(1500);
    const findFirstResult = await page.evaluate(() => {
        const searchList = document.querySelector('.search-track-menu-item');
        return searchList.href;
    });
    await page.goto(findFirstResult);
    await page.waitForTimeout(1500);
    const grabSongDetails = await page.evaluate(() => {
        const song = document.querySelector(
            '.details.grid.grid-vert-center h1'
        );
        const artist = document.querySelector(
            '.details.grid.grid-vert-center h2 a'
        );
        const genre = document.querySelector('.genre');
        const puppetLyrics = document.querySelector('#lyrics p');
        const poster = document.querySelector(
            '.inner-content.grid.grid-vert-top img'
        );

        return {
            song: song.innerText,
            artist: artist.innerText,
            puppetLyrics: lyrics.textContent,
            genre: genre.innerText,
            poster: poster.src,
        };
    });
    return grabSongDetails;
};
module.exports = getSongDetails;
