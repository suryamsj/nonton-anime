import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({fetch, params}) => {
  async function getDetailAnime(slug: string) {
    try {
      const response = await fetch(`/api/detail/${slug}`);
      const data = await response.json();
      return data.data[0];
    } catch (e) {
      throw error(500, (e as Error).message);
    }
  }

  const {slug} = params;

  return {anime: await getDetailAnime(slug)}
};