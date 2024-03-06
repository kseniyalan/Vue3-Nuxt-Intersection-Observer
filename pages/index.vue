<script setup lang="ts">
import { onMounted, ref } from 'vue';

const scrollTop = () => {
  window.scrollTo(0, 0)
}

/* Animation */
const sectionRefs = ref<any[]>([]);

onMounted(() => {
  const options = {
    threshold: 0.5
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('fade-in-delay-wrapper')){
            entry.target.classList.add('fade-in-delay');
          }
          else if (entry.target.classList.contains('col-left')){
            entry.target.classList.add('slide-right');
          }
          else if (entry.target.classList.contains('col-right')){
            entry.target.classList.add('slide-left');
          }
        }
      });
    }, options);

    // Observe each element with ref
    sectionRefs.value.forEach(section => {
      observer.observe(section)
    })
});
</script>

<template>
  <div class="container py-4 py-md-6">
    <div class="fade-in-delay-wrapper" :ref="el => sectionRefs.push(el)">
      <TextBlock>
        <template #text-top><span class="orange">Let's start!</span></template>
        <template #text-main>
          The Intersection Observer API provides a way to <span class="purple-light">asynchronously observe</span> changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.
        </template>
      </TextBlock>
    </div>

    <div class="col-12 col-md-10 py-4 py-md-6 mx-auto">
      <NuxtImg src="/flower1.jpg" class="img-fluid rounded" alt="Pink flower" />
    </div>

    <div class="fade-in-delay-wrapper" :ref="el => sectionRefs.push(el)">
      <TextBlock>
        <template #text-top><span class="yellow">Next!</span></template>
        <template #text-main>
          Historically, detecting visibility of an element, or the relative visibility of two elements in relation to each other, has been a difficult task for which solutions have been unreliable and prone to causing the browser and the sites the user is accessing to become sluggish.
        </template>
      </TextBlock>
    </div>

    <div class="col-12 col-md-10 d-flex flex-column flex-md-row py-4 py-md-6 mx-auto">
      <!-- Slide right section -->
      <div class="col-left col-12 col-md-6 pe-0 pe-md-2 pb-4 pb-md-0" :ref="el => sectionRefs.push(el)">
        <NuxtImg src="/flower2.jpg" class="img-fluid rounded" alt="Purple flower" />
      </div>

      <!-- Slide left section -->
      <div class="col-right col-12 col-md-6 d-flex align-items-start align-items-md-center ps-0 ps-md-2 pt-4 pt-md-0" :ref="el => sectionRefs.push(el)">
        <div class="site-text-regular">
          Implementing intersection detection in the past involved event handlers and loops calling methods like <span class="purple"><i>Element.getBoundingClientRect()</i></span> to build up the needed information for every element affected. Since all this code runs on the main thread, even one of these can cause performance problems. When a site is loaded with these tests, things can get downright ugly.
        </div>
      </div>
    </div>

    <div class="col-12 col-md-7 site-text-regular py-4 py-md-6 mx-auto">
      <div class="mb-2 mb-md-4">As the web has matured, the need for this kind of information has grown. Intersection information is needed for many reasons, such as: </div>
        <ul class="site-ul">
          <li>Lazy-loading of images or other content as a page is scrolled.</li>
          <li>Implementing <span class="yellow">"infinite scrolling"</span> websites, where more and more content is loaded and rendered as you scroll, so that the user doesn't have to flip through pages.</li>
          <li>Reporting of visibility of advertisements in order to calculate ad revenues.</li>
          <li>Deciding whether or not to perform tasks or animation processes based on whether or not the user will see the result.</li>
        </ul> 
    </div>

    <div>
      <div class="fade-in-delay-wrapper col-12 col-md-10 py-4 py-md-6 mx-auto" :ref="el => sectionRefs.push(el)">
        <NuxtImg src="/dumbier.jpg" class="img-fluid rounded" alt="Mountains" />
      </div>
      <div class="d-flex justify-content-center">
        <button
          type="button"
          class="eshop-icon-btn large grey"
          @click="scrollTop"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 384 512">
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
/* Fade-in on Scroll animatiom for IntersectionObserver */
.fade-in-delay-wrapper{
  opacity: 0;
  transform: translateY(20px);
  -webkit-transform: translateY(20px);
  -moz-transform: translateY(20px);
  -ms-transform: translateY(20px);
  -o-transform: translateY(20px);
}

.fade-in-delay {
  animation-duration: 2s;
  animation-fill-mode: both;
  animation-name: fade-in-delay-animation;
  animation-timing-function: ease-in;
}

@keyframes fade-in-delay-animation {
  0% {
    opacity: 0;
    transform: translateY(20px);
    -webkit-transform: translateY(20px);
    -moz-transform: translateY(20px);
    -ms-transform: translateY(20px);
    -o-transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
  }
}

  .col-left{
    opacity: 0;
    transform: translateX(-100px);
  }

  .col-right{
    opacity: 0;
    transform: translateX(100px);
  }

  .slide-left, .slide-right{
    animation-fill-mode: forwards;
    -webkit-animation-fill-mode: forwards;
    -moz-animation-fill-mode: forwards;
    -ms-animation-fill-mode: forwards;
    -o-animation-fill-mode: forwards;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
  }

  .slide-left{
    animation-name: slide-left-animation;
  }

  .slide-right{
    animation-name: slide-right-animation;
  }

  @keyframes slide-left-animation {
    0% {
      opacity: 0;
      transform: translateX(100px);
      -webkit-transform: translateX(100px);
      -moz-transform: translateX(100px);
      -ms-transform: translateX(100px);
      -o-transform: translateX(100px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
      transform: translateX(0);
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
    }
  }

  @keyframes slide-right-animation {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
</style>