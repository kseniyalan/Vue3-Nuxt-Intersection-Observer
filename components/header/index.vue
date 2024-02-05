<script setup lang="ts">

</script>

<template>
    <header class="header-wrapper">
      <div class="container">
        Header
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
  display: none;
  justify-content: center;
  align-items: center;
  height: var(--header-desktop-height);
  z-index: 2;

  @include media-breakpoint-up(lg) {
    display: flex;
  }

}

.header-mobile{
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--header-mobile-height);

  @include media-breakpoint-up(lg) {
    display: none;
  }
}


</style>
