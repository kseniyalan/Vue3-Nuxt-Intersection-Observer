<script setup lang="ts">
//Will be white body bg, main header + footer
</script>

<template>
  <div>
    <Header />
    <div class="main">
      <div class="container">
        <slot />
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">

</style>