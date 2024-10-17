<section class="py-5">
  <div class="container mx-auto">
    <div class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg animate-pulse">
      <div class="relative">
        <!-- Hero Section -->
        <div class="md:h-[400px] h-auto relative">
          <!-- Background (Skeleton) -->
          <div class="absolute inset-0 bg-gray-300 dark:bg-gray-700" />
          
          <!-- Content Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
          
          <!-- Main Content -->
          <div class="relative h-full flex sm:flex-row flex-col sm:items-end items-start p-8">
            <!-- Poster Image (Skeleton) -->
            <div class="relative w-[200px] h-[300px] rounded-xl overflow-hidden bg-gray-400 dark:bg-gray-600" />
            
            <!-- Title and Basic Info (Skeleton) -->
            <div class="sm:ml-8 text-white mb-4 mt-4 sm:mt-0 w-full">
              <div class="h-8 bg-gray-400 dark:bg-gray-600 rounded w-3/4 mb-2" />
              <div class="h-4 bg-gray-400 dark:bg-gray-600 rounded w-1/2 mb-4" />
              
              <!-- Status and Rating (Skeleton) -->
              <div class="flex gap-4 mb-4">
                <div class="bg-gray-400 dark:bg-gray-600 w-24 h-6 rounded-full" />
                <div class="bg-gray-400 dark:bg-gray-600 w-16 h-6 rounded-full" />
              </div>
              
              <!-- MAL Score (Skeleton) -->
              <div class="flex items-center gap-2 mb-4">
                <div class="bg-gray-400 dark:bg-gray-600 w-8 h-6 rounded" />
              </div>
              
              <div class="flex md:flex-row flex-col gap-4">
                <!-- Watch Button (Skeleton) -->
                <div class="bg-gray-400 dark:bg-gray-600 w-32 h-10 rounded" />
                <!-- Download Button (Skeleton) -->
                <div class="bg-gray-400 dark:bg-gray-600 w-32 h-10 rounded" />
              </div>
            </div>
          </div>
        </div>
        
        <!-- Details Section (Skeleton) -->
        <div class="p-8 bg-white dark:bg-gray-800">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Left Column -->
            <div>
              <div class="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/4 mb-4" />
              <div class="space-y-4">
                {#each Array(4) as _}
                  <div>
                    <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mb-2" />
                    <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2" />
                  </div>
                {/each}
              </div>
            </div>
            
            <!-- Right Column -->
            <div>
              <div class="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/4 mb-4" />
              <div class="flex flex-wrap gap-2">
                {#each Array(5) as _}
                  <div class="bg-gray-300 dark:bg-gray-700 w-20 h-6 rounded-full" />
                {/each}
              </div>
              
              <div class="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/4 mt-8 mb-4" />
              {#each Array(3) as _}
                <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full mb-2" />
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>