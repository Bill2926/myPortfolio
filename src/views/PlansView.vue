<script setup>
import PlanCard from '@/components/PlanCard.vue'
import Plans from '../assets/plans.json'
// import { ref } from 'vue';
</script>

<template>
  <section>
    <p class="display-4">My Current Plans</p>
    <p class="lead">
      These are many things I want to do and achieve but these are just my currents (2026), time
      will flies and these things below will be ticked off/changed :) Who knows.
    </p>
    <div class="row g-4">
      <div v-for="pl in Plans" :key="pl.id" class="col-sm-12 col-md-6">
        <!-- h-100 tells the component to take up 100% height of the column -->
        <PlanCard :aPlan="pl" class="h-100" />
      </div>
    </div>
  </section>
</template>
