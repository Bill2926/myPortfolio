<script setup>
import Py from '../assets/python.svg'
import Projects from '../assets/projects.json'
</script>

<template>
  <section>
    <p class="display-4">My Pinned Projects</p>
    <p class="lead">
      These are my projects that I'm proud of and cost me so many nights to get through.
    </p>
    <div class="card text-start mx-auto" style="width: fit-content;" data-bs-theme="dark">
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
  </section>
</template>
