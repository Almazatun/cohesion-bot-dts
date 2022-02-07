import cheerio from 'cheerio';

interface Content {
  title: string
  link: string
}

export interface VCRUData {
  time: string,
  newsContent: Content[]
}

export function vcruParser(htmlData: any):VCRUData {
  const result: VCRUData = {
    time: '',
    newsContent: [],
  };

  const $ = cheerio.load(htmlData);

  result.time = $('div[class="news_widget__header"] > p').text();

  $('div[class="news_item l-flex l-fa-baseline lm-block l-mv-9 lm-mv-8"]').map((index, elm) => {
    const vcruNewsTitle: string = $(elm).find('div a').text().replace(/[\r\n]/g, '');
    vcruNewsTitle.replace(/[\r\n]/g, '');
    const vcruNewsLink: string = $(elm).find('div a').attr('href');

    const createNewsContent: Content = {
      link: vcruNewsLink,
      title: vcruNewsTitle.trim(),
    };

    result.newsContent = [...result.newsContent, createNewsContent];
  });

  return result;
}
