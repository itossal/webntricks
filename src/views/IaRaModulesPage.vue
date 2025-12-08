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
            <li>Modules IA & RA</li>
          </ul>
        </div>
      </div>
    </div>

    <!--==============================
    Service Details Page Area
    ==============================-->
    <div class="service-details-page-area space">
      <div class="container">
        <div class="row align-items-center justify-content-center g-4">
          <div class="col-xl-5">
            <div class="service-inner-thumb mb-40 wow img-custom-anim-top">
              <img class="w-100" :src="asset('/img/service/service-details1-2.png')" alt="Module IA de rédaction" />
            </div>
          </div>
          <div class="col-xl-7">
            <div class="title-area mb-35">
              <h2 class="sec-title">Module IA de rédaction d’articles basés sur l’analyse des tendances et concurrents</h2>
              <p class="sec-text mt-30">
                Ce module innovant d’intelligence artificielle analyse en temps réel les tendances de votre secteur et les contenus de vos principaux concurrents. Il génère automatiquement des articles optimisés SEO, pertinents et actuels, vous permettant de publier régulièrement des contenus à forte valeur ajoutée sans effort manuel important.
              </p>
            </div>
            <h3>Solution</h3>
            <p class="sec-text mt-15">
              Une production continue d’articles optimisés, guidée par la donnée concurrentielle et les recherches des internautes, pour garder toujours une longueur d’avance.
            </p>
            <h4 class="mt-30">Résultats & Impact</h4>
            <div class="checklist mt-20 mb-30">
              <ul>
                <li><i class="fas fa-check"></i> Augmentation significative de la visibilité en ligne grâce à des publications régulières et ciblées</li>
                <li><i class="fas fa-check"></i> Renforcement de l’autorité et de la crédibilité de votre marque via un contenu expert et adapté</li>
                <li><i class="fas fa-check"></i> Gain de temps notable en automatisant la production d’articles tout en maintenant une qualité professionnelle</li>
                <li><i class="fas fa-check"></i> Amélioration du référencement naturel et de la présence sur les réseaux sociaux</li>
                <li><i class="fas fa-check"></i> Engagement accru de votre audience grâce à des contenus pertinents et actualisés</li>
              </ul>
            </div>
            <h4>Demande de démonstration personnalisée</h4>
            <p class="sec-text mt-15 mb-0">
              Pour découvrir concrètement comment ce module peut booster votre stratégie de contenu, répondre à vos besoins spécifiques et générer un impact mesurable, répondez simplement à ce message. Nous organiserons une démo personnalisée où vous pourrez voir la puissance de l’outil en action.
            </p>
          </div>
        </div>

        <!-- Pricing Area -->
        <div class="space-top">
          <div class="space">
            <div class="container">
              <div class="row gy-4 justify-content-center">
                <div class="col-lg-4 col-md-6">
                  <div class="pricing-card bg-smoke">
                    <h4 class="pricing-card_title">Pack Mensuel</h4>
                    <div class="price-card-wrap">
                      <h4 class="pricing-card_price"><span class="currency">€</span>—<span class="duration">/mo</span></h4>
                    </div>
                    <p>Accès complet au module avec une production automatique de X articles par mois, suivi et reporting.</p>
                    <div class="checklist">
                      <ul>
                        <li><i class="fas fa-check"></i> Génération d’articles optimisés SEO</li>
                        <li><i class="fas fa-check"></i> Analyse concurrentielle continue</li>
                        <li><i class="fas fa-check"></i> Suivi des performances et reporting</li>
                        <li><i class="fas fa-check"></i> Support prioritaire</li>
                        <li><i class="fas fa-check"></i> Ajustements éditoriaux mensuels</li>
                      </ul>
                    </div>
                    <a href="/contact" class="btn">
                      <span class="link-effect">
                        <span class="effect-1">CHOISIR CE PACK</span>
                        <span class="effect-1">CHOISIR CE PACK</span>
                      </span>
                    </a>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="pricing-card bg-smoke">
                    <h4 class="pricing-card_title">Pack Annuel</h4>
                    <div class="price-card-wrap">
                      <h4 class="pricing-card_price"><span class="currency">€</span>—<span class="duration">/an</span></h4>
                    </div>
                    <p>Tarification avantageuse avec engagement sur 12 mois, coaching dédié et mises à jour personnalisées.</p>
                    <div class="checklist">
                      <ul>
                        <li><i class="fas fa-check"></i> Coaching éditorial dédié</li>
                        <li><i class="fas fa-check"></i> Optimisations SEO trimestrielles</li>
                        <li><i class="fas fa-check"></i> Rapports d’impact détaillés</li>
                        <li><i class="fas fa-check"></i> Mises à jour adaptées à vos priorités</li>
                        <li><i class="fas fa-check"></i> Accès prioritaire aux nouveautés IA</li>
                      </ul>
                    </div>
                    <a href="/contact" class="btn">
                      <span class="link-effect">
                        <span class="effect-1">CHOISIR CE PACK</span>
                        <span class="effect-1">CHOISIR CE PACK</span>
                      </span>
                    </a>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="pricing-card bg-smoke">
                    <h4 class="pricing-card_title">Devis sur mesure</h4>
                    <div class="price-card-wrap">
                      <h4 class="pricing-card_price"><span class="currency">€</span>Custom</h4>
                    </div>
                    <p>N’hésitez pas à nous contacter pour un devis sur mesure et répondre au mieux à vos attentes.</p>
                    <div class="checklist">
                      <ul>
                        <li><i class="fas fa-check"></i> Volume d’articles adapté</li>
                        <li><i class="fas fa-check"></i> Ateliers stratégiques</li>
                        <li><i class="fas fa-check"></i> Gouvernance éditoriale dédiée</li>
                        <li><i class="fas fa-check"></i> Intégration à vos outils</li>
                        <li><i class="fas fa-check"></i> KPI et SLA personnalisés</li>
                      </ul>
                    </div>
                    <a href="/contact" class="btn">
                      <span class="link-effect">
                        <span class="effect-1">OBTENIR UNE OFFRE</span>
                        <span class="effect-1">OBTENIR UNE OFFRE</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row align-items-center justify-content-center g-4 mt-80">
          <div class="col-xl-5 order-xl-2">
            <div class="service-inner-thumb mb-40 wow img-custom-anim-top">
              <img class="w-100" :src="asset('/img/service/service-details1-3.png')" alt="Module de Réalité Augmentée" />
            </div>
          </div>
          <div class="col-xl-7 order-xl-1">
            <div class="title-area mb-35">
              <h2 class="sec-title">Module de Réalité Augmentée pour une expérience immersive sur e-shop</h2>
              <p class="sec-text mt-30">
                Ce module intègre la réalité augmentée (RA) directement dans votre boutique en ligne, offrant à vos clients une expérience immersive et interactive. Grâce à la RA, les utilisateurs peuvent visualiser vos produits en 3D dans leur environnement réel via smartphone ou tablette, avant de valider leur achat. Cette technologie innovante réduit les doutes et facilite la décision d’achat en apportant une expérience proche du réel, sans contrainte physique.
              </p>
            </div>
            <h3>Solution</h3>
            <p class="sec-text mt-15">
              Une expérience d’achat augmentée, fluide et rassurante, qui met vos produits en situation réelle et élimine les freins à la conversion.
            </p>
            <h4 class="mt-30">Résultats & Impact</h4>
            <div class="checklist mt-20 mb-30">
              <ul>
                <li><i class="fas fa-check"></i> Augmentation significative du taux de conversion grâce à une meilleure visualisation et compréhension des produits</li>
                <li><i class="fas fa-check"></i> Réduction des retours et insatisfactions clients en limitant les erreurs de choix</li>
                <li><i class="fas fa-check"></i> Amélioration de l’engagement utilisateur par une expérience ludique et différenciante</li>
                <li><i class="fas fa-check"></i> Valorisation de votre marque par l’usage d’une technologie innovante et à forte valeur ajoutée</li>
                <li><i class="fas fa-check"></i> Gain de confiance des consommateurs, accroissement des ventes et fidélisation renforcée</li>
              </ul>
            </div>
            <h4>Demande de démonstration personnalisée</h4>
            <p class="sec-text mt-15 mb-0">
              Découvrez comment cette solution de réalité augmentée peut transformer votre e-shop et offrir à vos clients une expérience d’achat unique. Contactez-nous pour une démonstration personnalisée, où vous pourrez tester le module en conditions réelles et évaluer ses bénéfices spécifiques à votre catalogue.
            </p>
          </div>
        </div>

        <!-- Pricing Area -->
        <div class="space-top">
          <div class="space">
            <div class="container">
              <div class="row gy-4 justify-content-center">
                <div class="col-lg-4 col-md-6">
                  <div class="pricing-card bg-smoke">
                    <h4 class="pricing-card_title">Pack Mensuel</h4>
                    <div class="price-card-wrap">
                      <h4 class="pricing-card_price"><span class="currency">€</span>—<span class="duration">/mo</span></h4>
                    </div>
                    <p>Intégration du module RA avec un nombre limité de produits en 3D, maintenance et support.</p>
                    <div class="checklist">
                      <ul>
                        <li><i class="fas fa-check"></i> Catalogue limité en 3D</li>
                        <li><i class="fas fa-check"></i> Maintenance continue</li>
                        <li><i class="fas fa-check"></i> Support dédié</li>
                        <li><i class="fas fa-check"></i> Suivi des KPI d’usage</li>
                        <li><i class="fas fa-check"></i> Optimisations visuelles mensuelles</li>
                      </ul>
                    </div>
                    <a href="/contact" class="btn">
                      <span class="link-effect">
                        <span class="effect-1">CHOISIR CE PACK</span>
                        <span class="effect-1">CHOISIR CE PACK</span>
                      </span>
                    </a>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="pricing-card bg-smoke">
                    <h4 class="pricing-card_title">Pack Annuel</h4>
                    <div class="price-card-wrap">
                      <h4 class="pricing-card_price"><span class="currency">€</span>—<span class="duration">/an</span></h4>
                    </div>
                    <p>Offre complète avec intégration étendue, création de modèles 3D, mises à jour régulières et accompagnement premium.</p>
                    <div class="checklist">
                      <ul>
                        <li><i class="fas fa-check"></i> Bibliothèque 3D élargie</li>
                        <li><i class="fas fa-check"></i> Optimisations UX trimestrielles</li>
                        <li><i class="fas fa-check"></i> Analyses d’engagement approfondies</li>
                        <li><i class="fas fa-check"></i> Accompagnement premium</li>
                        <li><i class="fas fa-check"></i> Mises à jour fonctionnelles</li>
                      </ul>
                    </div>
                    <a href="/contact" class="btn">
                      <span class="link-effect">
                        <span class="effect-1">CHOISIR CE PACK</span>
                        <span class="effect-1">CHOISIR CE PACK</span>
                      </span>
                    </a>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="pricing-card bg-smoke">
                    <h4 class="pricing-card_title">Devis sur mesure</h4>
                    <div class="price-card-wrap">
                      <h4 class="pricing-card_price"><span class="currency">€</span>Custom</h4>
                    </div>
                    <p>Pour plus d’informations ou un devis sur mesure, notre équipe reste à votre disposition.</p>
                    <div class="checklist">
                      <ul>
                        <li><i class="fas fa-check"></i> Intégration à votre stack e-commerce</li>
                        <li><i class="fas fa-check"></i> Création de modèles 3D sur demande</li>
                        <li><i class="fas fa-check"></i> SLA et support adaptés</li>
                        <li><i class="fas fa-check"></i> KPIs personnalisés</li>
                        <li><i class="fas fa-check"></i> Formations équipes internes</li>
                      </ul>
                    </div>
                    <a href="/contact" class="btn">
                      <span class="link-effect">
                        <span class="effect-1">OBTENIR UNE OFFRE</span>
                        <span class="effect-1">OBTENIR UNE OFFRE</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { usePageMetadata } from '@/composables/usePageMetadata'
import { assetUrl } from '@/utils/assets'

const asset = assetUrl

usePageMetadata('Modules IA & RA')

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
})
</script>