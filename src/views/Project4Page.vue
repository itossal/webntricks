<!-- Auto-generated from project-4.html -->
<template>
  <div class="page-content">
<!--==============================
    Breadcumb
    ============================== -->
    <div class="breadcumb-wrapper " :data-bg-src="asset('/assets/img/bg/breadcumb-bg1-7.jpg')">
        <div class="container">
            <div class="breadcumb-content">
                <h1 class="breadcumb-title">Portfolio</h1>
            </div>
        </div>
    </div>

    <!--==============================
    Project Area
    ==============================-->
    <div class="project-area-8 space">
        <div class="container">
            <div class="row gy-4">
                <div class="col-12">
                    <a href="project-details.html" class="portfolio-wrap style3">
                        <div class="portfolio-thumb">
                            <img :src="asset('/assets/img/portfolio/portfolio6_1.jpg')" alt="portfolio">
                        </div>
                        <div class="portfolio-details">
                            <div class="media-left">
                                <ul class="portfolio-meta">
                                    <li>Branding</li>
                                    <li>Development</li>
                                    <li>Marketing</li>
                                </ul>
                                <h3 class="portfolio-title">Anti Money Laundering Compliance Scanner</h3>
                            </div>
                            <div class="portfolio-details-btn">
                                <span class="link-btn">
                                    <span class="link-effect">
                                        <span class="effect-1">VIEW PROJECT</span>
                                        <span class="effect-1">VIEW PROJECT</span>
                                    </span>
                                    <img :src="asset('/assets/img/icon/arrow-left-top.svg')" alt="icon">
                                </span>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-12">
                    <a href="project-details.html" class="portfolio-wrap style3">
                        <div class="portfolio-thumb">
                            <img :src="asset('/assets/img/portfolio/portfolio6_2.jpg')" alt="portfolio">
                        </div>
                        <div class="portfolio-details">
                            <div class="media-left">
                                <ul class="portfolio-meta">
                                    <li>Branding</li>
                                    <li>Development</li>
                                    <li>Marketing</li>
                                </ul>
                                <h3 class="portfolio-title">Shopify Redesign for a Nova Scotia Winery</h3>
                            </div>
                            <div class="portfolio-details-btn">
                                <span class="link-btn">
                                    <span class="link-effect">
                                        <span class="effect-1">VIEW PROJECT</span>
                                        <span class="effect-1">VIEW PROJECT</span>
                                    </span>
                                    <img :src="asset('/assets/img/icon/arrow-left-top.svg')" alt="icon">
                                </span>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-12">
                    <a href="project-details.html" class="portfolio-wrap style3">
                        <div class="portfolio-thumb">
                            <img :src="asset('/assets/img/portfolio/portfolio6_3.jpg')" alt="portfolio">
                        </div>
                        <div class="portfolio-details">
                            <div class="media-left">
                                <ul class="portfolio-meta">
                                    <li>Branding</li>
                                    <li>Development</li>
                                    <li>Marketing</li>
                                </ul>
                                <h3 class="portfolio-title">Money Laundering Compliance Scanner</h3>
                            </div>
                            <div class="portfolio-details-btn">
                                <span class="link-btn">
                                    <span class="link-effect">
                                        <span class="effect-1">VIEW PROJECT</span>
                                        <span class="effect-1">VIEW PROJECT</span>
                                    </span>
                                    <img :src="asset('/assets/img/icon/arrow-left-top.svg')" alt="icon">
                                </span>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-12">
                    <a href="project-details.html" class="portfolio-wrap style3">
                        <div class="portfolio-thumb">
                            <img :src="asset('/assets/img/portfolio/portfolio6_4.jpg')" alt="portfolio">
                        </div>
                        <div class="portfolio-details">
                            <div class="media-left">
                                <ul class="portfolio-meta">
                                    <li>Branding</li>
                                    <li>Development</li>
                                    <li>Marketing</li>
                                </ul>
                                <h3 class="portfolio-title">Money Laundering Compliance Scanner</h3>
                            </div>
                            <div class="portfolio-details-btn">
                                <span class="link-btn">
                                    <span class="link-effect">
                                        <span class="effect-1">VIEW PROJECT</span>
                                        <span class="effect-1">VIEW PROJECT</span>
                                    </span>
                                    <img :src="asset('/assets/img/icon/arrow-left-top.svg')" alt="icon">
                                </span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="btn-wrap justify-content-center mt-60">
                <a class="btn" href="project-2.html">
                    <span class="link-effect">
                        <span class="effect-1">LOAD MORE</span>
                        <span class="effect-1">LOAD MORE</span>
                    </span>
                </a>
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

const asset = (path) => path

usePageMetadata("Project 4")

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
})
</script>
