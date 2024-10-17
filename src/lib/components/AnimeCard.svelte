<script lang="ts">
  export let slug: string = "";
  export let thumb: string = "/placeholder.jpg";
  export let title: string = "One Piece";
  export let sub: string = "Adventure, Action, Fantasy";
  export let episode: string = "1069";
  export let season: string = "Season 20";
  export let score: string = "9.8";
</script>

<div class="relative group w-[300px] h-[400px] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105">
  <!-- Card Image -->
  <img 
    src={thumb} 
    alt={title}
    class="w-full h-full object-cover"
  />
  
  <!-- Overlay Gradient -->
  <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  
  <!-- Content Container -->
  <div class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
    <!-- Title -->
    <a href={episode !== "Movie" ? `/anime/${slug}` : `/watch/movie/${slug}`} class="text-2xl font-bold text-white mb-2">{title}</a>
    
    <!-- sub -->
    <p class="text-gray-300 text-sm mb-3">{sub}</p>
     
    <!-- Info Grid -->
    <div class="grid grid-cols-2 gap-2 text-sm text-white mb-3">
      <div class="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
        Episode: {episode}
      </div>
      <div class="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
        {season ? season : '-'}
      </div>
    </div>
    
    <!-- Score -->
    <div class="flex items-center gap-1 bg-yellow-500/90 text-black font-bold rounded-lg px-3 py-1 w-fit">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
      <span>{score}</span>
    </div>
  </div>
</div>