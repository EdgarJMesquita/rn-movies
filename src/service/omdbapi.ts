import axios from "axios";
import env from "../../env.json";

const baseURL = "http://www.omdbapi.com/";

export const omdbapi = axios.create({ baseURL });

const params = `&apikey=${env.OMDB_API_KEY}`;

// param i means id_imdb
export const omdbapiFetcher = (url: string) =>
  omdbapi.get(url + params).then((r) => r.data);
