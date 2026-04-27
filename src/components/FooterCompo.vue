<script setup>
import VueLogo from "../assets/vuedotjs.svg"
import BootStrapLogo from "../assets/bootstrap.svg"
</script>

<template>
<footer class="border-top border-2" style="background-color: #0f172a; color: #f8f9fa;">
  <div class="container-lg text-center p-5 text-white">
    <p class="mb-0">My portfolio is made with Vue.js
      <span><img :src="VueLogo" style="height: 1.5em; vertical-align: middle; filter: invert(100%) brightness(200%);"></span>
      and Bootstrap
      <span><img :src="BootStrapLogo" style="height: 1.5em; vertical-align: middle; filter: invert(100%) brightness(200%);"></span>
    </p>
  </div>
</footer>
</template>
