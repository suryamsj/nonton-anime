import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { parseAnimeInfo } from "$lib/helper/extrackAnime";
import { BASE_URL_ANIME } from "$env/static/private";
import { parsePagination } from "$lib/helper/extrackPagination";

export const GET: RequestHandler = async ({fetch, params}) => {
  try {
    const {page} = params;

    const url = page ? `${BASE_URL_ANIME}/home/page/${page}` : `${BASE_URL_ANIME}/home`;

    const response = await fetch(url);
    const html = await response.text();

    const anime = parseAnimeInfo(html);
    const pagination = parsePagination(html);

    return json({status:true, data: anime, pagination},{status:200})
  } catch (e) {
    return json({status:false, message:(e as Error).message},{status:500})
  }
};