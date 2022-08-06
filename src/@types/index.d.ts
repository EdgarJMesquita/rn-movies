type MovieShowInfo = {
  title: string;
  year: number;
  ids: {
    trakt: number;
    slug: string;
    imdb: string;
    tmdb: number;
  };
};

type MoviePopular = {
  title: string;
  year: number;
  ids: {
    trakt: number;
    slug: string;
    imdb: string;
    tmdb: number;
  };
  movie?: MovieShowInfo;
  show?: MovieShowInfo;
};

type FanArtMovie = {
  id: string;
  url: string;
  lang: string;
  likes: string;
};

type MovieImages = {
  name: string;
  tmdb_id: string;
  imdb_id: string;
  hdmovielogo: FanArtMovie[];
  moviedisc: FanArtMovie[];
  movielogo: FanArtMovie[];
  movieposter: FanArtMovie[];
  hdmovieclearart: FanArtMovie[];
  movieart: FanArtMovie[];
  moviebackground: FanArtMovie[];
  moviebanner: FanArtMovie[];
  moviethumb: FanArtMovie[];
};

type OMDBMovie = {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Ratings: {
    Source: string;
    Value: string;
  }[];
  Released: string;
  Response: string;
  Runtime: string;
  Title: string;
  Type: string;
  Website: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
};

type Category =
  | 'popular'
  | 'recommended/weekly'
  | 'watched/weekly'
  | 'trending';
