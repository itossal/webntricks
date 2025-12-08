import { onMounted, watch } from 'vue'

import { useRoute } from '@/router'

const BASE_TITLE = 'webntricks – Agence créative & Portfolio'
const BASE_DESCRIPTION =
  "webntricks est un portfolio d'agence créative présentant du branding, de la stratégie, du marketing et du design produit pour les équipes modernes."
const DEFAULT_IMAGE = '/img/hero/hero-13-1.png'

const ensureHeadElement = (selector, tag, attributes = {}) => {
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement(tag)
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })

  return element
}

const resolveUrl = (path) => {
  if (typeof window === 'undefined') return ''
  try {
    return new URL(path, window.location.origin).href
  } catch (error) {
    return ''
  }
}

const normalizeMetadata = (input, routeMeta) => {
  const payload = typeof input === 'string' ? { title: input } : input || {}

  return {
    title: payload.title ?? routeMeta.title ?? 'Accueil',
    description: payload.description ?? routeMeta.description ?? BASE_DESCRIPTION,
    image: payload.image ?? routeMeta.image ?? DEFAULT_IMAGE,
    robots: payload.robots ?? routeMeta.robots ?? 'index,follow',
  }
}

export function usePageMetadata(meta = '') {
  const route = useRoute()

  const updateMetadata = () => {
    if (typeof document === 'undefined') return

    const normalized = normalizeMetadata(meta, route.meta || {})
    const fullTitle = normalized.title ? `${normalized.title} | ${BASE_TITLE}` : BASE_TITLE
    const canonicalUrl = resolveUrl(route.path || window.location.pathname)
    const metaImage = resolveUrl(normalized.image)

    document.title = fullTitle

    ensureHeadElement('link[rel="canonical"]', 'link', { rel: 'canonical', href: canonicalUrl })

    ensureHeadElement('meta[name="description"]', 'meta', {
      name: 'description',
      content: normalized.description,
    })

    ensureHeadElement('meta[name="robots"]', 'meta', {
      name: 'robots',
      content: normalized.robots,
    })

    ensureHeadElement('meta[property="og:title"]', 'meta', {
      property: 'og:title',
      content: fullTitle,
    })
    ensureHeadElement('meta[property="og:description"]', 'meta', {
      property: 'og:description',
      content: normalized.description,
    })
    ensureHeadElement('meta[property="og:type"]', 'meta', {
      property: 'og:type',
      content: 'website',
    })
    ensureHeadElement('meta[property="og:url"]', 'meta', {
      property: 'og:url',
      content: canonicalUrl,
    })
    ensureHeadElement('meta[property="og:image"]', 'meta', {
      property: 'og:image',
      content: metaImage,
    })
    ensureHeadElement('meta[property="og:site_name"]', 'meta', {
      property: 'og:site_name',
      content: BASE_TITLE,
    })

    ensureHeadElement('meta[name="twitter:card"]', 'meta', {
      name: 'twitter:card',
      content: 'summary_large_image',
    })
    ensureHeadElement('meta[name="twitter:title"]', 'meta', {
      name: 'twitter:title',
      content: fullTitle,
    })
    ensureHeadElement('meta[name="twitter:description"]', 'meta', {
      name: 'twitter:description',
      content: normalized.description,
    })
    ensureHeadElement('meta[name="twitter:image"]', 'meta', {
      name: 'twitter:image',
      content: metaImage,
    })
  }

  onMounted(updateMetadata)

  watch(
    () => [route.meta.title, route.meta.description, route.meta.image, route.meta.robots, route.path],
    updateMetadata
  )
}
