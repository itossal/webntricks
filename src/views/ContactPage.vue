<!-- Auto-generated from contact.html -->
<template>
  <div class="page-content">
<!--==============================
    Breadcumb
    ============================== -->
    <div class="breadcumb-wrapper " :data-bg-src="asset('/img/bg/breadcumb-bg1-6.jpg')">
        <div class="container">
            <div class="breadcumb-content">
                <h1 class="breadcumb-title">Contact</h1>
            </div>
        </div>
    </div>

    <!--==============================
    Feature Area
    ==============================-->
    <div class="feature-area-1 space">
        <div class="container">
            <div class="row gy-4 align-items-center justify-content-center">
                <div class="col-xl-4 col-md-6">
                    <div class="feature-card">
                        <div class="feature-card-icon">
                            <img :src="asset('/img/icon/location-pin-alt.svg')" alt="icon">
                        </div>
                        <div class="feature-card-details">
                            <h4 class="feature-card-title">
                                <a href="project.html">Emplacement</a>
                            </h4>
                            <p class="feature-card-text mb-0">212 Rue des Chauffours, Immeuble</p>
                            <p class="feature-card-text">Ordinal, 508 F 95000 Cergy</p>

                            <a href="https://maps.google.com" class="link-btn">
                                <span class="link-effect">
                                    <span class="effect-1">Obtenir la direction</span>
                                    <span class="effect-1">Obtenir la direction</span>
                                </span>
                                <img :src="asset('/img/icon/arrow-left-top.svg')" alt="icon">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6">
                    <div class="feature-card">
                        <div class="feature-card-icon">
                            <img :src="asset('/img/icon/speech-bubble.svg')" alt="icon">
                        </div>
                        <div class="feature-card-details">
                            <h4 class="feature-card-title">
                                <a href="project.html">Email</a>
                            </h4>
                            <p class="feature-card-text mb-0">contact@webntricks.com</p>
                            <p class="feature-card-text">contact@webntricks.com</p>
                            <a href="mailto:contact@webntricks.com" class="link-btn">
                                <span class="link-effect">
                                    <span class="effect-1">Envoyer un message</span>
                                    <span class="effect-1">Envoyer un message</span>
                                </span>
                                <img :src="asset('/img/icon/arrow-left-top.svg')" alt="icon">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6">
                    <div class="feature-card">
                        <div class="feature-card-icon">
                            <img :src="asset('/img/icon/phone.svg')" alt="icon">
                        </div>
                        <div class="feature-card-details">
                            <h4 class="feature-card-title">
                                <a href="project.html">Téléphone</a>
                            </h4>
                            <p class="feature-card-text mb-0">01 84 24 01 18 </p>
                            <p class="feature-card-text">01 84 24 01 18 </p>

                            <a href="tel:1800123654987" class="link-btn">
                                <span class="link-effect">
                                    <span class="effect-1">Appelez à tout moment</span>
                                    <span class="effect-1">Appelez à tout moment</span>
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
    Contact Area
    ==============================-->
    <div class="contact-area-1 space bg-theme">
        <div class="contact-map shape-mockup wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.2s" data-left="0" data-top="-100px" data-bottom="140px">
            <iframe   src="https://maps.google.com/maps?q=12%20Rue%20des%20Chauffours%20-%20Immeuble%20Ordinal%20-%20508%20F%2095000%20Cergy%2C%20France&t=m&z=15&output=embed&iwloc=near"
 allowfullscreen="" loading="lazy"></iframe>
        </div>
        <div class="container">
            <div class="row align-items-center justify-content-end">
                <div class="col-lg-6">
                    <div class="contact-form-wrap">
                        <div class="title-area mb-30">
                            <h2 class="sec-title">Avez-vous un projet en tête ?</h2>
                            <p>Super ! Nous sommes impatients d'avoir de vos nouvelles et de commencer quelque chose ensemble.</p>
                        </div>
                        <form action="mail.php" method="POST" class="contact-form ajax-contact">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control style-border" name="name" id="name" placeholder="Nom*">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control style-border" name="email" id="email" placeholder="Email*">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control style-border" name="website" id="website" placeholder="Site Web">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <textarea name="message" placeholder="Comment pouvons-nous vous aider ?*" id="contactForm" class="form-control style-border"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="form-btn col-12">
                                <button type="submit" class="btn mt-20">
                                    <span class="link-effect">
                                        <span class="effect-1">ENVOYER</span>
                                        <span class="effect-1">ENVOYER</span>
                                    </span>
                                </button>
                            </div>
                        </form>
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

usePageMetadata("Contact")

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
})
</script>
