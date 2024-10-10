import type { Genre } from "$lib/types/genre";
import { parseHTML } from "linkedom";

function extrackAnimeGenre(element: Element): Genre{
  const slug = element.querySelector('a')?.getAttribute('href')?.replace('https://zoronime.com/genre/',"").trim() || "";
  const title = element.querySelector('a')?.textContent?.trim() || "";

  const animeGenre: Genre = {
    slug,
    title
  }

  return animeGenre;
}

export function parseAnimeGenre(html: string): Genre[]{
  const {document} = parseHTML(html);
  const genre = Array.from(document.querySelectorAll('.block_area.block_area_sidebar.block_area-genres:nth-child(1) .block_area-content .cbox.cbox-genres ul li')).map(item => extrackAnimeGenre(item));
  return genre;
}