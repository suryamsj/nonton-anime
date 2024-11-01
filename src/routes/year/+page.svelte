<script>
	import Seo from "$lib/components/Seo.svelte";
  import * as config from "$lib/utils/config";

  export let data;

  $:({years} = data)
</script>

<Seo title="Daftar Tahun - {config.title}: {config.slogan}" />

<section class="py-5">
  <div class="container mx-auto">
    <div class="flex flex-col space-y-6">
      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-bold dark:text-white">Daftar Tahun</h1>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {#each years as year}
          <a href="/year/{year.title}" class="px-4 py-3 rounded-lg text-center transition-all duration-300 bg-primary text-light shadow-lg hover:bg-primary-hover hover:text-light hover:scale-105">
            <span class="text-lg font-semibold">{year.title}</span>
          </a>
        {/each}
      </div>
    </div>
  </div>
</section>