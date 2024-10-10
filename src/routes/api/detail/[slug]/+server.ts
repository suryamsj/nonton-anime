import { BASE_URL_ANIME } from "$env/static/private";
import { json } from "@sveltejs/kit";
import { parseAnimeDetail } from "$lib/helper/extrackAnimeDetail";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({fetch, params}) => {
  try {
    const {slug} = params;

    const response = await fetch(`${BASE_URL_ANIME}/anime/${slug}`);
    const html = await response.text();

    const anime = parseAnimeDetail(html);
    return json({status:true, data: anime},{status:200})
  } catch (e) {
    return json({status:false, message:(e as Error).message},{status:500})
  }
};