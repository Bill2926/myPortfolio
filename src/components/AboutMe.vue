<script setup>
import ProfilePic from "../assets/me.jpg"
</script>

<template>
<div class="container-xl">
  <div class="row justify-content-center gap-4">
    <div class="col-6 card bg-transparent border-0 text-white text-center" style="width: 25%">
      <img :src="ProfilePic" class="card-img-top rounded-circle">
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
          <p class="small opacity-75">Captured on 16/DEC/2026<br>SUT, Hawthorn, Melbourne </p>
        </div>
      </div>
    </div>
    <div class="col-6">
      <p class="text-white">
        Welcome to my page! I'm studying Artificial Intelligence (AI) at Swinburne Hanoi.<br>
        I have not found the AI domain that I want to deep dive into but I think eventually I'll find it:)<br>
        Right now I'm participating in my uni Software Lab that focuses on AI and Software Engineering to then publish conference papers.<br>

        I love coffee and hitting the gym regularly...Thats all I can say about myself.<br>

        <span><hr></span>
        This portfolio page is the project of my Vue.js and Bootstrap learning journey as I need to learn the unit COS30043 anyway. Also I want to really learn and master this knowledge so I don't vibe code this project, of course I still need AI for learning assisting.
      </p>
    </div>
  </div>
</div>
</template>
