<script lang="ts">
	import AnimeCard from "$lib/components/AnimeCard.svelte";
	import AnimeCardSkeleton from "$lib/components/AnimeCardSkeleton.svelte";

  export let data;

  $:({animeList} = data);
  $:({animeComplete} = data);

  const totalCard: number = 24;
</script>
<section class="py-5">
  <div class="container mx-auto">
    <div class="flex flex-col space-y-6">
      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-bold dark:text-white">Anime Terbaru</h1>
        <a href="/latest" class="text-white bg-primary hover:bg-primary-hover transition-all px-2 py-2 rounded-md">Lihat Semua</a>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {#await animeList}
          {#each Array(totalCard) as _}
          <div class="w-full flex justify-center">
            <AnimeCardSkeleton />
          </div>
          {/each}
        {:then animeList}
          {#each animeList as anime}
            <div class="w-full flex justify-center">
              <AnimeCard {...anime} />
            </div>
          {:else}
            <p class="text-center col-span-3">Film tidak ada</p>
          {/each}
        {:catch error}
          <p class="text-center col-span-3">{error}</p>
        {/await}
      </div>
    </div>
  </div>
</section>

<section class="py-5">
  <div class="container mx-auto">
    <div class="flex flex-col space-y-6">
      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-bold dark:text-white">Anime Tamat</h1>
        <a href="/status/ended" class="text-white bg-primary hover:bg-primary-hover transition-all px-2 py-2 rounded-md">Lihat Semua</a>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {#await animeComplete}
          {#each Array(totalCard) as _}
          <div class="w-full flex justify-center">
            <AnimeCardSkeleton />
          </div>
          {/each}
        {:then animeComplete}
          {#each animeComplete as anime}
            <div class="w-full flex justify-center">
              <AnimeCard {...anime} />
            </div>
          {:else}
            <p class="text-center col-span-3">Film tidak ada</p>
          {/each}
        {:catch error}
          <p class="text-center col-span-3">{error}</p>
        {/await}
      </div>
    </div>
  </div>
</section>