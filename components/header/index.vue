<template>
    <header class="header-wrapper">
      <div class="container header">
        <h1 class="site-text-heading purple">Vue 3 Intersection Observer</h1>
      </div>
    </header>
</template>

<style scoped lang="scss">
@import '~/assets/styles/utilities/mixins';
$header-desktop-height: 100px;
$header-mobile-height: 70px;

.header-wrapper{
  position: relative;
  width: 100%;
  height: $header-mobile-height;
  background-color: #fff;
  box-shadow: 0px 15px 10px -15px var(--light);
  z-index: 100;

  @include media-breakpoint-up(md) {
    position: sticky;
    top: 0;
    height: $header-desktop-height;
  }
}

.header{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: $header-mobile-height;

  @include media-breakpoint-up(md) {
    height: $header-desktop-height;
  }
}


</style>
