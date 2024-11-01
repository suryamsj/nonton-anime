import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({params, fetch}) => {
  async function getAnime(url: string) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.data;
    } catch (e) {
      throw error(500, (e as Error).message);
    }
  }

  async function getPagination(url: string) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.pagination;
    } catch (e) {
      throw error(500, (e as Error).message);
    }
  }

  const [slug, page] = params.slugpage.split('/');
  const url = `/api/genre/${slug}${page ? `/${page}` : ''}`;
  const base = `/api/genre/${slug}`;
  
  return {animeList: getAnime(url), pagination: await getPagination(base)}
};