<script lang="ts">
	import { theme } from '$lib/theme';
  import { onMount } from 'svelte';
  
  let isMenuOpen = false;
  
  onMount(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'light';
    theme.setTheme(savedTheme);
  });
  
  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };
</script>

<nav class="w-full relative bg-white dark:bg-primary px-8 py-4 shadow-md">
  <div class="container mx-auto">
    <div class="flex items-center justify-between space-x-5">
      <a href="/" class="text-2xl font-bold dark:text-white text-dark hover:text-secondary dark:hover:text-secondary transition-colors">AnimeKuy</a>
  
      <div class="hidden md:flex flex-row items-center space-x-3">
        <a class="dark:text-white text-dark hover:text-secondary dark:hover:text-secondary transition-colors" href="/">Anime</a>
        <a class="dark:text-white text-dark hover:text-secondary dark:hover:text-secondary transition-colors" href="/">Movie</a>
        <a class="dark:text-white text-dark hover:text-secondary dark:hover:text-secondary transition-colors" href="/">Recomended</a>
        
        <!-- Theme Toggle Button -->
        <button 
          on:click={() => theme.toggle()}
          class="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 transition-colors"
          aria-label="Toggle theme"
        >
          <!-- Sun icon for dark mode -->
          <svg 
            class="w-5 h-5 hidden dark:block text-yellow-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            ></path>
          </svg>
          <!-- Moon icon for light mode -->
          <svg 
            class="w-5 h-5 block dark:hidden text-gray-800" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            ></path>
          </svg>
        </button>
      </div>
  
      <!-- Button Menu -->
      <button 
        class="md:hidden block text-dark dark:text-white hover:text-secondary transition-colors" 
        on:click={toggleMenu}
        aria-label="Toggle menu"
      >=</button>
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
        
        <!-- Theme Toggle Button for Mobile -->
        <button 
          on:click={() => theme.toggle()}
          class="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 transition-colors w-fit"
          aria-label="Toggle theme"
        >
          <svg 
            class="w-5 h-5 hidden dark:block text-yellow-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            ></path>
          </svg>
          <svg 
            class="w-5 h-5 block dark:hidden text-gray-800" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</nav>