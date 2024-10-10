import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { BASE_URL_ANIME } from "$env/static/private";
import { parseAnimeInfo } from "$lib/helper/extrackAnime";

export const GET: RequestHandler = async ({fetch, params}) => {
  try {
    const [search, page] = params.searchpage.split('/');
    const url = search 
    ? `${BASE_URL_ANIME}${page ? `/page/${page}/` : ''}?s=${encodeURIComponent(search)}` 
    : `${BASE_URL_ANIME}/home`;

    const response = await fetch(url);
    const html = await response.text();

    const anime = parseAnimeInfo(html);

    return json({status:true, data: anime},{status:200})
  } catch (e) {
    return json({status:false, message:(e as Error).message},{status:500})
  }
};