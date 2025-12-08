<!-- Auto-generated from about.html -->
<template>
  <div class="page-content">
<!--==============================
    Breadcumb
    ============================== -->
    <div class="breadcumb-wrapper" :data-bg-src="asset('/img/bg/breadcumb-bg1-1.jpg')">
        <div class="container">
            <div class="breadcumb-content">
                <h1 class="breadcumb-title">A propos</h1>
            </div>
        </div>
    </div>

    <!--==============================
    Counter Area 02
    ==============================-->
    <div class="counter-area-1 space overflow-hidden">
        <div class="container">
            <div class="row gy-40 align-items-center justify-content-lg-between justify-content-center">
                <div class="col-xl-auto col-lg-4 col-md-6 counter-divider">
                    <div class="counter-card">
                        <h3 class="counter-card_number">
                            <span class="counter-number">26</span>+
                        </h3>
                        <h4 class="counter-card_title">Années d'expérience</h4>
                        <p class="counter-card_text">Nous sommes une agence créative qui aide les marques à élaborer des stratégies pertinentes et à créer des designs uniques.</p>
                    </div>
                </div>
                <div class="col-xl-auto col-lg-4 col-md-6 counter-divider">
                    <div class="counter-card">
                        <h3 class="counter-card_number">
                            <span class="counter-number">347</span>+
                        </h3>
                        <h4 class="counter-card_title">Projets réussis</h4>
                        <p class="counter-card_text">Nous sommes une agence créative qui aide les marques à élaborer des stratégies pertinentes et à créer des designs uniques.</p>
                    </div>
                </div>
                <div class="col-xl-auto col-lg-4 col-md-6 counter-divider">
                    <div class="counter-card">
                        <h3 class="counter-card_number">
                            <span class="counter-number">139</span>+
                        </h3>
                        <h4 class="counter-card_title">Clients satisfaits</h4>
                        <p class="counter-card_text">Nous sommes une agence créative qui aide les marques à élaborer des stratégies pertinentes et à créer des designs uniques.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>




<div class="portfolio-area-1 space overflow-hidden">
  <div class="container">
    <!-- Intro text -->
    <div class="row mb-60">
      <div class="col-lg-12">
        <h2 class="section-title mb-20">Notre vision</h2>
        <p>
          Nous croyons qu’une stratégie digitale réussie repose sur la fusion de créativité,
          technologie et sens de la relation humaine. Notre mission : donner vie à vos idées,
          renforcer votre identité et générer des résultats concrets.
        </p>
      </div>
    </div>

    <div class="row mb-40">
      <div class="col-lg-6">
        <h3 class="section-subtitle mb-20">Notre approche</h3>
        <ul class="list-style">
          <li>Diagnostic personnalisé pour chaque client</li>
          <li>Collaboration active à chaque étape : de l’audit à la mise en ligne</li>
          <li>Suivi, optimisation et accompagnement après lancement</li>
        </ul>
      </div>
      <div class="col-lg-6">
        <h3 class="section-subtitle mb-20">Nos valeurs</h3>
        <p>
          Engagement, proximité, innovation et performance guident notre travail au quotidien.
          Nous mettons l’accent sur la transparence, le dialogue et la satisfaction client.
        </p>
      </div>
    </div>

    <!-- Static portfolio cards -->
    <div class="row mb-40">
      <div class="col-12">
        <h3 class="section-subtitle mb-30">Nos réalisations</h3>
      </div>
    </div>

    <div class="row justify-content-between masonary-active">
      <!-- Fauvert.fr -->
      <div class="col-xl-4 col-md-6 filter-item">
        <div class="portfolio-wrap">
          <div class="portfolio-thumb">
            <RouterLink to="/projects/fauvert">
              <!-- remplace le visuel par ton vrai chemin -->
              <img :src="asset('/img/portfolio/fauvert.jpg')" alt="Fauvert.fr">
            </RouterLink>
          </div>
          <div class="portfolio-details">
            <!-- portfolio-meta removed -->
            <h3 class="portfolio-title">
              <RouterLink to="/projects/fauvert">Fauvert.fr</RouterLink>
            </h3>
            <p class="mb-20">
              Refonte e-commerce et branding capillaire.
            </p>
            <RouterLink :to="`/projects/fauvert`" class="link-btn">
              <span class="link-effect">
                <span class="effect-1">VOIR LE PROJET</span>
                <span class="effect-1">VOIR LE PROJET</span>
              </span>
              <img :src="asset('/img/icon/arrow-left-top.svg')" alt="icon">
            </RouterLink>
          </div>
        </div>
      </div>

      <!-- Auramur.fr -->
      <div class="col-xl-4 col-md-6 filter-item">
        <div class="portfolio-wrap">
          <div class="portfolio-thumb">
            <RouterLink to="/projects/auramur">
              <img :src="asset('/img/portfolio/auramur.jpg')" alt="Auramur.fr">
            </RouterLink>
          </div>
          <div class="portfolio-details">
            <!-- portfolio-meta removed -->
            <h3 class="portfolio-title">
              <RouterLink to="/projects/auramur">Auramur.fr</RouterLink>
            </h3>
            <p class="mb-20">
              Plateforme digitale pour le revêtement mural.
            </p>
            <RouterLink :to="`/projects/auramur`" class="link-btn">
              <span class="link-effect">
                <span class="effect-1">VOIR LE PROJET</span>
                <span class="effect-1">VOIR LE PROJET</span>
              </span>
              <img :src="asset('/img/icon/arrow-left-top.svg')" alt="icon">
            </RouterLink>
          </div>
        </div>
      </div>

      <!-- Spirulinedelacotebleue.fr -->
      <div class="col-xl-4 col-md-6 filter-item">
        <div class="portfolio-wrap">
          <div class="portfolio-thumb">
            <RouterLink to="/projects/spiruline-cote-bleue">
              <img :src="asset('/img/portfolio/spiruline.jpg')" alt="Spirulinedelacotebleue.fr">
            </RouterLink>
          </div>
          <div class="portfolio-details">
            <!-- portfolio-meta removed -->
            <h3 class="portfolio-title">
              <RouterLink to="/projects/spiruline-cote-bleue">
                Spirulinedelacotebleue.fr
              </RouterLink>
            </h3>
            <p class="mb-20">
              Site marchand et contenus pédagogiques IA.
            </p>
            <RouterLink :to="`/projects/spiruline-cote-bleue`" class="link-btn">
              <span class="link-effect">
                <span class="effect-1">VOIR LE PROJET</span>
                <span class="effect-1">VOIR LE PROJET</span>
              </span>
              <img :src="asset('/img/icon/arrow-left-top.svg')" alt="icon">
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Bouton (garde ou supprime selon ton besoin) -->
    <div class="btn-wrap justify-content-center mt-60">
      <RouterLink class="btn" to="/project-2">
        <span class="link-effect">
          <span class="effect-1">TOUS LES PROJETS</span>
          <span class="effect-1">TOUS LES PROJETS</span>
        </span>
      </RouterLink>
    </div>
  </div>
</div>













    <!--==============================
    Why Choose Us Area
    ==============================-->
    <!--div class="why-area-1 space bg-theme">
        <div class="why-img-1-1 shape-mockup wow img-custom-anim-right" data-wow-duration="1.5s" data-wow-delay="0.2s" data-right="0" data-top="-100px" data-bottom="140px">
            <img :src="asset('/img/normal/why_3-1.jpg')" alt="img">
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="title-area mb-45">
                        <h2 class="sec-title">Passionné par la création de designs de qualité</h2>
                    </div>
                    <h4>Nous aimons ce que nous faisons</h4>
                    <p>Nous sommes une agence créative qui accompagne les marques dans l'élaboration de stratégies pertinentes, la création de designs uniques et la valorisation de leurs produits.</p>
                    <h4 class="mt-35">Pourquoi travailler avec nous</h4>
                    <p class="mb-n1">Si vous demandez à nos clients ce que c'est que de travailler avec 36, ils vous parleront de l'importance que nous accordons à leur réussite. Pour nous, les relations authentiques sont le moteur d'une réussite authentique. Nous adorons bâtir des marques.</p>
                </div>
            </div>

        </div>
    </div-->

    <!--==============================
    Award Area
    ==============================-->
    <!--div class="award-area-1 space overflow-hidden">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <ul class="award-wrap-area">
                        <li class="single-award-list">
                            <span class="award-year">2017</span>
                            <div class="award-details">
                                <h4><a href="about.html">New York Design Week</a></h4>
                                <p>We bring to life the most complex projects, specialize</p>
                            </div>
                            <span class="award-tag">Main developer</span>
                        </li>
                        <li class="single-award-list">
                            <span class="award-year">2019</span>
                            <div class="award-details">
                                <h4><a href="about.html">The Blue Design Awards</a></h4>
                                <p>We bring to life the most complex projects, specialize</p>
                            </div>
                            <span class="award-tag">Animator</span>
                        </li>
                        <li class="single-award-list">
                            <span class="award-year">2019</span>
                            <div class="award-details">
                                <h4><a href="about.html">Best Web Flow</a></h4>
                                <p>We bring to life the most complex projects, specialize</p>
                            </div>
                            <span class="award-tag">Main developer</span>
                        </li>
                        <li class="single-award-list">
                            <span class="award-year">2019</span>
                            <div class="award-details">
                                <h4><a href="about.html">Berlin Interactive Award</a></h4>
                                <p>We bring to life the most complex projects, specialize</p>
                            </div>
                            <span class="award-tag">Best innovations</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div-->

    <!--==============================
    Team Area
    ==============================-->
    <div class="team-area-1 space-bottom overflow-hidden">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="title-area text-center">
                        <h2 class="sec-title">Une équipe experte, dédiée à votre réussite</h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row gy-4 justify-content-center">
                <div class="col-lg-3 col-md-6">
                    <div class="team-card">
                        <div class="team-card_img">
                            <img :src="asset('/img/team/team-1-1.png')" alt="Team Image">
                        </div>
                        <div class="team-card_content">
                            <h3 class="team-card_title"><a href="team-details.html">Slim Sayari</a></h3>
                            <span class="team-card_desig">fondateur de la startup Expert IT, dirige la vision et le pilotage stratégique de vos projets digitaux grâce à son expérience entrepreneuriale</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="team-card">
                        <div class="team-card_img">
                            <img :src="asset('/img/team/team-1-2.png')" alt="Team Image">
                        </div>
                        <div class="team-card_content">
                            <h3 class="team-card_title"><a href="team-details.html">Rania Hmida</a></h3>
                            <span class="team-card_desig">garantit votre stratégie digitale, coordonne chaque étape et veille rigoureusement au respect de vos objectifs et délais.</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="team-card">
                        <div class="team-card_img">
                            <img :src="asset('/img/team/team-1-3.png')" alt="Team Image">
                        </div>
                        <div class="team-card_content">
                            <h3 class="team-card_title"><a href="team-details.html">Jérémy Poletto</a></h3>
                            <span class="team-card_desig">Partner & Ads Expert, optimise la visibilité de votre marque et l’acquisition client avec des campagnes Google et Facebook Ads performantes.</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="team-card">
                        <div class="team-card_img">
                            <img :src="asset('/img/team/team-1-4.png')" alt="Team Image">
                        </div>
                        <div class="team-card_content">
                            <h3 class="team-card_title"><a href="team-details.html">Mounir Majeri</a></h3>
                            <span class="team-card_desig">Expert SEO, propulse votre site en tête des moteurs de recherche grâce à des stratégies de référencement sur mesure.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div class="container"  style="    margin-top: 20px;">
            <div class="row gy-4 justify-content-center">
                <div class="col-lg-3 col-md-6">
                    <div class="team-card">
                        <div class="team-card_img">
                            <img :src="asset('/img/team/team-1-1.png')" alt="Team Image">
                        </div>
                        <div class="team-card_content">
                            <h3 class="team-card_title"><a href="team-details.html">Marwen Ayari</a></h3>
                            <span class="team-card_desig">Web Intégrateur, conçoit et intègre des interfaces innovantes pour une expérience utilisateur fluide et engageante</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="team-card">
                        <div class="team-card_img">
                            <img :src="asset('/img/team/team-1-2.png')" alt="Team Image">
                        </div>
                        <div class="team-card_content">
                            <h3 class="team-card_title"><a href="team-details.html">Salaheddine Arnouni</a></h3>
                            <span class="team-card_desig">développeur, assure le développement technique et la fiabilité des solutions livrées.</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="team-card">
                        <div class="team-card_img">
                            <img :src="asset('/img/team/team-1-3.png')" alt="Team Image">
                        </div>
                        <div class="team-card_content">
                            <h3 class="team-card_title"><a href="team-details.html">Dhia Omri</a></h3>
                            <span class="team-card_desig">Full Stack, maîtrise à la fois le front-end et le back-end pour garantir la performance et la robustesse de vos plateformes digitales.</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="team-card">
                        <div class="team-card_img">
                            <img :src="asset('/img/team/team-1-4.png')" alt="Team Image">
                        </div>
                        <div class="team-card_content">
                            <h3 class="team-card_title"><a href="team-details.html">Mahmoud Ben Mustapha</a></h3>
                            <span class="team-card_desig">développeur spécialisé SF (Symfony) et Laravel, assure des architectures back-end fiables et évolutives.</span>
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
            <iframe  src="https://maps.google.com/maps?q=12%20Rue%20des%20Chauffours%20-%20Immeuble%20Ordinal%20-%20508%20F%2095000%20Cergy%2C%20France&t=m&z=15&output=embed&iwloc=near" allowfullscreen="" loading="lazy"></iframe>
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
                                        <textarea name="message" placeholder="How Can We Help You*" id="contactForm" class="form-control style-border"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="form-btn col-12">
                                <button type="submit" class="btn mt-20">
                                    <span class="link-effect">
                                        <span class="effect-1">Envoyer</span>
                                        <span class="effect-1">Envoyer</span>
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
    Client Area
    ==============================-->
    <div class="client-area-1 overflow-hidden space">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-8">
                    <ul class="client-list-wrap">
                        <li>
                            <a href="#">
                                <span class="link-effect">
                                    <span class="effect-1"><img :src="asset('/img/client/client-1-1.svg')" alt="img"></span>
                                    <span class="effect-1"><img :src="asset('/img/client/client-1-1.svg')" alt="img"></span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="link-effect">
                                    <span class="effect-1"><img :src="asset('/img/client/client-1-2.svg')" alt="img"></span>
                                    <span class="effect-1"><img :src="asset('/img/client/client-1-2.svg')" alt="img"></span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="link-effect">
                                    <span class="effect-1"><img :src="asset('/img/client/client-1-3.svg')" alt="img"></span>
                                    <span class="effect-1"><img :src="asset('/img/client/client-1-3.svg')" alt="img"></span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="link-effect">
                                    <span class="effect-1"><img :src="asset('/img/client/client-1-4.svg')" alt="img"></span>
                                    <span class="effect-1"><img :src="asset('/img/client/client-1-4.svg')" alt="img"></span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="link-effect">
                                    <span class="effect-1"><img :src="asset('/img/client/client-1-5.svg')" alt="img"></span>
                                    <span class="effect-1"><img :src="asset('/img/client/client-1-5.svg')" alt="img"></span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="link-effect">
                                    <span class="effect-1"><img :src="asset('/img/client/client-1-6.svg')" alt="img"></span>
                                    <span class="effect-1"><img :src="asset('/img/client/client-1-6.svg')" alt="img"></span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="link-effect">
                                    <span class="effect-1"><img :src="asset('/img/client/client-1-7.svg')" alt="img"></span>
                                    <span class="effect-1"><img :src="asset('/img/client/client-1-7.svg')" alt="img"></span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="link-effect">
                                    <span class="effect-1"><img :src="asset('/img/client/client-1-8.svg')" alt="img"></span>
                                    <span class="effect-1"><img :src="asset('/img/client/client-1-8.svg')" alt="img"></span>
                                </span>
                            </a>
                        </li>
                    </ul>
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

usePageMetadata("About")

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
})
</script>
