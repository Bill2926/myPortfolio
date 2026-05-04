<script setup>
import Py from '../assets/python.png'

defineProps({
  aProj: Object
})
</script>

<template>
  <div class="card bg-transparent border-1 p-2" data-bs-theme="dark">
    <div class="card-body">
      <div class="card-title fw-bold">
        {{ aProj.title }}
      </div>
      <div class="card-subtitle text-body-secondary">
        Language: <span><img :src="Py" style="max-width: 1.5rem"></span>
      </div>
      <div class="card-text">
        {{ aProj.description }} <br>
        GitHub link: <span><a :href="aProj.link" class="text-reset" target="_blank"><i class="bi bi-github"></i></a></span>
      </div>
    </div>
  </div>
</template>
