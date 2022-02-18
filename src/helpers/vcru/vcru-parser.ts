import cheerio from 'cheerio';

interface Content {
  title: string
  link: string
}

export interface VCRUData {
  date: string,
  newsContent: Content[]
}

export function vcruParser(htmlData: any):VCRUData {
  const result: VCRUData = {
    date: '',
    newsContent: [],
  };

  const now = new Date();
  const month = now.toLocaleString('default', { month: 'long' });
  const date = now.getUTCDate();

  result.date = `${month} ${date}`;

  const $ = cheerio.load(htmlData);

  // eslint-disable-next-line array-callback-return
  $('div[class="news_item l-flex l-fa-baseline lm-block"]').map((index, elm) => {
    const vcruNewsTitle: string = $(elm).find('div a').text().replace(/[\r\n]/g, '');
    const vcruNewsLink: string = $(elm).find('div a').attr('href');

    const createContent: Content = {
      link: vcruNewsLink,
      title: vcruNewsTitle.trim(),
    };

    result.newsContent = [...result.newsContent, createContent];
  });

  return result;
}
