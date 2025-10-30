<!-- Auto-generated from project-5.html -->
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
        <div class="container-fluid p-0">
            <div class="row global-carousel gx-60 portfolio-slider" data-slide-show="1" data-center-mode="true" data-xl-center-mode="true" data-ml-center-mode="true" data-lg-center-mode="true" data-center-padding="600px" data-xl-center-padding="400px" data-ml-center-padding="400px" data-lg-center-padding="300px" data-dots="true" data-xl-dots="true" data-ml-dots="true">
                <div class="col-lg-4">
                    <a href="project-details.html" class="portfolio-wrap style2">
                        <div class="portfolio-thumb">
                            <img :src="asset('/img/portfolio/portfolio2_1.jpg')" alt="portfolio">
                        </div>
                        <div class="portfolio-details">
                            <ul class="portfolio-meta">
                                <li>Branding</li>
                            </ul>
                            <h3 class="portfolio-title">Decentralized Platform</h3>
                        </div>
                    </a>
                </div>
                <div class="col-lg-4">
                    <a href="project-details.html" class="portfolio-wrap style2">
                        <div class="portfolio-thumb">
                            <img :src="asset('/img/portfolio/portfolio2_2.jpg')" alt="portfolio">
                        </div>
                        <div class="portfolio-details">
                            <ul class="portfolio-meta">
                                <li>Branding</li>
                            </ul>
                            <h3 class="portfolio-title">Decentralized Platform</h3>
                        </div>
                    </a>
                </div>
                <div class="col-lg-4">
                    <a href="project-details.html" class="portfolio-wrap style2">
                        <div class="portfolio-thumb">
                            <img :src="asset('/img/portfolio/portfolio2_3.jpg')" alt="portfolio">
                        </div>
                        <div class="portfolio-details">
                            <ul class="portfolio-meta">
                                <li>Branding</li>
                            </ul>
                            <h3 class="portfolio-title">Decentralized Platform</h3>
                        </div>
                    </a>
                </div>
                <div class="col-lg-4">
                    <a href="project-details.html" class="portfolio-wrap style2">
                        <div class="portfolio-thumb">
                            <img :src="asset('/img/portfolio/portfolio2_1.jpg')" alt="portfolio">
                        </div>
                        <div class="portfolio-details">
                            <ul class="portfolio-meta">
                                <li>Branding</li>
                            </ul>
                            <h3 class="portfolio-title">Decentralized Platform</h3>
                        </div>
                    </a>
                </div>
                <div class="col-lg-4">
                    <a href="project-details.html" class="portfolio-wrap style2">
                        <div class="portfolio-thumb">
                            <img :src="asset('/img/portfolio/portfolio2_2.jpg')" alt="portfolio">
                        </div>
                        <div class="portfolio-details">
                            <ul class="portfolio-meta">
                                <li>Branding</li>
                            </ul>
                            <h3 class="portfolio-title">Decentralized Platform</h3>
                        </div>
                    </a>
                </div>
                <div class="col-lg-4">
                    <a href="project-details.html" class="portfolio-wrap style2">
                        <div class="portfolio-thumb">
                            <img :src="asset('/img/portfolio/portfolio2_3.jpg')" alt="portfolio">
                        </div>
                        <div class="portfolio-details">
                            <ul class="portfolio-meta">
                                <li>Branding</li>
                            </ul>
                            <h3 class="portfolio-title">Decentralized Platform</h3>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!--==============================
    Marquee Area
    ==============================-->
    <div class="container-fluid p-0 overflow-hidden">
        <div class="slider__marquee clearfix marquee-wrap">
            <div class="marquee_mode marquee__group">
                <h6 class="item m-item"><a href="#"><i class="fas fa-star-of-life"></i> We Give Unparalleled Flexibility</a></h6>
                <h6 class="item m-item"><a href="#"><i class="fas fa-star-of-life"></i> We Give Unparalleled Flexibility</a></h6>
                <h6 class="item m-item"><a href="#"><i class="fas fa-star-of-life"></i> We Give Unparalleled Flexibility</a></h6>
                <h6 class="item m-item"><a href="#"><i class="fas fa-star-of-life"></i> We Give Unparalleled Flexibility</a></h6>
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

const asset = assetUrl

usePageMetadata("Project 5")

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
})
</script>
