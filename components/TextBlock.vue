<script setup lang="ts">

</script>

<template>
    <div class="col-12 col-md-6 py-4 text-center py-md-6 mx-auto">

      <div class="">
        <div class="text-block-top pb-2 pb-md-4 mx-auto">
          <slot name="text-top" />
        </div>
        <div class="text-block-main">
          <slot name="text-main" />
        </div>
      </div>
    </div>
</template>

<style scoped lang="scss">
@import '~/assets/styles/utilities/mixins';
.text-block-top{
  font-family: "Caveat";
  font-size: 24px;
  line-height: 1.2;
  font-weight: 500;

  @include media-breakpoint-up(md) {
    font-size: 28px;
  }
}

.text-block-main{
  font-size: 20px;
  line-height: 1.2;

    @include media-breakpoint-up(md) {
      font-size: 30px;
      line-height: 1.4;
    }
}
</style>