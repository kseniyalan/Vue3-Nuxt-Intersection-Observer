<script setup lang="ts">

</script>

<template>
    <header class="header-wrapper">
      <div class="container header site-text-heading">
        Vue 3 Intersection Observer
      </div>
    </header>
</template>

<style scoped lang="scss">
@import '~/assets/styles/utilities/mixins';

.header-wrapper{
  position: relative;
  height: var(--header-desktop-height);
  box-shadow: 0px 15px 10px -15px var(--light);    
}

.header{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--header-desktop-height);
  color: var(--purple);
  
}


</style>
