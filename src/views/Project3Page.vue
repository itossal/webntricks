<!-- Auto-generated from project-3.html -->
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
            <div class="row gy-40 gx-60 justify-content-center">
                <div class="col-xl-6 col-lg-6">
                    <div class="portfolio-wrap">
                        <div class="portfolio-thumb">
                            <a href="project-details.html">
                                <img :src="asset('/img/portfolio/portfolio4_1.png')" alt="portfolio">
                            </a>
                        </div>
                        <div class="portfolio-details">
                            <h3 class="portfolio-title mb-3"><a href="project-details.html">Decentralized Platform</a></h3>
                            <ul class="portfolio-meta">
                                <li><a href="blog.html">Branding</a></li>
                                <li><a href="blog.html">Development</a></li>
                                <li><a href="blog.html">Marketing</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="portfolio-wrap">
                        <div class="portfolio-thumb">
                            <a href="project-details.html">
                                <img :src="asset('/img/portfolio/portfolio4_2.png')" alt="portfolio">
                            </a>
                        </div>
                        <div class="portfolio-details">
                            <h3 class="portfolio-title mb-3"><a href="project-details.html">App for Business</a></h3>
                            <ul class="portfolio-meta">
                                <li><a href="blog.html">Development</a></li>
                                <li><a href="blog.html">Marketing</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="portfolio-wrap">
                        <div class="portfolio-thumb">
                            <a href="project-details.html">
                                <img :src="asset('/img/portfolio/portfolio4_3.png')" alt="portfolio">
                            </a>
                        </div>
                        <div class="portfolio-details">
                            <h3 class="portfolio-title mb-3"><a href="project-details.html">Educational Platform</a></h3>
                            <ul class="portfolio-meta">
                                <li><a href="blog.html">Development</a></li>
                                <li><a href="blog.html">Marketing</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="portfolio-wrap">
                        <div class="portfolio-thumb">
                            <a href="project-details.html">
                                <img :src="asset('/img/portfolio/portfolio4_4.png')" alt="portfolio">
                            </a>
                        </div>
                        <div class="portfolio-details">
                            <h3 class="portfolio-title mb-3"><a href="project-details.html">Nova Scotia Winery</a></h3>
                            <ul class="portfolio-meta">
                                <li><a href="blog.html">Branding</a></li>
                                <li><a href="blog.html">Development</a></li>
                                <li><a href="blog.html">Marketing</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="portfolio-wrap">
                        <div class="portfolio-thumb">
                            <a href="project-details.html">
                                <img :src="asset('/img/portfolio/portfolio4_5.png')" alt="portfolio">
                            </a>
                        </div>
                        <div class="portfolio-details">
                            <h3 class="portfolio-title mb-3"><a href="project-details.html">Caramba Product</a></h3>
                            <ul class="portfolio-meta">
                                <li><a href="blog.html">Branding</a></li>
                                <li><a href="blog.html">Development</a></li>
                                <li><a href="blog.html">Marketing</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="portfolio-wrap">
                        <div class="portfolio-thumb">
                            <a href="project-details.html">
                                <img :src="asset('/img/portfolio/portfolio4_6.png')" alt="portfolio">
                            </a>
                        </div>
                        <div class="portfolio-details">
                            <h3 class="portfolio-title mb-3"><a href="project-details.html">Trading Website Design</a></h3>
                            <ul class="portfolio-meta">
                                <li><a href="blog.html">Branding</a></li>
                                <li><a href="blog.html">Development</a></li>
                                <li><a href="blog.html">Marketing</a></li>
                            </ul>
                        </div>
                    </div>
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
import { assetUrl } from '@/utils/assets'

const asset = assetUrl

usePageMetadata("Project 3")

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
})
</script>
