<template>
  <div v-if="props.visible" class="preloader">
    <div class="preloader-inner">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
})
</script>
