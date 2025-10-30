<template>
  <div :class="[{ 'offcanvas-open': isSideMenuOpen || isMobileMenuOpen || isSearchOpen }, 'app-shell']">
    <Preloader :visible="isPreloading" />
    <SearchPopup :open="isSearchOpen" @close="toggleSearch(false)" />
    <SideMenu :open="isSideMenuOpen" @close="toggleSide(false)" />
    <MobileMenu :open="isMobileMenuOpen" @close="toggleMobile(false)" />
    <MainHeader
      @toggle-search="toggleSearch(true)"
      @open-mobile="toggleMobile(true)"
      @open-side="toggleSide(true)"
    />
    <RouterView />
    <MainFooter />
    <ScrollTopButton />
  </div>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from '@/router'

import MainFooter from '@/components/layout/MainFooter.vue'
import MainHeader from '@/components/layout/MainHeader.vue'
import MobileMenu from '@/components/layout/MobileMenu.vue'
import Preloader from '@/components/layout/Preloader.vue'
import ScrollTopButton from '@/components/layout/ScrollTopButton.vue'
import SearchPopup from '@/components/layout/SearchPopup.vue'
import SideMenu from '@/components/layout/SideMenu.vue'
import { destroyMarquees, initMarquees } from '@/utils/marquee'

const router = useRouter()
const route = useRoute()

const isPreloading = ref(true)
const isSearchOpen = ref(false)
const isSideMenuOpen = ref(false)
const isMobileMenuOpen = ref(false)

const closeAll = () => {
  isSearchOpen.value = false
  isSideMenuOpen.value = false
  isMobileMenuOpen.value = false
}

const toggleSearch = (state) => {
  if (typeof state === 'boolean') {
    isSearchOpen.value = state
  } else {
    isSearchOpen.value = !isSearchOpen.value
  }
}

const toggleSide = (state) => {
  if (typeof state === 'boolean') {
    isSideMenuOpen.value = state
  } else {
    isSideMenuOpen.value = !isSideMenuOpen.value
  }
}

const toggleMobile = (state) => {
  if (typeof state === 'boolean') {
    isMobileMenuOpen.value = state
  } else {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }
}

const hydrateMarquees = async () => {
  destroyMarquees()
  await nextTick()
  await new Promise((resolve) => {
    requestAnimationFrame(() => {
      initMarquees()
      resolve()
    })
  })
}

onMounted(async () => {
  setTimeout(() => {
    isPreloading.value = false
  }, 600)

  await hydrateMarquees()
})

const htmlLinkRegex = /\.html$/

const mapHtmlToRoute = (pathname) => {
  if (!htmlLinkRegex.test(pathname)) {
    return null
  }

  if (pathname === '/' || pathname === '') {
    return '/'
  }

  const cleanPath = pathname.replace(/\.html$/, '')

  if (cleanPath === '' || cleanPath === '/') {
    return '/'
  }

  if (cleanPath === '/index') {
    return '/index'
  }

  return cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`
}

const handleAnchorNavigation = (event) => {
  const anchor = event.target.closest('a')
  if (!anchor) return
  if (anchor.target && anchor.target !== '_self') return
  const href = anchor.getAttribute('href')
  if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) {
    return
  }

  const url = new URL(anchor.getAttribute('href'), window.location.origin)
  if (url.origin !== window.location.origin) return

  const routePath = mapHtmlToRoute(url.pathname)
  if (!routePath) {
    return
  }

  event.preventDefault()
  closeAll()
  router.push(routePath)
}

const handleEscape = (event) => {
  if (event.key === 'Escape') {
    closeAll()
  }
}

onMounted(() => {
  document.addEventListener('click', handleAnchorNavigation)
  document.addEventListener('keyup', handleEscape)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleAnchorNavigation)
  document.removeEventListener('keyup', handleEscape)
  destroyMarquees()
})

watch(
  () => route.fullPath,
  async () => {
    closeAll()
    window.scrollTo({ top: 0, behavior: 'auto' })
    await hydrateMarquees()
  }
)

watch(
  [isSearchOpen, isSideMenuOpen, isMobileMenuOpen],
  ([search, side, mobile]) => {
    const shouldLock = search || side || mobile
    document.body.classList.toggle('overflow-hidden', shouldLock)
  },
  { immediate: true }
)
</script>
