<script>
	import AnimeCard from "$lib/components/AnimeCard.svelte";

  export let data;

  $:({animeList} = data);
</script>
<section class="py-5">
  <div class="container mx-auto">
    <div class="flex flex-col space-y-6">
      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-bold">Anime Terbaru</h1>
        <a href="/anime" class="text-white bg-primary hover:bg-primary-hover transition-all px-2 py-2 rounded-md">Lihat Semua</a>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {#each animeList as anime}
          <div class="w-full flex justify-center">
            <AnimeCard {...anime} />
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>