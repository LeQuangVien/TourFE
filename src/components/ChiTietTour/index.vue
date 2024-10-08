<template>
    <header class="site-header section-padding d-flex justify-content-center align-items-center"
        style="margin-top: -8%;">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 col-12">
                    <h1>
                        <span class="d-block text-danger" style="font-size: 100px; margin-left: 50px;">We provide
                            you</span>
                        <span class="d-block text-dark" style="margin-left: 150px;">Fashionable Stuffs</span>
                    </h1>
                </div>
            </div>
        </div>
    </header>

    <section class="product-detail section-padding">
        <div class="container mt-5">
            <div class="row">
                <div class="col-lg-6 col-12">
                    <div class="product-thumb">
                        <img style="width: 533px;" v-bind:src="product_detail.hinh_anh" class="img-fluid product-image"
                            alt="">
                    </div>
                    <hr>
                    <div>
                        <img class="img-fluid product-image" v-bind:src="product_detail.hinh_anh_2" alt="">
                    </div>
                </div>
                <div class="col-lg-6 col-12">
                    <div class="product-info d-flex">
                        <div>
                            <h2 class="product-title mb-0">{{ product_detail.ten_tour }}</h2>

                            <p class="product-p"></p>
                            <small style="font-size: 20px; color: red;" class="product-price ms-auto mt-auto mb-5">{{
                                formatToUSD(product_detail.gia_khuyen_mai) }}$</small>
                        </div>
                    </div>

                    <div class="product-description">
                        <strong class="d-block mb-2">Description</strong>
                        <p class="lead mb-5">{{ product_detail.mo_ta }}</p>
                    </div>
                    <div>
                        <p style="margin-bottom: 40px; margin-top: -40px;"><i
                                class="fa fa-map-marker-alt text-primary me-2"></i> {{ product_detail.dia_diem_chinh }}
                        </p>
                        <p style="margin-top: -35px;">Ngày Khởi Hành: <b> {{ product_detail.ngay_khoi_hanh }}</b>
                        </p>
                    </div>
                    <div class="product-cart-thumb row">
                        <div class="col-lg-6 col-12 mt-4 mt-lg-0">
                            <template v-if="is_login == true">
                                <button v-on:click="CreateShoppingCart()" type="button"
                                    class="btn btn-danger custom-btn cart-btn" data-bs-toggle="modal"
                                    data-bs-target="#cart-modal">Đặt Tour</button>
                            </template>
                            <template v-else>
                                <router-link to="/login">
                                    <button type="button" class="btn btn-danger custom-btn cart-btn"
                                        data-bs-toggle="modal" data-bs-target="#cart-modal">Đặt Tour</button>
                                </router-link>
                            </template>
                        </div>
                    </div>
                    <hr>
                    <div class="product-description">
                        <strong class="d-block mb-2">Detailed Description</strong>
                        <p class="lead mb-2">+ {{ product_detail.description_1 }}</p>
                        <p class="lead mb-2">+ {{ product_detail.description_2 }}</p>
                        <p class="lead mb-2">+ {{ product_detail.description_3 }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>


</template>
<script>
import baseRequest from '../../core/baseRequest';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
export default {
    props: ['id_san_pham'],
    data() {
        return {
            id_san_pham: null,
            product_detail: {},
            is_login: false,

        }
    },
    mounted() {
        this.id_san_pham = this.$route.params.id_san_pham;
        this.ProductDetail();
        this.checkLogin();
    },
    beforeRouteUpdate(to, from, next) {
        this.id_san_pham = to.params.id_san_pham;
        this.ProductDetail();
        next();
    },
    methods: {
        ProductDetail() {
            baseRequest
                .get('trang-chu/chi-tiet-dia-diem/select/' + this.id_san_pham)
                .then((res) => {
                    this.product_detail = res.data.data;
                })
        },
        formatToUSD(number) {
            number = parseInt(number);
            return number.toLocaleString('vi', { style: 'currency', currency: 'VND' });
        },
        checkLogin() {
            baseRequest
                .post('khach-hang/check-login')
                .then((res) => {
                    if (res.data.status) {
                        this.is_login = true;
                    }
                })
        },
        CreateShoppingCart() {
            var payload = {
                'id_san_pham': this.id_san_pham
            };
            baseRequest
                .post('chi-tiet-don-hang/them-vao-gio-hang', payload)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success("Thông Báo <br>" + res.data.message);
                    } else {
                        toaster.error("Thông Báo <br>" + res.data.message);
                    }
                })
        },
    }
}
</script>
<style></style>