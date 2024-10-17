<script lang="ts">
  import { Menu } from 'lucide-svelte';
  
  let isMenuOpen = false;
  
  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };
</script>

<nav class="w-full relative bg-white dark:bg-primary px-8 py-4 shadow-md">
  <div class="container mx-auto">
    <div class="flex items-center justify-between space-x-5">
      <a href="/" class="text-2xl font-bold dark:text-white text-dark hover:text-secondary dark:hover:text-secondary transition-colors">AnimeKuy</a>
  
      <div class="hidden md:flex flex-row items-center space-x-3">
        <a class="dark:text-white text-dark hover:text-secondary dark:hover:text-secondary transition-colors" href="/latest">Anime</a>
        <a class="dark:text-white text-dark hover:text-secondary dark:hover:text-secondary transition-colors" href="/movie">Movie</a>
        <a class="dark:text-white text-dark hover:text-secondary dark:hover:text-secondary transition-colors" href="/">Recomended</a>
      </div>
  
      <!-- Button Menu -->
      <button 
        class="md:hidden block text-dark dark:text-white hover:text-secondary transition-colors" 
        on:click={toggleMenu}
        aria-label="Toggle menu">
        <Menu size={24} />
      </button>
    </div>
  
    <!-- Mobile Menu -->
    <div 
      class="md:hidden transition-all duration-300 ease-in-out overflow-hidden" 
      class:max-h-48={isMenuOpen} 
      class:opacity-100={isMenuOpen} 
      class:mt-4={isMenuOpen}
      class:max-h-0={!isMenuOpen} 
      class:opacity-0={!isMenuOpen}
    >
      <div class="flex flex-col space-y-4">
        <a class="dark:text-white text-dark hover:text-secondary dark:hover:text-secondary transition-colors" href="/anime">Anime</a>
        <a class="dark:text-white text-dark hover:text-secondary dark:hover:text-secondary transition-colors" href="/movie">Movie</a>
        <a class="dark:text-white text-dark hover:text-secondary dark:hover:text-secondary transition-colors" href="/recommended">Recomended</a>
      </div>
    </div>
  </div>
</nav>