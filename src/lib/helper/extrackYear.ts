import type { Year } from "$lib/types/year";
import { parseHTML } from "linkedom";

function extrackAnimeYear(element: Element): Year{
  const slug = element.querySelector('a')?.getAttribute('href')?.replace('https://zoronime.com/year_/',"").trim() || "";
  const title = element.querySelector('a')?.textContent?.trim() || "";

  const animeYear: Year = {
    slug,
    title
  }

  return animeYear;
}

export function parseAnimeYear(html: string): Year[]{
  const {document} = parseHTML(html);
  const year = Array.from(document.querySelectorAll('.block_area.block_area_sidebar.block_area-genres:nth-child(2) .block_area-content .cbox.cbox-genres ul li')).map(item => extrackAnimeYear(item));
  return year;
}