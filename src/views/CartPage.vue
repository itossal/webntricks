<!-- Auto-generated from cart.html -->
<template>
  <div class="page-content">
<!--==============================
    Breadcumb
    ============================== -->
    <div class="breadcumb-wrapper " :data-bg-src="asset('/assets/img/bg/breadcumb-bg1-9.jpg')">
        <div class="container">
            <div class="breadcumb-content">
                <h1 class="breadcumb-title">My Cart</h1>
            </div>
        </div>
    </div>

    <!-- cart-area -->
    <div class="cart-wrapper space-top space-extra-bottom">
        <div class="container">
            <form action="#" class="woocommerce-cart-form">
                <table class="cart_table">
                    <thead>
                        <tr>
                            <th colspan="3" class="cart-col-productname">PRODUCT</th>
                            <th class="cart-col-price">PRICE</th>
                            <th class="cart-col-quantity">QUANTITY</th>
                            <th class="cart-col-total">SUBTOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="cart_item">
                            <td data-title="Remove">
                                <a href="#" class="remove"><i class="fas fa-times"></i></a>
                            </td>
                            <td data-title="Product">
                                <a class="cart-productimage" href="shop-details.html"><img width="100" height="108" :src="asset('/assets/img/product/product_thumb_1_1.jpg')" alt="Image"></a>
                            </td>
                            <td data-title="Name">
                                <a class="cart-productname" href="shop-details.html">Ripple Crewneck</a>
                            </td>
                            <td data-title="Price">
                                <span class="amount"><bdi><span>€</span>160.90</bdi></span>
                            </td>
                            <td data-title="Quantity">
                                <div class="quantity">
                                    <span class="title">Quantity</span>
                                    <button class="quantity-minus qty-btn"><i class="fas fa-minus"></i></button>
                                    <input type="number" class="qty-input" step="1" min="1" max="100" name="quantity" value="1" title="Qty">
                                    <button class="quantity-plus qty-btn"><i class="fas fa-plus"></i></button>
                                </div>
                            </td>
                            <td data-title="Total">
                                <span class="amount"><bdi><span>€</span>160.90</bdi></span>
                            </td>

                        </tr>
                        <tr class="cart_item">
                            <td data-title="Remove">
                                <a href="#" class="remove"><i class="fas fa-times"></i></a>
                            </td>
                            <td data-title="Product">
                                <a class="cart-productimage" href="shop-details.html"><img width="100" height="108" :src="asset('/assets/img/product/product_thumb_1_2.jpg')" alt="Image"></a>
                            </td>
                            <td data-title="Name">
                                <a class="cart-productname" href="shop-details.html">Herman Miller</a>
                            </td>
                            <td data-title="Price">
                                <span class="amount"><bdi><span>€</span>44.50</bdi></span>
                            </td>
                            <td data-title="Quantity">
                                <div class="quantity">
                                    <span class="title">Quantity</span>
                                    <button class="quantity-minus qty-btn"><i class="fas fa-minus"></i></button>
                                    <input type="number" class="qty-input" step="1" min="1" max="100" name="quantity" value="1" title="Qty">
                                    <button class="quantity-plus qty-btn"><i class="fas fa-plus"></i></button>
                                </div>
                            </td>
                            <td data-title="Total">
                                <span class="amount"><bdi><span>€</span>44.50</bdi></span>
                            </td>
                        </tr>


                    </tbody>
                </table>
            </form>
            <div class="row gy-30 justify-content-between">
                <div class="col-xl-4 col-lg-6">
                    <div class="cart-coupon">
                        <input type="text" class="form-control" placeholder="Coupon Code...">
                        <button type="submit" class="btn">
                            <span class="link-effect">
                                <span class="effect-1">APPLY</span>
                                <span class="effect-1">APPLY</span>
                            </span>
                        </button>
                    </div>
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn">
                        <span class="link-effect">
                            <span class="effect-1">UPDATE CART</span>
                            <span class="effect-1">UPDATE CART</span>
                        </span>
                    </button>
                </div>
            </div>
            <div class="row justify-content-end">
                <div class="col-12">
                    <h3 class="fw-semibold summary-title mt-90 mb-2">Cart Totals</h3>
                    <table class="cart_totals">
                        <tbody>
                            <tr>
                                <td>SUBTOTAL</td>
                                <td data-title="Cart Subtotal">
                                    <span class="amount"><bdi><span>€</span>205.40</bdi></span>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr class="order-total">
                                <td>TOTAL</td>
                                <td data-title="Total">
                                    <strong><span class="amount"><bdi><span>€</span>205.40</bdi></span></strong>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                    <div class="wc-proceed-to-checkout mb-30">
                        <a href="checkout.html" class="btn">
                            <span class="link-effect">
                                <span class="effect-1">PROCEED TO CHECKOUT</span>
                                <span class="effect-1">PROCEED TO CHECKOUT</span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- cart-area-end -->

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

const asset = (path) => path

usePageMetadata("Cart")

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
})
</script>
