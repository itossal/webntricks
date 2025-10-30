<!-- Auto-generated from error.html -->
<template>
  <div class="page-content">
<!--==============================
    Breadcumb
    ============================== -->
    <div class="error-wrapper text-center">
        <div class="container">
            <img class="mb-50" :src="asset('/assets/img/normal/404.png')" alt="error">
            <h2>Look Like You’re Lost</h2>
            <p class="sec-text mb-30">The link you followed probably broken or the page has been removed</p>
            <a href="index.html" class="link-btn">
                <span class="link-effect">
                    <span class="effect-1">back to home</span>
                    <span class="effect-1">back to home</span>
                </span>
                <img :src="asset('/assets/img/icon/arrow-left-top.svg')" alt="icon">
            </a>
        </div>
    </div>

    <!--********************************
			Code End  Here
	******************************** -->

    <!-- Scroll To Top -->
    


    <!-- Jquery -->
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    

    <!-- Main Js File -->
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { usePageMetadata } from '@/composables/usePageMetadata'

const asset = (path) => path

usePageMetadata("Error")

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
})
</script>
