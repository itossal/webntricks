<!-- Auto-generated from project-6.html -->
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
    <div class="award-area-1 space overflow-hidden">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <ul class="award-wrap-area">
                        <li class="single-award-list style2 tg-img-reveal-item" data-fx="1" data-img="/assets/img/award/award-1-1.png">
                            <span class="award-year">2017</span>
                            <div class="award-details">
                                <h4><a href="project.html">Decentralized Platform</a></h4>
                                <div class="award-meta">
                                    <a href="project.html">Branding</a>
                                    <a href="project.html">Development</a>
                                    <a href="project.html">Marketing</a>
                                </div>
                            </div>
                            <span class="award-tag">Webflow</span>
                        </li>
                        <li class="single-award-list style2 tg-img-reveal-item" data-fx="1" data-img="/assets/img/award/award-1-2.png">
                            <span class="award-year">2019</span>
                            <div class="award-details">
                                <h4><a href="project.html">App for Business</a></h4>
                                <div class="award-meta">
                                    <a href="project.html">Development</a>
                                    <a href="project.html">Marketing</a>
                                </div>
                            </div>
                            <span class="award-tag">Themeforest</span>
                        </li>
                        <li class="single-award-list style2 tg-img-reveal-item" data-fx="1" data-img="/assets/img/award/award-1-3.png">
                            <span class="award-year">2019</span>
                            <div class="award-details">
                                <h4><a href="project.html">Website Development</a></h4>
                                <div class="award-meta">
                                    <a href="project.html">Branding</a>
                                    <a href="project.html">Development</a>
                                </div>
                            </div>
                            <span class="award-tag">Framer</span>
                        </li>
                        <li class="single-award-list style2 tg-img-reveal-item" data-fx="1" data-img="/assets/img/award/award-1-4.png">
                            <span class="award-year">2022</span>
                            <div class="award-details">
                                <h4><a href="project.html">Nova Scotia Winery</a></h4>
                                <div class="award-meta">
                                    <a href="project.html">Branding</a>
                                    <a href="project.html">Development</a>
                                    <a href="project.html">Marketing</a>
                                </div>
                            </div>
                            <span class="award-tag">Template monster</span>
                        </li>
                        <li class="single-award-list style2 tg-img-reveal-item" data-fx="1" data-img="/assets/img/award/award-1-5.png">
                            <span class="award-year">2023</span>
                            <div class="award-details">
                                <h4><a href="project.html">Educational Platform</a></h4>
                                <div class="award-meta">
                                    <a href="project.html">Marketing</a>
                                    <a href="project.html">Branding</a>
                                </div>
                            </div>
                            <span class="award-tag">Themeforest</span>
                        </li>
                    </ul>
                    <div class="btn-wrap mt-50 justify-content-center">
                        <a href="project.html" class="btn">
                            <span class="link-effect">
                                <span class="effect-1">VIEW ALL PROJECTS</span>
                                <span class="effect-1">VIEW ALL PROJECTS</span>
                            </span>
                        </a>
                    </div>
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

usePageMetadata("Project 6")

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
})
</script>
