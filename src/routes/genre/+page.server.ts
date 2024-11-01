import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({fetch}) => {
  async function getGenres(){
    try {
      const response = await fetch('/api/genre');
      const data = await response.json();
      return data.data;
    } catch (e) {
      throw error(500, (e as Error).message);
    }
  }

  return {genres: await getGenres()}
};