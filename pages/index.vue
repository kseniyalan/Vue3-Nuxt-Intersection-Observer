<script setup lang="ts">

</script>

<template>
  <div class="container py-4 py-md-6">
    <TextBlock>
      <template #text-top><span class="orange">Let's start!</span></template>
      <template #text-main>
        The Intersection Observer API provides a way to <span class="purple-light">asynchronously observe</span> changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.
      </template>
    </TextBlock>

    <div class="col-12 col-md-10 py-4 py-md-6 mx-auto">
      <img src="/flower1.jpg" class="img-fluid rounded" alt="Pink flower" />
    </div>

    <TextBlock>
      <template #text-top><span class="yellow">Next!</span></template>
      <template #text-main>
        Historically, detecting visibility of an element, or the relative visibility of two elements in relation to each other, has been a difficult task for which solutions have been unreliable and prone to causing the browser and the sites the user is accessing to become sluggish.
      </template>
    </TextBlock>

    <div class="col-12 col-md-10 d-flex flex-column flex-md-row py-4 py-md-6 mx-auto">
      <div class="col-12 col-md-6 pe-0 pe-md-2 pb-4 pb-md-0">
        <img src="/flower2.jpg" class="img-fluid rounded" alt="Purple flower" />
      </div>
      <div class="col-12 col-md-6 d-flex align-items-start align-items-md-center ps-0 ps-md-2">
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

    <div class="col-12 col-md-10 py-4 py-md-6 mx-auto">
      <img src="/dumbier.jpg" class="img-fluid rounded" alt="Mountains" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.site-image{
  display: block;
  -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */
  filter: grayscale(1); /* Microsoft Edge and Firefox 35+ */
  opacity: 0.7;
  transition: all var(--transition);
  cursor: pointer;

  &:hover{
    -webkit-filter: grayscale(0);
    filter: none;
    opacity: 1;
  }
}
</style>