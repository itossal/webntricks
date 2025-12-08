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
                    <li><RouterLink to="/">Acceuil</RouterLink></li>
                    <li><RouterLink to="/service">Services</RouterLink></li>
                    <li>{{ service.title }}</li>
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
                        <img class="w-100" :src="asset('/img/service/service-details1-1.png')" alt="img">
                    </div>
                </div>
                <div class="col-xl-8">
                    <div class="title-area mb-35">
                        <h2 class="sec-title">{{ service.title }}</h2>
                        <p class="sec-text mt-30">{{ service.description }}</p>
                        <p class="sec-text mt-30">{{ detailDescription }}</p>
                    </div>
                    <h3>Notre approche</h3>
                    <p class="sec-text mb-n1">{{ approachText }}</p>
                </div>
                <div class="col-lg-12">
                    <div class="video-area-1 mt-80 mb-80">
                        <div class="video-wrap">
                            <div class="jarallax" :data-bg-src="asset('/img/normal/video_2-2.png')">
                            </div>
                            <a href="https://www.youtube.com/watch?v=vvNwlRLjLkU" class="play-btn popup-video background-image">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-8">
                    <p class="sec-text mt-n1 mb-40">{{ outcomeText }}</p>
                    <h3>Impact pour {{ service.title }}</h3>
                    <p class="sec-text mt-30">{{ detailDescription }}</p>
                    <p class="sec-text mb-40 mt-30">{{ closingNote }}</p>
                    <div class="row gy-4">
                        <div class="col-md-6">
                            <div class="feature-card">
                                <div class="feature-card-icon">
                                    <img :src="asset('/img/icon/feature-icon1-3.svg')" alt="icon">
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
                                    <img :src="asset('/img/icon/feature-icon1-6.svg')" alt="icon">
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
import { computed, onMounted, watch } from 'vue'
import { usePageMetadata } from '@/composables/usePageMetadata'
import { assetUrl } from '@/utils/assets'
import { useRoute } from '@/router'
import { services as serviceList } from '@/utils/services'

const asset = assetUrl
const route = useRoute()
const fallbackDescription =
  "Nous concevons des expériences claires, utiles et mesurables pour soutenir vos objectifs business et marketing."
const fallbackApproach =
  "Co-création, prototypage rapide et itérations guidées par la donnée pour sécuriser chaque étape du projet."
const fallbackOutcome =
  "Livrables prêts à l’emploi, performances suivies et optimisation continue pour garantir des résultats durables."

const service = computed(() => serviceList.find((item) => item.slug === route.params.slug) || serviceList[0])
const detailDescription = computed(() => service.value?.longDescription ?? fallbackDescription)
const approachText = computed(() => service.value?.approach ?? fallbackApproach)
const outcomeText = computed(() => service.value?.outcome ?? fallbackOutcome)
const closingNote = computed(
  () =>
    `Nous mettons ${service.value?.title?.toLowerCase() ?? 'ce service'} en action avec une équipe dédiée, un pilotage clair et des livrables prêts à performer.`
)

usePageMetadata("Service Details")

watch(
  service,
  (value) => {
    if (value?.title) {
      route.meta.title = value.title
    }
  },
  { immediate: true }
)

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
})
</script>
