import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { BASE_URL_ANIME } from "$env/static/private";
import type { Year } from "$lib/types/year";
import type { Anime } from "$lib/types/anime";
import { parseAnimeInfo } from "$lib/helper/extrackAnime";
import { parseAnimeYear } from "$lib/helper/extrackYear";
import { parsePagination } from "$lib/helper/extrackPagination";

export const GET: RequestHandler = async ({fetch, params}) => {
 try {
  const [slug, page] = params.slugpage.split('/');
  const url = slug ? `${BASE_URL_ANIME}/year_/${slug}${page ? `/page/${page}` : ''}` : `${BASE_URL_ANIME}/home`;

  const response = await fetch(url);
  const html = await response.text();

  let parseFunction: Year[] | Anime[];
  let pagination;

  if(slug){
    parseFunction = parseAnimeInfo(html);
    pagination = parsePagination(html);
  }else{
    parseFunction = parseAnimeYear(html);
    pagination = null;
  }
  
  return json({status:true, data: parseFunction, pagination},{status:200})
 } catch (e) {
  return json({status:false, message:(e as Error).message},{status:500})
 }
};