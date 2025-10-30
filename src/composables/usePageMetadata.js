import { onMounted, watch } from 'vue'

import { useRoute } from '@/router'

const BASE_TITLE = 'Frisk – Creative Agency & Portfolio'

export function usePageMetadata(fallbackTitle = '') {
  const route = useRoute()

  const updateTitle = (title) => {
    const normalized = title || fallbackTitle || 'Home'
    document.title = normalized ? `${normalized} | ${BASE_TITLE}` : BASE_TITLE
  }

  onMounted(() => {
    updateTitle(route.meta.title)
  })

  watch(
    () => route.meta.title,
    (title) => {
      updateTitle(title)
    }
  )
}
