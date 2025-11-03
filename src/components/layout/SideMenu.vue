<template>
  <div class="sidemenu-wrapper" :class="{ open: props.open }" v-show="props.open" @click.self="$emit('close')">
    <div class="sidemenu-content">
      <button class="closeButton sideMenuCls" type="button" @click="$emit('close')">
        <img :src="asset('/img/icon/close.svg')" alt="Close menu" />
      </button>
      <div class="widget footer-widget">
        <div class="widget-about">
          <div class="footer-logo">
            <a href="index.html"><img :src="asset('/img/logo-white.svg')" alt="Ovation" /></a>
          </div>
          <p class="about-text">
            We are digital agency that helps businesses develop immersive and engaging
          </p>
          <div class="sidebar-wrap">
            <h6>27 Division St, New York,</h6>
            <h6>NY 10002, USA</h6>
          </div>
          <div class="sidebar-wrap">
            <h6><a href="tel:1800123654987">+1 800 123 654 987 </a></h6>
            <h6><a href="mailto:frisk.agency@mail.com">frisk.agency@mail.com</a></h6>
          </div>
          <div class="social-btn style2">
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
      <div class="d-flex justify-content-end">
        <a href="contact.html" class="chat-btn gsap-magnetic">Let’s Talk with us</a>
      </div>
    </div>
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
