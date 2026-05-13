<script setup>
defineProps({
  aPlan: Object,
})
</script>

<template>
  <section>
    <div class="card h-100" data-bs-theme="dark">
      <div class="card-body">
        <div v-if="aPlan.title == 'Research and Academia'" class="text-center">
          <i class="bi bi-pc-display fs-3"></i>
        </div>
        <div v-else-if="aPlan.title == 'Traveling'" class="text-center">
          <i class="bi bi-globe-asia-australia fs-3"></i>
        </div>
        <div v-else-if="aPlan.title == 'Languages'" class="text-center">
          <i class="bi bi-translate fs-3"></i>
        </div>
        <div v-else class="text-center">
          <i class="bi bi-cash-coin fs-3"></i>
        </div>

        <p class="card-title text-center">{{ aPlan.title }}</p>
        <hr />
        <p class="card-text text-center">{{ aPlan.description }}</p>
      </div>
    </div>
  </section>
</template>
