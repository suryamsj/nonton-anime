import type { Anime } from "$lib/types/anime";
import { parseHTML } from "linkedom";

function extractAnimeDetail(element: Element): Anime{
  const thumb = element.querySelector('.anisc-poster .film-poster img')?.getAttribute('data-src') || '';
  const title = element.querySelector('.anisc-detail h2')?.textContent?.trim() || '';
  const quality = element.querySelector('.anisc-detail .film-stats .tick-quality')?.textContent?.trim() || '';
  const sub = element.querySelector('.anisc-detail .film-stats .tick-dub')?.textContent?.trim() || '';
  const infoEpisode = element.querySelectorAll('.anisc-detail .film-stats .item');
  const slug = element.querySelector('.anisc-detail .film-buttons a')?.getAttribute('href')?.replace(/https:\/\/zoronime\.com\/(?:episode|movie)\//, "").trim() || "";
  const desc = element.querySelector('.anisc-detail .anisc-info-wrap .anisc-info .item-title.w-hide .text')?.textContent?.trim() || '';
  const alternative_title = element.querySelector('.anisc-detail .anisc-info-wrap .anisc-info .item-title .name')?.textContent?.trim() || '';
  const mal_score = element.querySelectorAll('.anisc-detail .anisc-info-wrap .anisc-info .item-title .name')[1]?.textContent?.trim() || '';
  const rating = element.querySelectorAll('.anisc-detail .anisc-info-wrap .anisc-info .item-title .name')[2]?.textContent?.trim() || '';
  const season = element.querySelectorAll('.anisc-detail .anisc-info-wrap .anisc-info .item-title .name')[3]?.textContent?.trim() || '';
  const type = element.querySelectorAll('.anisc-detail .anisc-info-wrap .anisc-info .item-title')[6]?.textContent?.replace('Type:','').trim() || '';
  const status = element.querySelectorAll('.anisc-detail .anisc-info-wrap .anisc-info .item-title')[7]?.textContent?.replace('Status:','').trim() || '';
  const genre = element.querySelectorAll('.anisc-detail .anisc-info-wrap .anisc-info .item-list a');
  const batch = element.querySelectorAll('.anisc-detail .film-buttons .batch-links a');

  const anime: Anime = {
    slug,
    sub,
    title,
    episode: '',
    thumb,
    quality,
    desc,
    episode_info: '',
    genre: [],
    score: 0,
    season,
    alternative_title,
    mal_score,
    rating,
    status,
    batch:[],
    type
  }

  infoEpisode.forEach(item => {
    const link = item.querySelector('a');
    if(!link){
      if (item.textContent?.includes('Ep')) {
        anime.episode = item.textContent?.trim() || '';
      }
      else if (item.textContent?.includes('min')) {
        anime.episode_info = item.textContent?.trim() || '';
      }
    }
  })

  genre.forEach(item => {
    const genre = {
        slug: item.getAttribute('href')?.replace('https://zoronime.com/genre/','').trim() || '',
        title: item.textContent?.trim() || ''
    };
    
    anime.genre?.push(genre)
  });

  batch.forEach(item => {
    const batch = {
      title: item.textContent?.trim() || '',
      url: item.getAttribute('href')?.trim() || ''
    }

    anime.batch?.push(batch);
  })

  return anime;
}

export function parseAnimeDetail(html: string): Anime[]{
  const { document } = parseHTML(html);
  const anime = Array.from(document.querySelectorAll('#wrapper #main-wrapper #ani_detail .ani_detail-stage .container .anis-content'))
    .map(item => extractAnimeDetail(item));
  return anime;
}