<script setup>
</script>

<template>
<nav class="navbar navbar-expand-lg navbar-light border-bottom text-white" style="background-color: #0f172a;" data-bs-theme="dark">
  <div class="container-md">
    <RouterLink class="navbar-brand fw-bold" to="/">myPortfolio</RouterLink>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink class="nav-link" to="/">About Me</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/projects">Projects</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/plans">My Plans</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/contact">Contact</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
