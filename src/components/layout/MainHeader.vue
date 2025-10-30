<template>
  <header class="nav-header header-layout2 style2">
    <div class="sticky-wrapper">
      <div class="menu-area">
        <div class="container-fluid">
          <div class="row align-items-center justify-content-between">
            <div class="col-auto">
              <div class="header-logo">
                <RouterLink to="/"><img :src="asset('/assets/img/logo.svg')" alt="logo" /></RouterLink>
              </div>
            </div>
            <div class="col-auto m-lg-auto">
              <nav class="main-menu d-none d-lg-inline-block">
                <ul>
                  <li class="active menu-item-has-children mega-menu-wrap">
                    <a href="#">
                      <span class="link-effect">
                        <span class="effect-1">HOME</span>
                        <span class="effect-1">HOME</span>
                      </span>
                    </a>
                    <div class="menu-pages bg-title">
                      <div class="row">
                        <div class="col-lg-3">
                          <a class="single-menu-page" href="index.html">
                            Digital Agency
                            <span class="menu-category">Creative, Design</span>
                          </a>
                          <a class="single-menu-page" href="home-2.html">
                            Creative Agency
                            <span class="menu-category">Digital, Studio</span>
                          </a>
                          <a class="single-menu-page" href="home-3.html">
                            Design Studio
                            <span class="menu-category">Design, Agency</span>
                          </a>
                          <a class="single-menu-page" href="home-4.html">
                            Digital Marketing
                            <span class="menu-category">Marketing, Corporate</span>
                          </a>
                          <a class="single-menu-page" href="home-5.html">
                            Modern Agency
                            <span class="menu-category">Agency, Corporate</span>
                          </a>
                          <a class="single-menu-page" href="home-6.html">
                            Creative Studio
                            <span class="menu-category">Digital, Creative</span>
                          </a>
                        </div>
                        <div class="col-lg-3">
                          <a class="single-menu-page" href="home-7.html">
                            Startup Agency
                            <span class="menu-category">Corporate, Startup</span>
                          </a>
                          <a class="single-menu-page" href="home-8.html">
                            Personal Portfolio
                            <span class="menu-category">Project, Showcase</span>
                          </a>
                          <a class="single-menu-page" href="home-9.html">
                            Portfolio Showcase <span class="menu-tag">New</span>
                            <span class="menu-category">Creative, Portfolio</span>
                          </a>
                          <a class="single-menu-page" href="home-10.html">
                            Interactive Link <span class="menu-tag">New</span>
                            <span class="menu-category">Project, Design</span>
                          </a>
                          <a class="single-menu-page" href="home-11.html">
                            Showcase Carousal  <span class="menu-tag">New</span>
                            <span class="menu-category">Portfolio, Work</span>
                          </a>
                          <a class="single-menu-page" href="home-12.html">
                            Full Screen Slideshow  <span class="menu-tag">New</span>
                            <span class="menu-category">Slideshow, Project</span>
                          </a>
                        </div>
                        <div class="col-lg-3">
                          <a class="single-menu-page active" href="home-13.html">
                            Branding Agency <span class="menu-tag">New</span>
                            <span class="menu-category">Branding, Corporate</span>
                          </a>
                          <a class="single-menu-page" href="home-14.html">
                            Marketing Agency <span class="menu-tag">New</span>
                            <span class="menu-category">Strategy, Marketing</span>
                          </a>
                          <a class="single-menu-page" href="home-15.html">
                            Web Studio <span class="menu-tag">New</span>
                            <span class="menu-category">Development, Website</span>
                          </a>
                          <a class="single-menu-page" href="home-16.html">
                            Agency Classic <span class="menu-tag">New</span>
                            <span class="menu-category">Digital, Startup</span>
                          </a>
                          <a class="single-menu-page" href="home-17.html">
                            AI Startup <span class="menu-tag">New</span>
                            <span class="menu-category">Solutions, Intelligence</span>
                          </a>
                          <a class="single-menu-page" href="home-18.html">
                            Shop Home <span class="menu-tag">New</span>
                            <span class="menu-category">Shop, Store</span>
                          </a>
                        </div>
                        <div class="col-lg-3">
                          <div class="menu-banner-wrap">
                            <img :src="asset('/assets/img/normal/menu-banner.jpg')" alt="img" />
                            <div class="menu-banner-content-wrap">
                              <h4 class="text-white">Start Your Creative Website Journey Today</h4>
                              <a
                                href="https://themeforest.net/item/frisk-creative-agency-portfolio-template/49695408?s_rank=10"
                                class="btn bg-theme text-title"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <span class="link-effect">
                                  <span class="effect-1">Buy now</span>
                                  <span class="effect-1">Buy now</span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="menu-item-has-children">
                    <a href="#">
                      <span class="link-effect">
                        <span class="effect-1">PAGES</span>
                        <span class="effect-1">PAGES</span>
                      </span>
                    </a>
                    <ul class="sub-menu">
                      <li><a href="about.html">About Page</a></li>
                      <li class="menu-item-has-children"><a href="service.html">Service Page</a>
                          <ul class="sub-menu">
                              <li><a href="service.html">Service Version 1</a></li>
                              <li><a href="service-2.html">Service Version 2</a></li>
                              <li><a href="service-3.html">Service Version 3</a></li>
                              <li><a href="service-details.html">Service Details Page</a></li>
                          </ul>
                      </li>
                      <li>
                        <a href="team.html">Team Page</a>
                      </li>
                      <li><a href="team-details.html">Team Details Page</a></li>
                      <li><a href="pricing.html">Pricing Page</a></li>
                      <li class="menu-item-has-children"><a href="shop.html">Shop</a>
                          <ul class="sub-menu">
                              <li><a href="shop.html">Shop Page</a></li>
                              <li><a href="shop-details.html">Shop Details</a></li>
                              <li><a href="cart.html">Cart Page</a></li>
                              <li><a href="checkout.html">Checkout</a></li>
                          </ul>
                      </li>
                      <li><a href="faq.html">FAQ Page</a></li>
                      <li><a href="error.html">Error Page</a></li>
                    </ul>
                  </li>
                  <li class="menu-item-has-children">
                    <a href="#">
                      <span class="link-effect">
                        <span class="effect-1">PORTFOLIO</span>
                        <span class="effect-1">PORTFOLIO</span>
                      </span>
                    </a>
                    <ul class="sub-menu">
                      <li><a href="project.html">Portfolio Masonary</a></li>
                      <li><a href="project-2.html">Portfolio Pinterest</a></li>
                      <li><a href="project-3.html">Portfolio Gallery</a></li>
                      <li><a href="project-4.html">Portfolio Full Width</a></li>
                      <li><a href="project-5.html">Portfolio Slider</a></li>
                      <li><a href="project-6.html">Portfolio Interactive</a></li>
                      <li><a href="project-details.html">Portfolio Details</a></li>
                    </ul>
                  </li>
                  <li class="menu-item-has-children">
                    <a href="#">
                      <span class="link-effect">
                        <span class="effect-1">BLOG</span>
                        <span class="effect-1">BLOG</span>
                      </span>
                    </a>
                    <ul class="sub-menu">
                      <li><a href="blog.html">Blog Standard</a></li>
                      <li><a href="blog-2.html">Blog 2 Column</a></li>
                      <li><a href="blog-details.html">Blog Details</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">
                      <span class="link-effect">
                        <span class="effect-1">CONTACT</span>
                        <span class="effect-1">CONTACT</span>
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
              <div class="navbar-right d-inline-flex d-lg-none">
                <button type="button" class="menu-toggle sidebar-btn" @click="$emit('open-mobile')">
                  <span class="line"></span>
                  <span class="line"></span>
                  <span class="line"></span>
                </button>
              </div>
            </div>
            <div class="col-auto d-none d-lg-block">
              <div class="header-button ms-0">
                <button type="button" class="search-btn searchBoxToggler" @click="$emit('toggle-search')">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" stroke-width="2" stroke-linecap="square"/>
                    <path d="M19.0004 19.0004L14.6504 14.6504" stroke="currentColor" stroke-width="2" stroke-linecap="square"/>
                  </svg>
                  <span class="link-effect">
                    <span class="effect-1">SEARCH</span>
                    <span class="effect-1">SEARCH</span>
                  </span>
                </button>
                <button type="button" class="menu-toggle sidebar-btn d-none d-lg-inline-flex" @click="$emit('open-side')">
                  <span class="line"></span>
                  <span class="line"></span>
                  <span class="line"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { assetUrl } from '@/utils/assets'

defineEmits(['toggle-search', 'open-mobile', 'open-side'])

const asset = assetUrl
</script>
