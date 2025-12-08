<!-- Auto-generated from project.html -->
<template>
  <div class="page-content">
<!--==============================
    Breadcumb
    ============================== -->
    <div class="breadcumb-wrapper " :data-bg-src="asset('/img/bg/breadcumb-bg1-7.jpg')">
        <div class="container">
            <div class="breadcumb-content">
                <h1 class="breadcumb-title">Portfolio</h1>
            </div>
        </div>
    </div>

    <!--==============================
        Portfolio Area
    ==============================-->
    <div class="portfolio-area-1 space overflow-hidden">
        <div class="container">
            <div class="row justify-content-between masonary-active">
                <div
                  v-for="project in projects"
                  :key="project.slug"
                  :class="[project.layoutClass, 'filter-item']"
                >
                    <div class="portfolio-wrap" :class="project.wrapClass">
                        <div class="portfolio-thumb ">
                            <RouterLink :to="`/projects/${project.slug}`">
                                <img :src="asset(project.cover)" alt="portfolio">
                            </RouterLink>
                        </div>
                        <div class="portfolio-details">
                            <ul class="portfolio-meta">
                                <li v-for="category in project.categories" :key="category">
                                  <RouterLink to="/blog">{{ category }}</RouterLink>
                                </li>
                            </ul>
                            <h3 class="portfolio-title">
                              <RouterLink :to="`/projects/${project.slug}`">{{ project.title }}</RouterLink>
                            </h3>
                            <RouterLink :to="`/projects/${project.slug}`" class="link-btn">
                                <span class="link-effect">
                                    <span class="effect-1">VOIR LE PROJET</span>
                                    <span class="effect-1">VOIR LE PROJET</span>
                                </span>
                                <img :src="asset('/img/icon/arrow-left-top.svg')" alt="icon">
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn-wrap justify-content-center mt-60">
                <RouterLink class="btn" to="/project-2">
                    <span class="link-effect">
                        <span class="effect-1">CHARGER PLUS</span>
                        <span class="effect-1">CHARGER PLUS</span>
                    </span>
                </RouterLink>
            </div>
        </div>
    </div>

    <!--==============================
    Marquee Area
    ==============================-->
    <div class="container-fluid p-0 overflow-hidden">
        <div class="slider__marquee clearfix marquee-wrap">
            <div class="marquee_mode marquee__group">
                <h6 class="item m-item"><a href="#"><i class="fas fa-star-of-life"></i> Nous offrons une flexibilité inégalée</a></h6>
                <h6 class="item m-item"><a href="#"><i class="fas fa-star-of-life"></i> Nous offrons une flexibilité inégalée</a></h6>
                <h6 class="item m-item"><a href="#"><i class="fas fa-star-of-life"></i> Nous offrons une flexibilité inégalée</a></h6>
                <h6 class="item m-item"><a href="#"><i class="fas fa-star-of-life"></i> Nous offrons une flexibilité inégalée</a></h6>
            </div>
        </div>
    </div>

    <!--==============================
        Footer Area
    ==============================-->
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { usePageMetadata } from '@/composables/usePageMetadata'
import { assetUrl } from '@/utils/assets'
import { projects } from '@/utils/projects'

const asset = assetUrl

usePageMetadata('Portfolio')

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
})
</script>
