<script lang="ts">
  export let years: number[] = [];
</script>

<div class="max-w-4xl mx-auto p-6">
  <div class="bg-dark rounded-xl p-6 shadow-lg">
    <h2 class="text-2xl font-bold text-light mb-6">Anime by Release Year</h2>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
      {#each years as year}
        <a href="/year{year}" class="px-4 py-3 rounded-lg text-center transition-all duration-300 bg-primary text-light shadow-lg hover:bg-primary-hover hover:text-light hover:scale-105">
          <span class="text-lg font-semibold">{year}</span>
        </a>
      {/each}
    </div>
  </div>
</div>