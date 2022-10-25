<template>
  <div>
    <img :src="`/assets/img/partner/${img}`" class="sm:w-1/2 lg:w-72 mx-auto" :alt="img" />
  </div>
</template>
<script lang="ts" setup>
  defineProps<{img?:string}>();
</script>
