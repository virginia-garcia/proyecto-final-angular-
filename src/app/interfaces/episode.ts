export interface Episode {
  Title: string;
  Released: string;
  Episode: string;
  imdbRating: string;
  imdbID: string;
  Poster: string;
  Season?:string;
}

export interface SeriesResponse {
  Title: string;
  Season: string;
  totalSeasons: string;
  Episodes: Episode[];
  Response: string;
  Error?: string;
}