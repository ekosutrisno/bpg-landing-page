<template>
  <li class="space-y-2">
    <div class="flex items-center space-x-2">
      <CheckCircle :size="20" class="text-[#0c66ee]" />
      <span>{{ title }}</span>
    </div>
    <slot></slot>
  </li>
</template>
<script lang="ts" setup>
import CheckCircle from "vue-material-design-icons/CheckCircle.vue";
defineProps<{ title?: string }>();
</script>
