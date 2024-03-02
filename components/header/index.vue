<template>
    <header class="header-wrapper">
      <div class="container header site-text-heading purple">
        Vue 3 Intersection Observer
      </div>
    </header>
</template>

<style scoped lang="scss">
@import '~/assets/styles/utilities/mixins';
$header-desktop-height: 100px;

.header-wrapper{
  position: relative;
  width: 100%;
  height: $header-desktop-height;
  background-color: #fff;
  box-shadow: 0px 15px 10px -15px var(--light);
  z-index: 100;

  @include media-breakpoint-up(md) {
    position: sticky;
    top: 0;
  }
}

.header{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: $header-desktop-height;
}


</style>
