import axios from 'axios';

const instance = axios.create({
  baseURL: `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_APIKEY}&q=`,
});

export async function gifCommand(title: string): Promise<string> {
  let result: string;
  try {
    const response = await instance.get(`${title}`);
    const gifList = response.data.data;
    if (gifList.length >= 1) {
      const index = 1;
      result = gifList[index].images.original.url;
    }
  } catch (error) {
    console.log(error);
  }

  return result;
}
