import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { BASE_URL_ANIME } from "$env/static/private";
import { parseAnimeInfo } from "$lib/helper/extrackAnime";

export const GET: RequestHandler = async ({params, fetch}) => {
  try {
    const [slug, page] = params.slugpage.split('/');
    const url = `${BASE_URL_ANIME}/tag/${slug}${page ? `/page/${page}` : ''}`;

    const response = await fetch(url);
    const html = await response.text();

    const anime = parseAnimeInfo(html);

    return json({status:true, data: anime},{status:200})
  } catch (e) {
    return json({status:false, message:(e as Error).message},{status:500})
  }
};