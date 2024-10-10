import type { AnimeDetail } from "$lib/types/anime";
import { parseHTML } from "linkedom";

function extrackAnimeEpisode(element: Element): AnimeDetail{
  const thumb = element.querySelector('.anis-content .anisc-poster .film-poster img')?.getAttribute('data-src')?.trim() || '';
  const title = element.querySelector('.anis-content .anisc-detail h2 a')?.textContent?.trim() || '';
  const japan = element.querySelector('.anis-content .anisc-detail h2 a')?.getAttribute('data-jname')?.trim() || '';
  const quality = element.querySelector('.anis-content .anisc-detail .film-stats .tick-quality')?.textContent?.trim() || '';
  const sub = element.querySelector('.anis-content .anisc-detail .film-stats .tick-dub')?.textContent?.trim() || '';
  const infoAnime = element.querySelectorAll('.anis-content .anisc-detail .film-stats .item');

  const episodes = element.querySelectorAll('#episodes-content .ss-list a');
  const downloads = element.querySelectorAll('.download-servers .ps__-list .item');
  const serverElement = element.querySelector('.player-servers .ps__-list');
  const servers = serverElement?.querySelectorAll('.item');

  const anime: AnimeDetail = {
    thumb,
    title,
    japan,
    sub,
    quality,
    year: parseFloat(infoAnime[1].querySelector('a')?.textContent?.trim() || ''),
    status:infoAnime[0]?.textContent?.trim() || '',
    type: infoAnime[2].querySelector('a')?.textContent?.trim() || '',
    download: [],
    episode: [],
    server: [],
  }

  episodes.forEach(item => {
    const episode = {
      slug: item.getAttribute('href')?.replace('https://zoronime.com/episode/','').trim() || '',
      number: parseFloat(item.getAttribute('id') || ''),
      title: item.getAttribute('title')?.trim() || ''
    }

    anime.episode.push(episode);
  })

  downloads.forEach(item => {
    const download = {
      title: item.querySelector('a')?.textContent?.trim() || '',
      url: item.querySelector('a')?.getAttribute('href')?.trim() || ''
    };

    anime.download.push(download);
  })

  servers?.forEach(item => {
    const server = {
      title: item.querySelector('a')?.textContent?.trim() || '',
      url: item.querySelector('a')?.getAttribute('href')?.trim() || ''
    }

    anime.server.push(server);
  })

  return anime;
}

export function parseAnimeEpisode(html: string): AnimeDetail[]{
  const { document } = parseHTML(html);
  const anime = Array.from(document.querySelectorAll('#main-wrapper .anis-watch-wrap'))
    .map(item => extrackAnimeEpisode(item));
  return anime;
}