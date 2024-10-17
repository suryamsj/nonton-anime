import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({fetch, params}) => {
  async function getAnime(slug: string) {
    try {
      const response = await fetch(`/api/watch/movie/${slug}`);
      const data = await response.json();
      return data.data[0];
    } catch (e) {
      throw error(500, (e as Error).message);
    }
  }

  const {slug} = params;

  return {anime: await getAnime(slug)}
};