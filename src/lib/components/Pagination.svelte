<script lang="ts">
	import { goto } from "$app/navigation";

  export let currentPage: number;
  export let totalPages: number;
  export let baseRoute: string = '';

  function getPageNumbers(current: number, total: number): (number | string)[] {
    if (total <= 10) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    const pages: (number | string)[] = [];
    
    for (let i = 1; i <= 3; i++) {
      pages.push(i);
    }
    
    if (current <= 4) {
      pages.push('...', total);
    } else if (current >= total - 3) {
      pages.push('...', total - 2, total - 1, total);
    } else {
      pages.push('...', current - 1, current, current + 1, '...', total);
    }
    
    return pages;
  }

  $: pageNumbers = getPageNumbers(currentPage, totalPages);
  
  $: route = baseRoute;

  async function handlePageClick(page: number | string) {
    if (typeof page === 'number' && page !== currentPage) {
      const newUrl = `${route}/${page}`;
      await goto(newUrl, { 
        replaceState: false
      });
    }
  }
</script>

<nav class="flex justify-center items-center space-x-2 my-4">
  <!-- Previous button -->
  <button
    on:click={() => handlePageClick(currentPage - 1)}
    disabled={currentPage === 1}
    class="px-3 py-2 rounded-lg text-white hover:bg-light-hover disabled:opacity-50 disabled:cursor-not-allowed border border-primary bg-primary hover:text-dark"
  >
    &lt;
  </button>

  <!-- Page numbers -->
  {#each pageNumbers as page}
    {#if page === '...'}
      <span class="px-3 py-2 rounded-lg bg-primary text-light hover:bg-primary-hover border border-primary">...</span>
    {:else}
      <button
        on:click={() => handlePageClick(page)}
        class="px-3 py-2 rounded-lg {currentPage === page ? 'bg-primary text-light' : 'bg-primary text-light hover:bg-primary-hover'} border border-primary"
      >
        {page}
      </button>
    {/if}
  {/each}

  <!-- Next button -->
  <button
    on:click={() => handlePageClick(currentPage + 1)}
    disabled={currentPage === totalPages}
    class="px-3 py-2 rounded-lg text-white hover:bg-light-hover disabled:opacity-50 disabled:cursor-not-allowed border border-primary bg-primary hover:text-dark"
  >
    &gt;
  </button>
</nav>