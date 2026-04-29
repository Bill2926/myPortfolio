<template>
  <div class="container-fluid d-flex align-items-center justify-content-center" style="min-height: 70vh;">
    <div class="text-center text-white">

      <div class="mb-4">
        <i class="bi bi-exclamation-triangle display-1 text-primary"></i>
      </div>

      <h1 class="display-3 fw-bold">404</h1>
      <h2 class="h4 opacity-75 mb-4">Oops! There's nothing here...</h2>

      <p class="small opacity-50 mb-5">
        You may just found...an undiscovered blackhole ?
      </p>

      <RouterLink to="/" class="btn btn-outline-light rounded-pill px-4">
        Go Back Home
      </RouterLink>

    </div>
  </div>
</template>

<style scoped>
/* Ensuring the background matches your specific navy tone */
:host {
  display: block;
  background-color: #0f172a;
}

/* Optional: Add a slight animation to the 404 text */
h1 {
  text-shadow: 0 0 20px rgba(13, 110, 253, 0.5);
}
</style>
