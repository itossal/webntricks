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
                    <li><RouterLink to="/">Home</RouterLink></li>
                    <li><RouterLink to="/project">Porfolio</RouterLink></li>
                    <li>{{ project?.title }}</li>
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
                <div class="col-xl-12" v-for="(image, index) in galleryImages" :key="image">
                    <div class="project-inner-thumb mb-80 wow img-custom-anim-top">
                        <img class="w-100" :src="asset(image)" alt="portfolio image" :loading="index ? 'lazy' : 'eager'">
                    </div>
                </div>
            </div>
            <div class="row justify-content-between flex-row-reverse">
                <div class="col-xl-3 col-lg-4">
                    <div class="project-details-info mb-lg-0 mb-40">
                        <ul class="list-wrap">
                            <li><span>Category:</span>{{ projectMeta.category }}</li>
                            <li><span>Software:</span>{{ projectMeta.software }}</li>
                            <li><span>Service:</span>{{ projectMeta.service }}</li>
                            <li><span>Client:</span>{{ projectMeta.client }}</li>
                            <li><span>Date:</span>{{ projectMeta.date }}</li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="title-area mb-35">
                        <h2 class="sec-title">{{ project?.title }}</h2>
                        <p class="sec-text mt-30">{{ project?.description }}</p>
                        <p class="sec-text mt-30">{{ project?.challenge }}</p>
                    </div>
                    <h3>Challenge & Solution</h3>
                    <p class="sec-text mb-n1">{{ project?.solution }}</p>
                    <h3 class="mt-35">Final Result</h3>
                    <p class="sec-text mb-n1">{{ project?.impact || project?.description }}</p>
                </div>
                <div class="col-lg-12">
                    <div class="inner__page-nav space-top mt-n1 mb-n1">
                        <RouterLink v-if="previousProject" :to="`/projects/${previousProject.slug}`" class="nav-btn">
                            <i class="fa fa-arrow-left"></i> <span><span class="link-effect">
                                <span class="effect-1">Previous Project</span>
                                <span class="effect-1">Previous Project</span>
                            </span></span>
                        </RouterLink>
                        <RouterLink v-if="nextProject" :to="`/projects/${nextProject.slug}`" class="nav-btn"><span><span class="link-effect">
                            <span class="effect-1">Next Project</span>
                            <span class="effect-1">Next Project</span>
                        </span></span>
                            <i class="fa fa-arrow-right"></i>
                        </RouterLink>
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
import { computed, onMounted, watch } from 'vue'
import { usePageMetadata } from '@/composables/usePageMetadata'
import { assetUrl } from '@/utils/assets'
import { useRoute } from '@/router'
import { projects } from '@/utils/projects'

const asset = assetUrl
const route = useRoute()

const project = computed(() => projects.find((item) => item.slug === route.params.slug) || projects[0])
const galleryImages = computed(() => project.value?.gallery ?? [])
const projectMeta = computed(() => project.value?.meta ?? {})
const projectIndex = computed(() => projects.findIndex((item) => item.slug === project.value?.slug))
const previousProject = computed(() => (projectIndex.value > 0 ? projects[projectIndex.value - 1] : null))
const nextProject = computed(() =>
  projectIndex.value >= 0 && projectIndex.value < projects.length - 1 ? projects[projectIndex.value + 1] : null
)

usePageMetadata('Project Details')

watch(
  project,
  (value) => {
    if (value) {
      route.meta.title = value.title
    }
  },
  { immediate: true }
)

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
})
</script>
