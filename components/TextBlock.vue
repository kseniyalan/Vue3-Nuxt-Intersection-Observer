<script setup lang="ts">

</script>

<template>
    <div class="col-12 col-md-6  pa-0 py-md-10 mx-auto">

      <div class="my-7 my-md-12">
        <div class="text-top text-center mb-6 mb-md-10">
          <slot name="text-top" />
        </div>
        <div class="text-main">
          <slot name="text-main" />
        </div>
      </div>
    </div>
</template>

<style scoped lang="scss">
@import '~/assets/styles/utilities/mixins';
.text-top{
  font-family: "Caveat";
  font-size: 20px;
  line-height: 1.2;
  font-weight: 500;

  @include media-breakpoint-up(md) {
    font-size: 28px;
  }
}

.text-main{
  font-size: 24px;
  line-height: 1.2;

    @include media-breakpoint-up(md) {
      font-size: 30px;
      line-height: 1.4;
    }
}
</style>