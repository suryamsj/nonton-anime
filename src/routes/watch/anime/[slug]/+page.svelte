<script lang="ts">
	import { page } from '$app/stores';
	import Seo from '$lib/components/Seo.svelte';
	import type { AnimeDetail, Server } from '$lib/types/anime.js';
  import { Play, Download } from 'lucide-svelte';
  import { onMount } from 'svelte';
  import * as config from "$lib/utils/config";

  export let data: { anime: AnimeDetail };

  $: ({ anime } = data);

  let currentServer: Server | null = null;
  let iframeSource: string = '';

  function setDefaultServer(): void {
    const nanifile720 = anime.server.find(s => s.title === "nanifile (720p)");
    const nanifile480 = anime.server.find(s => s.title === "nanifile (480p)");
    currentServer = nanifile720 || nanifile480 || anime.server[0] || null;
    updateIframeSource();
  }

  function updateIframeSource(): void {
    iframeSource = currentServer?.url || '';
  }

  function changeServer(server: Server): void {
    currentServer = server;
    updateIframeSource();
  }

  // Function untuk mengambil angka dari slug episode
  function getEpisodeNumber(slug: string) {
    const episodeMatch = slug.match(/episode-(\d+)/);
    return episodeMatch ? parseInt(episodeMatch[1], 10) : null;
  }

  // Mendapatkan slug dari URL
  $: slug = $page.params.slug;

  // Mendapatkan nomor episode dari slug
  $: episodeNumber = getEpisodeNumber(slug);

  $: {
    setDefaultServer();
  }

  onMount(() => {
    setDefaultServer();
  });
</script>

<Seo title="Nonton {anime.title} - {config.title}: {config.slogan}" />

<section class="py-5">
  <div class="container mx-auto">
    <div class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
      <div class="relative">
        <!-- Video Player Section -->
        <div class="relative w-full pt-[56.25%]">
          {#if iframeSource}
              <iframe
                src={iframeSource}
                class="absolute top-0 left-0 w-full h-full"
                frameborder="0"
                allowfullscreen
                title="Anime Video Player"
              ></iframe>
            {:else}
              <div class="absolute top-0 left-0 w-full h-full bg-gray-900 flex items-center justify-center">
                <span class="text-white text-xl">Loading video...</span>
              </div>
            {/if}
        </div>

        <!-- Episode Info and Controls -->
        <div class="p-6">
          <h1 class="text-3xl font-bold mb-2 dark:text-white">{anime.title}</h1>
          <p class="text-xl mb-4 dark:text-gray-300">Episode {episodeNumber}</p>
          
          <div class="flex flex-wrap gap-4 mb-6">
            {#each anime.server as server}
              <button 
                class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors flex items-center gap-2"
                class:bg-blue-700={currentServer === server}
                on:click={() => changeServer(server)}
              >
                <Play size={20} /> {server.title}
              </button>
            {/each}
          </div>

          <div class="flex flex-wrap gap-4">
            {#each anime.download as download}
              <a href={download.url} target="_blank" rel="noopener noreferrer" class="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded transition-colors flex items-center gap-2">
                <Download size={20} /> Download {download.title}
              </a>
            {/each}
          </div>
        </div>

        <!-- Anime Details -->
        <div class="p-6 bg-gray-100 dark:bg-gray-700">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Left Column -->
            <div>
              <h2 class="text-2xl font-bold mb-4 dark:text-white">Informasi</h2>
              <div class="space-y-4">
                <div>
                  <h3 class="text-gray-500 dark:text-gray-400">Status</h3>
                  <p class="dark:text-white">{anime.status}</p>
                </div>
                <div>
                  <h3 class="text-gray-500 dark:text-gray-400">Tipe</h3>
                  <p class="dark:text-white">{anime.type}</p>
                </div>
                <div>
                  <h3 class="text-gray-500 dark:text-gray-400">Tahun</h3>
                  <p class="dark:text-white">{anime.year}</p>
                </div>
                <div>
                  <h3 class="text-gray-500 dark:text-gray-400">Subtitle</h3>
                  <p class="dark:text-white">{anime.sub}</p>
                </div>
              </div>
            </div>
            
            <!-- Right Column -->
            <div>
              <h2 class="text-2xl font-bold mb-4 dark:text-white">Episode List</h2>
              <div class="h-[300px] overflow-y-auto pr-4 space-y-2">
                {#each anime.episode as ep}
                  <a href="/watch/{anime.type.toLowerCase()}/{ep.slug}" 
                     class="block bg-white dark:bg-gray-600 p-3 rounded shadow hover:bg-gray-50 dark:hover:bg-gray-500 transition-colors">
                    <span class="font-bold dark:text-white">Episode {ep.number}:</span>
                    <span class="dark:text-gray-300">{ep.title}</span>
                  </a>
                {/each}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>