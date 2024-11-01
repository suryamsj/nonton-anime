import type { RequestHandler } from "./$types";
import type { Genre } from "$lib/types/genre";
import type { Anime } from "$lib/types/anime";
import { json } from "@sveltejs/kit";
import { BASE_URL_ANIME } from "$env/static/private";
import { parseAnimeInfo } from "$lib/helper/extrackAnime";
import { parseAnimeGenre } from "$lib/helper/extrackGenre";
import { parsePagination } from "$lib/helper/extrackPagination";

export const GET: RequestHandler = async ({params, fetch}) => {
  try {
    const [slug, page] = params.slugpage.split('/');
    const url = slug ? `${BASE_URL_ANIME}/genre/${slug}${page ? `/page/${page}` : ''}` : `${BASE_URL_ANIME}/home`;
    
    const response = await fetch(url);
    const html = await response.text();

    let parseFunction: Genre[] | Anime[];
    let pagination;    

    if(slug){
      parseFunction = parseAnimeInfo(html);      
      pagination = parsePagination(html);      
    }else{
      parseFunction = parseAnimeGenre(html);
      pagination = null;
    }

    return json({status:true, data: parseFunction, pagination},{status:200})
  } catch (e) {
    return json({status:false, message:(e as Error).message},{status:500})
  }
};