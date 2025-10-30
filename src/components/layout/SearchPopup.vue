<template>
  <div
    class="popup-search-box"
    :class="{ 'is-open': props.open }"
    v-show="props.open"
    @click.self="$emit('close')"
  >
    <button class="searchClose" type="button" @click="$emit('close')">
      <img :src="asset('/img/icon/close.svg')" alt="Close search" />
    </button>
    <form action="#">
      <input type="text" placeholder="Search Here.." />
      <button type="submit">
        <img :src="asset('/img/icon/search-white.svg')" alt="Submit search" />
      </button>
    </form>
  </div>
</template>

<script setup>
import { assetUrl } from '@/utils/assets'

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['close'])

const asset = assetUrl
</script>
