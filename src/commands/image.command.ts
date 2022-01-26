import Scraper from 'images-scraper';
import { getRandomInt } from '../utils/get-random-index';

const google = new Scraper({
  puppeteer: {
    // @ts-ignore
    headless: true,
  },
});

export async function imageCommand(searchTitle: string): Promise<any> {
  let result: string;
  const isValidSearchTitle = searchTitle.trim() !== '';
  try {
    if (isValidSearchTitle) {
      const imageList: any = await google.scrape(searchTitle, 10);
      if (imageList.length >= 1) {
        const index = getRandomInt(imageList.length);
        result = imageList[index].url;
      }
    }
  } catch (error) {
    console.log(error);
  }

  return result;
}
