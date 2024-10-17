import type { Batch } from "./batch";
import type { Genre } from "./genre";

export interface AnimeCardProps {
  thumb: string;
  title: string;
  sub: string;
  episode: string;
  season: string;
  score: string;
}

export interface Anime{
  slug: string;
  title: string;
  alternative_title?: string;
  thumb: string;
  score?: number;
  mal_score?: string;
  status?: string;
  episode: string;
  sub: string;
  season?: string;
  quality?: string;
  desc?: string;
  episode_info?: string;
  genre?: Genre[];
  rating?: string;
  batch?: Batch[];
  type?: string;
}

interface Episode{
  slug: string;
  number: number;
  title: string;
}

interface Download{
  title: string;
  url: string;
}

interface Server{
  title: string;
  url: string;
}

export interface AnimeDetail{
  thumb: string;
  title: string;
  japan: string;
  status: string;
  quality: string;
  year: number;
  type: string;
  episode: Episode[];
  download: Download[];
  server: Server[];
  sub: string;
}