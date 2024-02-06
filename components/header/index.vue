<script setup lang="ts">

</script>

<template>
    <header class="header-wrapper">
      <div class="container header text-main">
        Vue 3 Intersection Observer
      </div>
    </header>
</template>

<style scoped lang="scss">
@import '~/assets/styles/utilities/mixins';

.header-wrapper{
  position: relative;
  height: var(--header-desktop-height)
}

.header{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--header-desktop-height);
  font-family: "Caveat";
  font-size: 20px;
  color: var(--purple);
}


</style>
