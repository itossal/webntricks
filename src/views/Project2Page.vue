<!-- Auto-generated from project-2.html -->
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
        Portfolio Area
    ==============================-->
    <div class="portfolio-area-1 space overflow-hidden">
        <div class="container">
            <div class="row gy-4 justify-content-center">
                <div class="col-lg-7">
                    <a href="project-details.html" class="portfolio-wrap style3">
                        <div class="portfolio-thumb">
                            <img :src="asset('/assets/img/portfolio/portfolio3_1.jpg')" alt="portfolio">
                        </div>
                        <div class="portfolio-details">
                            <ul class="portfolio-meta">
                                <li>Branding</li>
                            </ul>
                            <h3 class="portfolio-title">Decentralized Platform</h3>
                        </div>
                    </a>
                </div>
                <div class="col-lg-5">
                    <a href="project-details.html" class="portfolio-wrap style3">
                        <div class="portfolio-thumb">
                            <img :src="asset('/assets/img/portfolio/portfolio3_2.jpg')" alt="portfolio">
                        </div>
                        <div class="portfolio-details">
                            <ul class="portfolio-meta">
                                <li>Branding</li>
                            </ul>
                            <h3 class="portfolio-title">Laundering Compliance</h3>
                        </div>
                    </a>
                </div>
                <div class="col-lg-12">
                    <a href="project-details.html" class="portfolio-wrap style3">
                        <div class="portfolio-thumb">
                            <img :src="asset('/assets/img/portfolio/portfolio3_3.jpg')" alt="portfolio">
                        </div>
                        <div class="portfolio-details">
                            <ul class="portfolio-meta">
                                <li>Branding</li>
                            </ul>
                            <h3 class="portfolio-title">Anti Money Laundering</h3>
                        </div>
                    </a>
                </div>
                <div class="col-lg-5">
                    <a href="project-details.html" class="portfolio-wrap style3">
                        <div class="portfolio-thumb">
                            <img :src="asset('/assets/img/portfolio/portfolio3_4.png')" alt="portfolio">
                        </div>
                        <div class="portfolio-details">
                            <ul class="portfolio-meta">
                                <li>Branding</li>
                            </ul>
                            <h3 class="portfolio-title">Decentralized Platform</h3>
                        </div>
                    </a>
                </div>
                <div class="col-lg-7">
                    <a href="project-details.html" class="portfolio-wrap style3">
                        <div class="portfolio-thumb">
                            <img :src="asset('/assets/img/portfolio/portfolio3_5.png')" alt="portfolio">
                        </div>
                        <div class="portfolio-details">
                            <ul class="portfolio-meta">
                                <li>Branding</li>
                            </ul>
                            <h3 class="portfolio-title">Laundering Compliance</h3>
                        </div>
                    </a>
                </div>
                <div class="col-lg-12">
                    <a href="project-details.html" class="portfolio-wrap style3">
                        <div class="portfolio-thumb">
                            <img :src="asset('/assets/img/portfolio/portfolio3_6.png')" alt="portfolio">
                        </div>
                        <div class="portfolio-details">
                            <ul class="portfolio-meta">
                                <li>Branding</li>
                            </ul>
                            <h3 class="portfolio-title">Anti Money Laundering</h3>
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

usePageMetadata("Project 2")

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
})
</script>
