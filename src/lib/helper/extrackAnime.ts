import type { Anime } from "$lib/types/anime";
import { parseHTML } from "linkedom";

function extrackAnimeInfo(element: Element): Anime{
  const slug = element.querySelector('.film-detail h3 a')?.getAttribute('href')?.replace(/https:\/\/zoronime\.com\/(?:anime|movie)\//, "").trim() || "";
  const title = element.querySelector('.film-detail h3 a')?.textContent?.trim() || "";
  const thumb = element.querySelector('.film-poster img')?.getAttribute('data-src')?.trim() || "";
  const score = parseFloat(element.querySelector('.film-poster .ltr .tick-item-sub')?.textContent?.trim() || "") || 0;
  const episode = element.querySelector('.film-poster .rtl')?.textContent?.trim() || "";
  const subandseason = element.querySelectorAll('.film-detail .fd-infor .fdi-item');

  const animeInfo: Anime = {
    slug,
    title,
    thumb,
    score,
    episode,
    sub:'',
    season:''
  }

  subandseason.forEach(item => {
    const link = item.querySelector('a');
    if(link){
      animeInfo.season = link.textContent?.trim() || "";
    }else{
      animeInfo.sub = item.textContent?.trim() || "";
    }
  })

  return animeInfo;
}

export function parseAnimeInfo(html: string): Anime[]{
  const { document } = parseHTML(html);
  const anime = Array.from(document.querySelectorAll('.block_area.block_area_home .block_area-content.block_area-list.film_list.film_list-grid .film_list-wrap .flw-item '))
    .map(item => extrackAnimeInfo(item));
  return anime;
}