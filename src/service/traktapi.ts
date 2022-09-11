import axios from 'axios';
import env from '../../env.json';

const baseURL = 'https://api.trakt.tv/';

export const traktapi = axios.create({
	baseURL,
	headers: {
		'trakt-api-key': env.CLIENT_ID,
		'trakt-api-version': 2,
	},
});

export const fetcher = (url: string) =>
	traktapi.get(url).then((res) => res.data);
