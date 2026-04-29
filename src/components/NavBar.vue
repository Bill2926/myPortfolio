<script setup>
</script>

<template>
<nav class="navbar navbar-expand-lg border-bottom border-2" style="background-color: #0f172a;" data-bs-theme="dark">
  <div class="container-lg">
    <RouterLink class="navbar-brand fw-bold" to="/">myPortfolio</RouterLink>

    <!-- collapse button for mobile UI -->
    <button class="navbar-toggler shadow-none" data-bs-toggle="collapse" data-bs-target="#myNav" type="button">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="myNav">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
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
