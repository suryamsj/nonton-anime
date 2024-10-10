import { BASE_URL_ANIME } from "$env/static/private";
import { parseAnimeEpisode } from "$lib/helper/extrackAnimeEpisode";
import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({params, fetch}) => {
  try {
    const {slug} = params;

    const response = await fetch(`${BASE_URL_ANIME}/episode/${slug}`);
    const html = await response.text();

    console.log(html);
    

    const anime = parseAnimeEpisode(html);
    return json({status:true, data: anime},{status:200})
  } catch (e) {
    return json({status:false, message:(e as Error).message},{status:500})
  }
};