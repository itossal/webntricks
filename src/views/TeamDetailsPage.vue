<!-- Auto-generated from team-details.html -->
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
                    <li><a href="team.html">Team</a></li>
                    <li>Daniyel Karlos</li>
                </ul>
            </div>
        </div>
    </div>

    <!--==============================
    Team Details Page Area
    ==============================-->
    <div class="team-details-page-area space">
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-xl-5 col-lg-6">
                    <div class="team-inner-thumb mb-lg-0 mb-40">
                        <img class="w-100" :src="asset('/img/team/team-details1-1.png')" alt="img">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="team-details-about-info mb-0">
                        <h2 class="sec-title mb-3">Daniyel Karlos</h2>
                        <h4 class="team-desig">Web Developer</h4>
                        <p class="sec-text mt-30">BaseCreate is pleased to announce that it has been commissioned by Leighton Asia reposition its brand. We will help Leighton Asia evolve its brand strategy, and will be responsible updating Leighton Asia’s brand identity, website, and other collaterals.</p>
                        <p class="sec-text mt-15">For almost 50 years Leighton Asia, one of the region’s largest most respected construction companies been progressively</p>
                        <div class="about-contact-wrap mt-35">
                            <h6 class="about-contact-title"><a href="mailto:daniyel@Karlos.com">Daniyel@Karlos.com</a></h6>
                            <h6 class="about-contact-title"><a href="tel:18408412569">+1 840 841 25 69</a></h6>
                            <div class="social-btn mt-4">
                                <a href="https://www.facebook.com/">
                                    <i class="fab fa-facebook"></i>
                                </a>
                                <a href="https://instagram.com/">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href="https://twitter.com/">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="https://dribbble.com/">
                                    <i class="fab fa-dribbble"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>

    <!--==============================
    Contact Area
    ==============================-->
    <div class="contact-area-2 text-center space-bottom">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-lg-8">
                    <div class="contact-form-wrap">
                        <div class="title-area mb-30">
                            <h3 class="sec-title">Contact with Me</h3>
                            <p>Your email address will not be published. Required fields are marked *</p>
                        </div>
                        <form action="mail.php" method="POST" class="contact-form ajax-contact">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control style-border" name="name" id="name" placeholder="Full name *">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control style-border" name="email" id="email" placeholder="Email address *">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <textarea name="message" placeholder="Write your comment *" id="contactForm" class="form-control style-border style2"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="form-btn col-12">
                                <button type="submit" class="btn mt-20">
                                    <span class="link-effect">
                                        <span class="effect-1">SEND MESSAGE</span>
                                        <span class="effect-1">SEND MESSAGE</span>
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

usePageMetadata("Team Details")

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
})
</script>
