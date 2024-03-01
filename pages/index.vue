<script setup lang="ts">

</script>

<template>
  <div class="container">
    <TextBlock>
      <template #text-top>Let's start!</template>
      <template #text-main>
        The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.
      </template>
    </TextBlock>

    <div class="col-12 col-md-10 pa-0 py-md-10 mx-auto">
      <img src="/flower1.jpg" class="img-fluid rounded" alt="Pink flower" />
    </div>

    <TextBlock>
      <template #text-top>Next!</template>
      <template #text-main>
        Historically, detecting visibility of an element, or the relative visibility of two elements in relation to each other, has been a difficult task for which solutions have been unreliable and prone to causing the browser and the sites the user is accessing to become sluggish.
      </template>
    </TextBlock>

    <div class="col-12 col-md-10 pa-0 py-md-10 mx-auto">
      <img src="/flower2.jpg" class="img-fluid rounded" alt="Зurple flower" />
    </div>

    <div class="col-12 col-md-6  pa-0 py-md-10 mx-auto">
      <div class="">As the web has matured, the need for this kind of information has grown. Intersection information is needed for many reasons, such as: </div>
        <ul class="site-ul site-text-regular">
          <li>Lazy-loading of images or other content as a page is scrolled.</li>
          <li>Implementing "infinite scrolling" websites, where more and more content is loaded and rendered as you scroll, so that the user doesn't have to flip through pages.</li>
          <li>Reporting of visibility of advertisements in order to calculate ad revenues.</li>
          <li>Deciding whether or not to perform tasks or animation processes based on whether or not the user will see the result.</li>
        </ul> 
    </div>

    <div class="col-12 col-md-10 pa-0 py-md-10 mx-auto">
      <img src="/dumbier.jpg" class="img-fluid rounded" alt="Mountains" />
    </div>
  </div>
</template>

<style scoped>

</style>