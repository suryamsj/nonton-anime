<script>
	import Seo from '$lib/components/Seo.svelte';
  import { Star, Play, Download, Tag } from 'lucide-svelte';

  import * as config from "$lib/utils/config";

  export let data;

  $: ({ anime } = data);
</script>

<Seo title="{anime.title} - {config.title}: {config.slogan}" />

<section class="py-5">
  <div class="container mx-auto">
    <div class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
      <div class="relative">
        <!-- Hero Section -->
        <div class="md:h-[400px] h-auto relative">
          <!-- Background Image (Blurred) -->
          <div 
            class="absolute inset-0 bg-cover bg-center blur-sm opacity-30"
            style="background-image: url({anime.thumb})"
          />
          
          <!-- Content Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
          
          <!-- Main Content -->
          <div class="relative h-full flex sm:flex-row flex-col sm:items-end items-start p-8">
            <!-- Poster Image -->
            <div class="relative w-[200px] h-[300px] rounded-xl overflow-hidden shadow-xl">
              <img 
                src={anime.thumb} 
                alt={anime.title}
                class="w-full h-full object-cover"
              />
              <div class="absolute top-2 right-2 bg-yellow-500 text-black font-bold px-2 py-1 rounded-lg text-sm">
                {anime.quality}
              </div>
            </div>
            
            <!-- Title and Basic Info -->
            <div class="sm:ml-8 text-white mb-4 mt-4 sm:mt-0">
              <h1 class="text-4xl font-bold mb-2">{anime.title}</h1>
              <p class="text-gray-300 mb-4">{anime.alternative_title}</p>
              
              <!-- Status and Rating -->
              <div class="flex gap-4 mb-4">
                <a href="/status/{anime?.status === "Tamat" ? "ended" : "ongoing"}" class="bg-blue-500 px-3 py-1 rounded-full text-sm flex gap-1 items-center">
                  <Tag size={16} /> {anime.status}
                </a>
                <span class="bg-purple-500 px-3 py-1 rounded-full text-sm">
                  {anime.rating}
                </span>
              </div>
              
              <!-- MAL Score -->
              <div class="flex items-center gap-2 mb-4">
                <Star class="text-yellow-500" size={20} />
                <span class="font-bold">{anime.mal_score}</span>
              </div>
              
              <div class="flex md:flex-row flex-col gap-4">
                <!-- Watch Button -->
                  <a 
                  href="/watch/{anime.type === "Anime" ? 'anime' : 'movie'}/{anime.slug}" 
                  class="inline-flex gap-2 items-center bg-primary hover:bg-primary-hover text-white font-bold py-2 px-4 rounded transition-colors"
                >
                <Play size={22} /> Watch Now
                </a>

                {#if anime.batch.length > 0}
                  {#each anime.batch as batch}
                    <a 
                    href={batch.url} 
                    class="inline-flex gap-2 bg-secondary hover:bg-secondary-hover text-white font-bold py-2 px-4 rounded transition-colors"
                    target="_blank"
                  >
                  <Download size={22} /> {batch.title}
                  </a>
                  {/each}
                {/if}
              </div>
            </div>
          </div>
        </div>
        
        <!-- Details Section -->
        <div class="p-8 bg-white dark:bg-gray-800">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Left Column -->
            <div>
              <h2 class="text-2xl font-bold mb-4 dark:text-white">Informasi</h2>
              <div class="space-y-4">
                <div>
                  <h3 class="text-gray-500 dark:text-gray-400">Episode</h3>
                  <p class="dark:text-white">{anime.episode}</p>
                </div>
                <div>
                  <h3 class="text-gray-500 dark:text-gray-400">Durasi</h3>
                  <p class="dark:text-white">{anime.episode_info}</p>
                </div>
                <div>
                  <h3 class="text-gray-500 dark:text-gray-400">Season</h3>
                   <a class="dark:text-white dark:hover:text-blue-500" href="/season/{anime.season ? anime.season.replace(' ','-').toLowerCase() : '#'}">{anime.season ? anime.season : '-'}</a>
                </div>
                <div>
                  <h3 class="text-gray-500 dark:text-gray-400">Subtitle</h3>
                  <p class="dark:text-white">{anime.sub}</p>
                </div>
              </div>
            </div>
            
            <!-- Right Column -->
            <div>
              <h2 class="text-2xl font-bold mb-4 dark:text-white">Genre</h2>
              <div class="flex flex-wrap gap-2">
                {#each anime.genre as genre}
                  <a 
                    href="/genre/{genre.slug}" 
                    class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors dark:text-white flex gap-1 items-center"
                  >
                  <Tag size={16} /> {genre.title}
                  </a>
                {/each}
              </div>
              
              <h2 class="text-2xl font-bold mt-8 mb-4 dark:text-white">Sinopsis</h2>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                {anime.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>