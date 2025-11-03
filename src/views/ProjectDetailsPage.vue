<!-- Auto-generated from project-details.html -->
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
                    <li><a href="project.html">Porfolio</a></li>
                    <li>Decentralized Platform</li>
                </ul>
            </div>
        </div>
    </div>

    <!--==============================
    Project Details Page Area
    ==============================-->
    <div class="project-details-page-area space">
        <div class="container">
            <div class="row global-carousel default" data-arrows="true" data-xl-arrows="true" data-ml-arrows="true" data-lg-arrows="true" data-md-arrows="true">
                <div class="col-xl-12">
                    <div class="project-inner-thumb mb-80 wow img-custom-anim-top">
                        <img class="w-100" :src="asset('/img/portfolio/portfolio_inner_1.png')" alt="img">
                    </div>
                </div>
                <div class="col-xl-12">
                    <div class="project-inner-thumb mb-80 wow img-custom-anim-top">
                        <img class="w-100" :src="asset('/img/portfolio/portfolio_inner_2.png')" alt="img">
                    </div>
                </div>
            </div>
            <div class="row justify-content-between flex-row-reverse">
                <div class="col-xl-3 col-lg-4">
                    <div class="project-details-info mb-lg-0 mb-40">
                        <ul class="list-wrap">
                            <li><span>Category:</span>Development</li>
                            <li><span>Software:</span>WordPress, Figma</li>
                            <li><span>Service:</span>Development</li>
                            <li><span>Client:</span>Eunice Mills</li>
                            <li><span>Date:</span>October 6, 2023</li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="title-area mb-35">
                        <h2 class="sec-title">Decentralized Platform</h2>
                        <p class="sec-text mt-30">BaseCreate is pleased to announce that it has been commissioned by Leighton Asia reposition its brand. We will help Leighton Asia evolve its brand strategy, and will be responsible updating Leighton Asia’s brand identity, website, and other collaterals.</p>
                        <p class="sec-text mt-30">For almost 50 years Leighton Asia, one of the region’s largest and most respected construction companies, has been progressively building for a better future by leveraging international expertise with local intelligence. In that time Leighton has delivered some of Asia’s prestigious buildings and transformational infrastructure projects.</p>
                    </div>
                    <h3>Challenge & Solution</h3>
                    <p class="sec-text mb-n1">Future, as it seeks to lead the industry in technological innovation and sustainable building practices to deliver long-lasting value for its clients.</p>
                    <h3 class="mt-35">Final Result</h3>
                    <p class="sec-text mb-n1">For almost 50 years Leighton Asia, one of the region’s largest and most respected construction companies, has been progressively building for a better future by leveraging international expertise with local intelligence. In that time Leighton has delivered some of Asia’s prestigious buildings and transformational infrastructure projects.</p>
                </div>
                <div class="col-lg-12">
                    <div class="inner__page-nav space-top mt-n1 mb-n1">
                        <a href="#" class="nav-btn">
                            <i class="fa fa-arrow-left"></i> <span><span class="link-effect">
                                <span class="effect-1">Previous Post</span>
                                <span class="effect-1">Previous Post</span>
                            </span></span>
                        </a>
                        <a href="#" class="nav-btn"><span><span class="link-effect">
                            <span class="effect-1">Next Post</span>
                            <span class="effect-1">Next Post</span>
                        </span></span>
                            <i class="fa fa-arrow-right"></i>
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

usePageMetadata("Project Details")

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
})
</script>
