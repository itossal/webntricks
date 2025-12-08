<template>
  <header class="nav-header header-layout2 style2">
    <div class="sticky-wrapper">
      <div class="menu-area">
        <div class="container-fluid">
          <div class="row align-items-center justify-content-between">
            <div class="col-auto">
              <div class="header-logo">
                <RouterLink to="/"><img :src="asset('/img/logo-webntricks.svg')" alt="logo" /></RouterLink>
              </div>
            </div>
            <div class="col-auto m-lg-auto">
              <nav class="main-menu d-none d-lg-inline-block">
                <ul>

                  <li class="menu-item-has-children">
                    <a href="/about">
                      <span class="link-effect">
                        <span class="effect-1">À propos</span>
                        <span class="effect-1">À propos</span>
                      </span>
                    </a>
              
                  </li>
                  <li class="menu-item-has-children">
                    <a href="/service">
                      <span class="link-effect">
                        <span class="effect-1">Services</span>
                        <span class="effect-1">Services</span>
                      </span>
                    </a>
                    <ul class="sub-menu">
                      <li v-for="service in services" :key="service.slug">
                        <RouterLink :to="`/services/${service.slug}`">{{ service.title }}</RouterLink>
                      </li>
                     
                    </ul>
                  </li>
                  <li class="menu-item-has-children">
                    <a href="/project">
                      <span class="link-effect">
                        <span class="effect-1">Réalisations</span>
                        <span class="effect-1">Réalisations</span>
                      </span>
                    </a>

                  </li>
                  <li>
                    <a href="blog.html">
                      <span class="link-effect">
                        <span class="effect-1">Blog</span>
                        <span class="effect-1">Blog</span>
                      </span>
                    </a>
                  </li>
                       <li>
                    <a href="faq.html">
                      <span class="link-effect">
                        <span class="effect-1">FAQ</span>
                        <span class="effect-1">FAQ</span>
                      </span>
                    </a>
                  </li>
                          <li>
                    <a href="contact.html">
                      <span class="link-effect">
                        <span class="effect-1">Contact</span>
                        <span class="effect-1">Contact</span>
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
              <div class="navbar-right d-inline-flex d-lg-none">
                <button type="button" class="menu-toggle sidebar-btn" @click="$emit('open-mobile')">
                  <span class="line"></span>
                  <span class="line"></span>
                  <span class="line"></span>
                </button>
              </div>
            </div>
            <!--div class="col-auto d-none d-lg-block">
              <div class="header-button ms-0">
                <button type="button" class="search-btn searchBoxToggler" @click="$emit('toggle-search')">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" stroke-width="2" stroke-linecap="square"/>
                    <path d="M19.0004 19.0004L14.6504 14.6504" stroke="currentColor" stroke-width="2" stroke-linecap="square"/>
                  </svg>
                  <span class="link-effect">
                    <span class="effect-1">SEARCH</span>
                    <span class="effect-1">SEARCH</span>
                  </span>
                </button>
                <button type="button" class="menu-toggle sidebar-btn d-none d-lg-inline-flex" @click="$emit('open-side')">
                  <span class="line"></span>
                  <span class="line"></span>
                  <span class="line"></span>
                </button>
              </div>
            </div-->
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { assetUrl } from '@/utils/assets'
import { services as serviceList } from '@/utils/services'
defineEmits(['toggle-search', 'open-mobile', 'open-side'])

const asset = assetUrl
const services = serviceList
</script>
