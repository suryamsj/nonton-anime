<script lang="ts">
  export let currentPage: number;
  export let totalPages: number;
  export let onPageChange: (page: number) => void;

  $: pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  
  $: visiblePages = pages.filter(page => {
    if (page === 1 || page === totalPages) return true;
    if (page >= currentPage - 1 && page <= currentPage + 1) return true;
    return false;
  });

  $: pagesWithEllipsis = visiblePages.reduce((acc: (number | string)[], page, i) => {
    if (i > 0 && visiblePages[i - 1] !== page - 1) {
      acc.push('...');
    }
    acc.push(page);
    return acc;
  }, []);
</script>

<div class="flex justify-center items-center gap-2 my-6">
  <button
    on:click={() => onPageChange(currentPage - 1)}
    disabled={currentPage === 1}
    class="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
  >
    Previous
  </button>

  {#each pagesWithEllipsis as page}
    {#if page === '...'}
      <span class="px-3 py-1">{page}</span>
    {:else}
      <button
        on:click={() => onPageChange(Number(page))}
        class="px-3 py-1 rounded-lg {currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}"
      >
        {page}
      </button>
    {/if}
  {/each}

  <button
    on:click={() => onPageChange(currentPage + 1)}
    disabled={currentPage === totalPages}
    class="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
  >
    Next
  </button>
</div>