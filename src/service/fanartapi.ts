import axios from 'axios';
import env from '../../env.json';

const baseURL = 'http://webservice.fanart.tv/v3/';

export const fanartapi = axios.create({
  baseURL,
  headers: {
    'api-key': env.FANART_API,
  },
});

export const fanartapiFetcher = (url: string) =>
  fanartapi.get(url).then((r) => r.data);
