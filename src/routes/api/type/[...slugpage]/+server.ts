import { BASE_URL_ANIME } from "$env/static/private";
import { parseAnimeInfo } from "$lib/helper/extrackAnime";
import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { parsePagination } from "$lib/helper/extrackPagination";

export const GET: RequestHandler = async ({fetch, params}) => {
  try {
    const [slug, page] = params.slugpage.split('/');
    const url = `${BASE_URL_ANIME}/${slug}${page ? `/page/${page}` : ''}`;

    const response = await fetch(url);
    const html = await response.text();

    const anime = parseAnimeInfo(html);
    const pagination = parsePagination(html);

    return json({status:true, data: anime, pagination},{status:200})
  } catch (e) {
    return json({status:false, message:(e as Error).message},{status:500})
  }
};