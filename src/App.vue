<script setup>
import NavBar from './components/NavBar.vue';
// import AboutMe from './components/AboutMe.vue';
import FooterCompo from './components/FooterCompo.vue';
</script>

<template>
<!-- to make the footer stick to the bottom -->
<div class="d-flex flex-column min-vh-100">
  <NavBar/>
  <main class="flex-grow-1 p-5" style="background-color: #1e293b; color: #f8f9fa">
    <!-- RouterView is like a placeholder that dynamically render to match with the URL -->
    <RouterView/>
  </main>
  <FooterCompo/>
</div>
</template>
