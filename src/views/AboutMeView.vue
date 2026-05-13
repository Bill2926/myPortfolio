<script setup>
import ProfilePic from '../assets/me.jpg'
import SwbFpt from '../assets/swb-fpt.png'
import SwbShield from '../assets/swb-shield.png'
</script>

<template>
  <div class="container-xl">
    <!-- To be responsive:
   On sm (mobile): col will be 12 and stacked together
   On md (tablet) and lg (laptop): cols will be side-by-side
  -->
    <div class="row justify-content-center g-4">
      <div class="col-12 col-md-5 col-lg-3 card bg-transparent border-0 text-white text-center">
        <img :src="ProfilePic" class="card-img-top rounded-circle w-75 mx-auto w-md-100" />
        <div class="card-body">
          <h5 class="card-title fw-bold">Nguyen Duc Manh</h5>
          <p class="card-text">Swinburne AI Student</p>
        </div>
        <div class="card-body pt-0 d-flex gap-3 justify-content-center">
          <i class="bi bi-code-slash"></i>
          <i class="bi bi-cup-hot-fill"></i>
          <i class="bi bi-laptop"></i>
        </div>
        <div class="card-body">
          <div class="card-text">
            <p class="small opacity-75">Captured on 16/Dec/2025<br />SUT, Hawthorn, Melbourne</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-7">
        <div class="card-body">
          <p class="text-white">
            Welcome to my page! I'm studying Artificial Intelligence (AI) at Swinburne Hanoi.<br />
            I have not found the AI domain that I want to deep dive into but I think eventually I'll
            find it:)<br />
            Right now I'm participating in my uni Software Lab that focuses on AI and Software
            Engineering to then publish conference/research papers under the guidance of
            <span
              ><a href="https://scholar.google.com/citations?user=00lG87wAAAAJ&hl=en"
                >Dr. Le Minh Duc</a
              ></span
            >.<br />

            I love coffee and hitting the gym regularly...thats all I can say about myself.<br />

            <span><hr /></span>
            This portfolio page is the project of my Vue.js and Bootstrap learning journey as I need
            to learn the unit COS30043 anyway. Also I want to really learn and make the money I paid
            for the course worth so I don't vibe code this project, of course I still need AI for
            learning assisting.
          </p>
        </div>
        <div class="card-body d-flex g-2 justify-content-center">
          <img :src="SwbFpt" class="w-25 w-md-100" />
          <img
            :src="SwbShield"
            class="w-25 w-md-100"
            style="filter: invert(100%) brightness(200%)"
          />
        </div>
      </div>
    </div>
  </div>
</template>
