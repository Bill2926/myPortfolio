<script setup>
import NavBar from './components/NavBar.vue';
import AboutMe from './components/AboutMe.vue';
import FooterCompo from './components/FooterCompo.vue';
</script>

<template>
<div class="d-flex flex-column min-vh-100">
  <NavBar/>
  <main class="flex-grow-1 py-5" style="background-color: #1e293b; color: #f8f9fa">
    <AboutMe/>
  </main>
  <FooterCompo/>
</div>
</template>
