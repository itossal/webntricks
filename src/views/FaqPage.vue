<!-- Auto-generated from faq.html -->
<template>
  <div class="page-content">
<!--==============================
    Breadcumb
    ============================== -->
    <div class="breadcumb-wrapper " :data-bg-src="asset('/img/bg/breadcumb-bg1-5.jpg')">
        <div class="container">
            <div class="breadcumb-content">
                <h1 class="breadcumb-title">FAQs</h1>
            </div>
        </div>
    </div>

    <!--==============================
    Faq Area
    ==============================-->
    <div class="faq-area-2 space overflow-hidden">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-8">
                    <div class="accordion-area accordion" id="faqAccordion">

                        <div class="accordion-card style2 active">
                            <div class="accordion-header" id="collapse-item-1">
                                <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">Comment Webntricks peut-il transformer votre présence digitale en un levier de croissance puissant ?</button>
                            </div>
                            <div id="collapse-1" class="accordion-collapse collapse show" aria-labelledby="collapse-item-1" data-bs-parent="#faqAccordion">
                                <div class="accordion-body">
                                    <p class="faq-text">Webntricks combine une expertise pointue en design, SEO, marketing digital et développement pour créer des solutions sur-mesure qui augmentent votre visibilité, fidélisent vos clients et génèrent un chiffre d’affaires durable.</p>
                                </div>
                            </div>
                        </div>


                        <div class="accordion-card style2">
                            <div class="accordion-header" id="collapse-item-2">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">Quelle solution digitale sur mesure vous convient le mieux pour booster votre visibilité et vos ventes ?</button>
                            </div>
                            <div id="collapse-2" class="accordion-collapse collapse " aria-labelledby="collapse-item-2" data-bs-parent="#faqAccordion">
                                <div class="accordion-body">
                                    <p class="faq-text">Nous adaptons nos offres à vos besoins spécifiques, que vous recherchiez un site vitrine élégant, une boutique e-commerce performante ou une stratégie d’acquisition multicanal efficace.</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--==============================
    Feature Area
    ==============================-->
    <div class="feature-area-1 space-bottom">
        <div class="container">
            <div class="row gy-4 align-items-center justify-content-center">
                <div class="col-xxl-6 col-xl-6">
                    <div class="feature-card style-grid">
                        <div class="feature-card-icon">
                            <img :src="asset('/img/icon/phone.svg')" alt="icon">
                        </div>
                        <div class="feature-card-details">
                            <h4 class="feature-card-title">
                                <a href="project.html">Contactez-nous</a>
                            </h4>
                            <p class="feature-card-text">Un bon site web raconte une histoire qui permettra aux utilisateurs de s'immerger pleinement dans son fonctionnement.</p>
                            <a href="tel:0184240118" class="link-btn">
                                <span class="link-effect">
                                    <span class="effect-1">01 84 24 01 18</span>
                                    <span class="effect-1">01 84 24 01 18</span>
                                </span>
                                <img :src="asset('/img/icon/arrow-left-top.svg')" alt="icon">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-6 col-xl-6">
                    <div class="feature-card style-grid">
                        <div class="feature-card-icon">
                            <img :src="asset('/img/icon/speech-bubble.svg')" alt="icon">
                        </div>
                        <div class="feature-card-details">
                            <h4 class="feature-card-title">
                                <a href="project.html">Envoyer un message</a>
                            </h4>
                            <p class="feature-card-text">Un bon site web raconte une histoire qui permettra aux utilisateurs de s'immerger pleinement dans son fonctionnement.</p>
                            <a href="mailto:contact@webntricks.com" class="link-btn">
                                <span class="link-effect">
                                    <span class="effect-1">contact@webntricks.com</span>
                                    <span class="effect-1">contact@webntricks.com</span>
                                </span>
                                <img :src="asset('/img/icon/arrow-left-top.svg')" alt="icon">
                            </a>
                        </div>
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

const asset = assetUrl

usePageMetadata("Faq")

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
})
</script>
