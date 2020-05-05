const { red, white } = require('chalk');
const puppeteer = require('puppeteer-extra');

puppeteer.use(require('puppeteer-extra-plugin-stealth')());

function getAlbumNameFromTextContent(string) {
  const txt = string.split('"');
  return txt[txt.length - 2];
}

function getDistributionFromTextContent(string) {
  const txt = string.split('(');
  const answer = [];

  for (let i = 1; i < txt.length; i++) answer.push(txt[i].split(')')[0]);
  return answer;
}

exports.getAlbumInfo = async input => {
  let browser;
  let albumInfo = null;

  try {
    browser = await puppeteer.launch({
      headless: true,
    });

    const page = await browser.newPage();

    await page.goto('https://duckduckgo.com/', {
      waitUntil: ['domcontentloaded', 'networkidle0', 'load'],
    });

    await page.type('#search_form_input_homepage', input + ' site:progarchives.com/album.asp');
    page.keyboard.press('Enter');

    await page.waitForNavigation({
      waitUntil: ['domcontentloaded', 'networkidle0', 'load'],
    });

    await page.click('#r1-0 > div:nth-child(1) > h2:nth-child(1) > a:nth-child(1)');
    await page.waitForNavigation({
      waitUntil: ['domcontentloaded', 'networkidle0', 'load'],
    });

    const artistName = await page.evaluate(
      element => element.textContent,
      await page.$('#main > div:nth-child(1) > h2:nth-child(2) > a:nth-child(1)'),
    );

    const albumName = getAlbumNameFromTextContent(
      await page.evaluate(
        element => element.textContent,
        await page.$('#main > div:nth-child(1) > div:nth-child(8) > h2:nth-child(28)'),
      ),
    );

    const avgRating = await page.evaluate(
      element => element.textContent,
      await page.$('#avgRatings_1'),
    );

    const ratings = await page.evaluate(
      element => element.textContent,
      await page.$('#nbRatings_1'),
    );

    const distribution = getDistributionFromTextContent(
      await page.evaluate(
        element => element.textContent,
        await page.$('#main > div:nth-child(1) > div:nth-child(8) > blockquote:nth-child(20)'),
      ),
    );

    albumInfo = {
      artistName: artistName,
      albumName: albumName,
      fullAlbumName: `${artistName} - ${albumName}`,
      avgRating: avgRating,
      ratings: parseInt(ratings),
      distribution: distribution,
    };
  } catch (err) {
    console.error(red('Oops! An error occured while fetching data.'));
    console.error(white(err));
  } finally {
    await browser.close();
    return albumInfo;
  }
};
