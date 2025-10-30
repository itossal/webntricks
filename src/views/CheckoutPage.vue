<!-- Auto-generated from checkout.html -->
<template>
  <div class="page-content">
<!--==============================
    Breadcumb
    ============================== -->
    <div class="breadcumb-wrapper " :data-bg-src="asset('/assets/img/bg/breadcumb-bg1-9.jpg')">
        <div class="container">
            <div class="breadcumb-content">
                <h1 class="breadcumb-title">Checkout</h1>
            </div>
        </div>
    </div>

    <!-- cart-area -->
    <div class="checkout-wrapper space-top space-extra-bottom">
        <div class="container">
            <form action="#" class="woocommerce-checkout">
                <div class="row gx-60 gy-60">
                    <div class="col-lg-6">
                        <h2 class="h3 fw-semibold mt-n2 mb-40">Billing Details</h2>
                        <div class="row">
                            <div class="col-md-12 form-group">
                                <label>FIRST NAME *</label>
                                <input type="text" class="form-control" placeholder="">
                            </div>
                            <div class="col-md-12 form-group">
                                <label>LAST NAME *</label>
                                <input type="text" class="form-control" placeholder="">
                            </div>
                            <div class="col-12 form-group">
                                <label>COMPANY NAME (OPTIONAL)</label>
                                <input type="text" class="form-control" placeholder="">
                            </div>
                            <div class="col-12 form-group">
                                <label>COUNTRY / REGION *</label>
                                <select class="form-select">
                                    <option>United State (US)</option>
                                    <option>United Kingdom (UK)</option>
                                    <option>Equatorial Guinea (GQ)</option>
                                    <option>Australia (AU)</option>
                                    <option>Germany (DE)</option>
                                </select>
                            </div>
                            <div class="col-12 form-group">
                                <label>STREET ADDRESS *</label>
                                <input type="text" class="form-control" placeholder="House number and street name">
                                <input type="text" class="form-control" placeholder="Apartment, suite, unit, etc. (optional)">
                            </div>
                            <div class="col-12 form-group">
                                <label>TOWN / CITY *</label>
                                <select class="form-select">
                                    <option>California</option>
                                    <option>United Kingdom</option>
                                    <option>Equatorial Guinea</option>
                                    <option>Australia</option>
                                    <option>Germany</option>
                                </select>
                            </div>
                            <div class="col-12 form-group">
                                <label>ZIP CODE *</label>
                                <input type="text" class="form-control" placeholder="">
                            </div>
                            <div class="col-12 form-group">
                                <label>PHONE *</label>
                                <input type="text" class="form-control" placeholder="">
                            </div>
                            <div class="col-12 form-group">
                                <label>EMAIL ADDRESS *</label>
                                <input type="text" class="form-control" placeholder="">
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-6">
                        <h2 class="h3 fw-semibold mt-n2 mb-40">Additional information</h2>
                        <div class="shipping_address">
                            <div class="row">
                                <div class="col-12 form-group">
                                    <label class="mb-3">ORDER NOTES (OPTIONAL)</label>
                                    <textarea name="message" placeholder="Notes about your order, e.g. special notes for delivery." class="form-control"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <h3 class="fw-semibold mt-60 mb-35">Your Order</h3>
            <form action="#" class="woocommerce-cart-form">
                <table class="cart_table mb-20">
                    <thead>
                        <tr>
                            <th class="cart-col-productname">PRODUCT</th>
                            <th class="cart-col-total">SUBTOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="cart_item">
                            <td data-title="Name">
                                <a class="cart-productname" href="shop-details.html">Ripple Crewneck <span>x1</span></a>
                            </td>
                            <td data-title="Price">
                                <span class="amount"><bdi><span>€</span>160.90</bdi></span>
                            </td>
                        </tr>
                        <tr class="cart_item">
                            <td data-title="Name">
                                <a class="cart-productname" href="shop-details.html">Herman Miller <span>x1</span></a>
                            </td>
                            <td data-title="Price">
                                <span class="amount"><bdi><span>€</span>44.50</bdi></span>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot class="checkout-ordertable">
                        <tr class="cart-subtotal">
                            <th>SUBTOTAL</th>
                            <td data-title="Subtotal"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">€</span>205.40</bdi></span></td>
                        </tr>

                        <tr class="order-total">
                            <th>TOTAL</th>
                            <td data-title="Total"><strong><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">€</span>205.40</bdi></span></strong>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </form>
            <div class="mt-lg-3 mb-30">
                <div class="woocommerce-checkout-payment">
                    <ul class="wc_payment_methods payment_methods methods">
                        <li class="wc_payment_method payment_method_bacs">
                            <input id="payment_method_bacs" type="radio" class="input-radio" name="payment_method" value="bacs">
                            <label for="payment_method_bacs">Direct bank transfer</label>
                            <div class="payment_box payment_method_bacs">
                                <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                </p>
                            </div>
                        </li>
                        <li class="wc_payment_method payment_method_cheque">
                            <input id="payment_method_cheque" type="radio" class="input-radio" name="payment_method" value="cheque" checked="checked">
                            <label for="payment_method_cheque">Cash on delivery</label>
                            <div class="payment_box payment_method_cheque">
                                <h5>Pay with cash upon delivery.</h5>
                                <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
                            </div>
                        </li>
                        <li class="wc_payment_method payment_method_cod">
                            <input id="payment_method_cod" type="radio" class="input-radio" name="payment_method">
                            <label for="payment_method_cod">Credit Cart</label>
                            <div class="payment_box payment_method_cod">
                                <p>Pay with credit cart.</p>
                            </div>
                        </li>
                        <li class="wc_payment_method payment_method_paypal">
                            <input id="payment_method_paypal" type="radio" class="input-radio" name="payment_method" value="paypal">
                            <label for="payment_method_paypal">Paypal</label>
                            <div class="payment_box payment_method_paypal">
                                <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
                            </div>
                        </li>
                    </ul>
                    <div class="form-row place-order">
                        <button type="submit" class="btn">
                            <span class="link-effect">
                                <span class="effect-1">PLACE ORDER</span>
                                <span class="effect-1">PLACE ORDER</span>
                            </span>
                        </button>
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
import { assetUrl } from '@/utils/assets'

const asset = assetUrl

usePageMetadata("Checkout")

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
})
</script>
