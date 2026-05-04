<script setup>
import ProjectCard from '@/components/ProjectCard.vue'
import Projects from '../assets/projects.json'
import Java from '../assets/java.png'
import { ref } from 'vue';
import { useToast } from 'vue-toastification';

const toast = useToast();
const coffeeCup = ref(0)

function drink() {
  coffeeCup.value++;
  if (coffeeCup.value == 5) {
    toast.success("You're a real coffee addict!");
  }
}
</script>

<template>
  <section>
    <p class="display-4">My Pinned Projects</p>
    <p class="lead">
      These are my projects that I'm proud of and cost me so many nights to get through.
    </p>
    <p class="lead">
      You can find more about my CS World on my GitHub profile:
      <span
        ><a href="https://github.com/Bill2926" class="text-reset"><i class="bi bi-github"></i></a
      ></span>
    </p>

    <!-- Quote -->
    <div class="card text-start mx-auto my-3" style="width: fit-content" data-bs-theme="dark">
      <div class="card-header">My Favourite Quote</div>
      <div class="card-body">
        <figure>
          <blockquote class="blockquote">
            <p>In the middle of difficulty lies opportunity.</p>
          </blockquote>
          <figcaption class="blockquote-footer text-end">
            <cite title="Source Title">Albert Einstein</cite>
          </figcaption>
        </figure>
      </div>
    </div>

    <div class="row g-4">
      <div v-for="p in Projects" :key="p.id" class="col-12 w-75 mx-auto">
        <ProjectCard :aProj="p" />
      </div>
    </div>

    <div class="text-center my-5">
    <div class="d-flex align-items-center justify-content-center">
    <p class="display-6">Total Coffee Cup <span><img :src=Java style="width: 2rem; vertical-align: middle;"></span>: {{ coffeeCup }}</p>
    </div>

    <!-- Use @click to trigger the function -->
    <button @click="drink" class="btn btn-primary">
      Click Me
    </button>
  </div>
  </section>
</template>
