<template>
  <div class="mobile-menu-wrapper" v-show="props.open">
    <div class="mobile-menu-area">
      <button class="menu-toggle" type="button" @click="$emit('close')">
        <i class="fas fa-times"></i>
      </button>
      <div class="mobile-logo">
        <a href="index.html"><img :src="asset('/img/logo.svg')" alt="Ovation" /></a>
      </div>
      <div class="mobile-menu" ref="menuRoot">
        <ul>
          <li class="menu-item-has-children">
            <a href="#">Home</a>
            <ul class="sub-menu">
              <li><a href="index.html">Digital Agency</a></li>
              <li><a href="home-2.html">Creative Agency</a></li>
              <li><a href="home-3.html">Design Studio</a></li>
              <li><a href="home-4.html">Digital Marketing</a></li>
              <li><a href="home-5.html">Modern Agency</a></li>
              <li><a href="home-6.html">Creative Studio</a></li>
              <li><a href="home-7.html">Startup Agency</a></li>
              <li><a href="home-8.html">Personal Portfolio</a></li>
              <li><a href="home-9.html">Portfolio Showcase</a></li>
              <li><a href="home-10.html">Interactive Link</a></li>
              <li><a href="home-11.html">Showcase Carousel</a></li>
              <li><a href="home-12.html">Fullscreen Slideshow</a></li>
              <li class="active"><a href="home-13.html">Branding Agency</a></li>
              <li><a href="home-14.html">Marketing Agency</a></li>
              <li><a href="home-15.html">Web Studio</a></li>
              <li><a href="home-16.html">Agency Classic</a></li>
              <li><a href="home-17.html">AI Startup</a></li>
              <li><a href="home-18.html">Agency Shop</a></li>
            </ul>
          </li>
          <li class="menu-item-has-children">
            <a href="#">Pages</a>
            <ul class="sub-menu">
              <li><a href="about.html">About Page</a></li>
              <li class="menu-item-has-children">
                <a href="service.html">Service Page</a>
                <ul class="sub-menu">
                  <li><a href="service.html">Service Version 1</a></li>
                  <li><a href="service-2.html">Service Version 2</a></li>
                  <li><a href="service-3.html">Service Version 3</a></li>
                  <li><a href="service-details.html">Service Details Page</a></li>
                </ul>
              </li>
              <li><a href="team.html">Team Page</a></li>
              <li><a href="team-details.html">Team Details Page</a></li>
              <li><a href="pricing.html">Pricing Page</a></li>
              <li class="menu-item-has-children">
                <a href="shop.html">Shop</a>
                <ul class="sub-menu">
                  <li><a href="shop.html">Shop Page</a></li>
                  <li><a href="shop-details.html">Shop Details</a></li>
                  <li><a href="cart.html">Cart Page</a></li>
                  <li><a href="checkout.html">Checkout</a></li>
                </ul>
              </li>
              <li><a href="faq.html">FAQ Page</a></li>
              <li><a href="error.html">Error Page</a></li>
            </ul>
          </li>
          <li class="menu-item-has-children">
            <a href="#">Portfolio</a>
            <ul class="sub-menu">
              <li><a href="project.html">Portfolio Masonary</a></li>
              <li><a href="project-2.html">Portfolio Pinterest</a></li>
              <li><a href="project-3.html">Portfolio Gallery</a></li>
              <li><a href="project-4.html">Portfolio Full Width</a></li>
              <li><a href="project-5.html">Portfolio Slider</a></li>
              <li><a href="project-6.html">Portfolio Interactive</a></li>
              <li><a href="project-details.html">Portfolio Details</a></li>
            </ul>
          </li>
          <li class="menu-item-has-children">
            <a href="#">Blog</a>
            <ul class="sub-menu">
              <li><a href="blog.html">Blog Standard</a></li>
              <li><a href="blog-2.html">Blog 2 Column</a></li>
              <li><a href="blog-details.html">Blog Details</a></li>
            </ul>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </div>
      <div class="sidebar-wrap">
        <h6>27 Division St, New York,</h6>
        <h6>NY 10002, USA</h6>
      </div>
      <div class="sidebar-wrap">
        <h6><a href="tel:1800123654987">+1 800 123 654 987 </a></h6>
        <h6><a href="mailto:frisk.agency@mail.com">frisk.agency@mail.com</a></h6>
      </div>
      <div class="social-btn style3">
        <a href="https://www.facebook.com/">
          <span class="link-effect">
            <span class="effect-1"><i class="fab fa-facebook"></i></span>
            <span class="effect-1"><i class="fab fa-facebook"></i></span>
          </span>
        </a>
        <a href="https://instagram.com/">
          <span class="link-effect">
            <span class="effect-1"><i class="fab fa-instagram"></i></span>
            <span class="effect-1"><i class="fab fa-instagram"></i></span>
          </span>
        </a>
        <a href="https://twitter.com/">
          <span class="link-effect">
            <span class="effect-1"><i class="fab fa-twitter"></i></span>
            <span class="effect-1"><i class="fab fa-twitter"></i></span>
          </span>
        </a>
        <a href="https://dribbble.com/">
          <span class="link-effect">
            <span class="effect-1"><i class="fab fa-dribbble"></i></span>
            <span class="effect-1"><i class="fab fa-dribbble"></i></span>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

import { assetUrl } from '@/utils/assets'

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['close'])

const asset = assetUrl

const menuRoot = ref(null)

const handleToggle = (event) => {
  const anchor = event.target.closest('a')
  if (!anchor || !menuRoot.value?.contains(anchor)) {
    return
  }
  const parentItem = anchor.parentElement
  if (!parentItem || !parentItem.classList.contains('menu-item-has-children')) {
    return
  }
  const submenu = anchor.nextElementSibling
  if (!(submenu instanceof HTMLElement) || submenu.tagName.toLowerCase() !== 'ul') {
    return
  }
  if (!parentItem.classList.contains('is-open')) {
    event.preventDefault()
    parentItem.parentElement?.querySelectorAll(':scope > li.is-open').forEach((item) => {
      if (item !== parentItem) {
        item.classList.remove('is-open')
      }
    })
    parentItem.classList.add('is-open')
  } else if (anchor.getAttribute('href') === '#') {
    event.preventDefault()
    parentItem.classList.remove('is-open')
  }
}

const cleanup = () => {
  menuRoot.value?.querySelectorAll('.is-open').forEach((item) => {
    item.classList.remove('is-open')
  })
}

onMounted(() => {
  document.addEventListener('click', handleToggle)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleToggle)
})

watch(
  () => props.open,
  (open) => {
    if (!open) {
      cleanup()
    }
  }
)
</script>
