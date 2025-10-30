<!-- Auto-generated from service-details.html -->
<template>
  <div class="page-content">
<!--==============================
    Breadcumb
    ============================== -->
    <div class="breadcumb-wrapper style2 bg-smoke">
        <div class="container-fluid">
            <div class="breadcumb-content">
                <ul class="breadcumb-menu">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="service.html">Services</a></li>
                    <li>Branding Design</li>
                </ul>
            </div>
        </div>
    </div>

    <!--==============================
    Service Details Page Area
    ==============================-->
    <div class="service-details-page-area space">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-xl-12">
                    <div class="service-inner-thumb mb-80 wow img-custom-anim-top">
                        <img class="w-100" :src="asset('/assets/img/service/service-details1-1.png')" alt="img">
                    </div>
                </div>
                <div class="col-xl-8">
                    <div class="title-area mb-35">
                        <h2 class="sec-title">Branding Design</h2>
                        <p class="sec-text mt-30">BaseCreate is pleased to announce that it has been commissioned by Leighton Asia reposition its brand. We will help Leighton Asia evolve its brand strategy, and will be responsible updating Leighton Asia’s brand identity, website, and other collaterals.</p>
                        <p class="sec-text mt-30">For almost 50 years Leighton Asia, one of the region’s largest and most respected construction companies, has been progressively building for a better future by leveraging international expertise with local intelligence. In that time Leighton has delivered some of Asia’s prestigious buildings and transformational infrastructure projects.</p>
                    </div>
                    <h3>Remarking Services</h3>
                    <p class="sec-text mb-n1">Leighton Asia’s brand refreshment will help position the company to meet the challenges of  future, as it seeks to lead the industry in technological innovation and sustainable building practices to deliver long-lasting value for its clients.</p>
                </div>
                <div class="col-lg-12">
                    <div class="video-area-1 mt-80 mb-80">
                        <div class="video-wrap">
                            <div class="jarallax" :data-bg-src="asset('/assets/img/normal/video_2-2.png')">
                            </div>
                            <a href="https://www.youtube.com/watch?v=vvNwlRLjLkU" class="play-btn popup-video background-image">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-8">
                    <p class="sec-text mt-n1 mb-40">Leighton Asia’s brand refreshment will help position the company to meet the challenges of  future, as it seeks to lead the industry in technological innovation and sustainable building practices to deliver long-lasting value for its clients.</p>
                    <h3>Making for Users Friendly</h3>
                    <p class="sec-text mt-30">Leighton Asia’s brand refreshment will help position the company to meet the challenges of  future, as it seeks to lead the industry in technological innovation and sustainable building practices to deliver long-lasting value for its clients.</p>
                    <p class="sec-text mb-40 mt-30">For almost 50 years Leighton Asia, one of the region’s largest and most respected construction companies, has been progressively building for a better future by leveraging international expertise with local intelligence. In that time Leighton has delivered some of Asia’s prestigious buildings and transformational infrastructure projects.</p>
                    <div class="row gy-4">
                        <div class="col-md-6">
                            <div class="feature-card">
                                <div class="feature-card-icon">
                                    <img :src="asset('/assets/img/icon/feature-icon1-3.svg')" alt="icon">
                                </div>
                                <h4 class="feature-card-title">
                                    <a href="service.html">Custom Solution</a>
                                </h4>
                                <p class="feature-card-text mb-n2">We care success relationships fuel success we love building</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="feature-card">
                                <div class="feature-card-icon">
                                    <img :src="asset('/assets/img/icon/feature-icon1-6.svg')" alt="icon">
                                </div>
                                <h4 class="feature-card-title">
                                    <a href="service.html">In-time Result</a>
                                </h4>
                                <p class="feature-card-text mb-n2">We care success relationships fuel success we love building</p>
                            </div>
                        </div>
                    </div>
                    <p class="sec-text mb-n1 mt-40">Leighton Asia’s brand refreshment will help position the company to meet the challenges of  future, as it seeks to lead the industry in technological innovation and sustainable building practices to deliver long-lasting value for its clients.</p>
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

usePageMetadata("Service Details")

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
})
</script>
