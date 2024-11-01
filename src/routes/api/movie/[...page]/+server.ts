import { BASE_URL_ANIME } from "$env/static/private";
import { parseAnimeInfo } from "$lib/helper/extrackAnime";
import type { Anime } from "$lib/types/anime";
import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { parsePagination } from "$lib/helper/extrackPagination";

export const GET: RequestHandler = async ({fetch, params}) => {
  try {
    const {page} = params;
    const url = page ? `${BASE_URL_ANIME}/movie/page/${page}` : `${BASE_URL_ANIME}/movie`;
    
    const response = await fetch(url);
    const html = await response.text();

    const parseFunction: Anime[] = parseAnimeInfo(html);
    const pagination = parsePagination(html);

    return json({status:true, data: parseFunction, pagination},{status:200})
  } catch (e) {
    return json({status:false, message:(e as Error).message},{status:500})
  }
};