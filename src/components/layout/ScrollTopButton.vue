<template>
  <button v-show="isVisible" class="scroll-top" type="button" @click="scrollToTop">
    <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
      <path
        :style="{ 'stroke-dasharray': `${circumference}, ${circumference}`, 'stroke-dashoffset': dashOffset }"
        d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
      ></path>
    </svg>
  </button>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const circumference = 2 * Math.PI * 49
const progress = ref(0)
const isVisible = ref(false)

const updateProgress = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop
  const height = document.documentElement.scrollHeight - window.innerHeight
  const ratio = height > 0 ? Math.min(scrollTop / height, 1) : 0
  progress.value = ratio
  isVisible.value = scrollTop > 200
}

const dashOffset = computed(() => String(circumference * (1 - progress.value)))

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', updateProgress, { passive: true })
  updateProgress()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateProgress)
})
</script>
