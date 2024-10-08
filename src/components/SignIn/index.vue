<template>
    <div class='bgr'>
        <section class="sign-in-form section-padding">
            <div class="container">
                <div class="row">

                    <div class="col-lg-8 mx-auto col-12">

                        <h1 class="hero-title text-center mb-5 mt-5" style='color: black;'>Sign In</h1>

                        <div class="row">
                            <div class="col-lg-8 col-11 mx-auto">

                                <div class="form-floating mb-4 p-0">
                                    <input v-model="dang_nhap.email" type="email" class="form-control"
                                        placeholder="Email address">

                                    <label for="email">Email address</label>
                                </div>

                                <div class="form-floating p-0">
                                    <input v-model="dang_nhap.password" type="password" class="form-control"
                                        placeholder="Password">

                                    <label for="password">Password</label>
                                </div>

                                <button v-on:click="DangNhap()" type="button"
                                    class="btn btn-danger custom-btn form-control mt-4 ">
                                    Sign in
                                </button>
                                <div class="social-login d-flex flex-column w-50 m-auto mt-4">
                                    <a href="#" class="btn btn-danger custom-btn social-btn mb-4">
                                        <i class="bi bi-google me-3"></i>
                                        Continue with Google
                                    </a>
                                    <a href="#" class="btn btn-primary custom-btn social-btn">
                                        <i class="bi bi-facebook me-3"></i>
                                        Continue with Facebook
                                    </a>
                                </div>
                                <div class="container overflow-hidden text-center">
                                    <div class="row gy-5">
                                        <div class="col-6">
                                            <p class="text-center" style="color: yellow; font-size: 20px;">Don’t have an
                                                account?
                                                <router-link to="/register">
                                                    <a href="/register" style="color: red">Create One</a>
                                                </router-link>
                                            </p>
                                        </div>
                                        <div class="col-6">
                                            <p class="text-center" style="color: yellow; font-size: 20px;">Return to the
                                                <br>
                                                <router-link to="/">
                                                    <a href="sign-up.html" style="color:brown">Homepage.</a>
                                                </router-link>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    </div>
</template>
<script>
import { createToaster } from "@meforma/vue-toaster";

import baseRequest from '../../core/baseRequest';

const toaster = createToaster({ position: "top-right" });
export default {
    data() {
        return {
            dang_nhap: {},
        }
    },
    methods: {
        DangNhap() {
            baseRequest
                .post('khach-hang/dang-nhap', this.dang_nhap)
                .then((res) => {
                    if (res.data.status == 1) {
                        toaster.success("Thông Báo <br>" + res.data.message);
                        localStorage.setItem('chia_khoa_16', res.data.chia_khoa);
                        localStorage.setItem('ten_kh', res.data.ten_kh);
                        this.$router.push('/');
                    } else if (res.data.status == 2) {
                        toaster.warning("Thông Báo <br>" + res.data.message);
                    } else {
                        toaster.error("Thông Báo <br>" + res.data.message);
                    }
                })
        }
    },
}
</script>
<style>
.bgr {
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.5) 50%), url("https://abvietnamtravel.com/img/logo/75B82SV64B_408255330_739691568182256_1104935954509976190_n.jpg");
    width: 100%;
    height: 700px;
    background-size: cover;
    background-position: center;
}
</style>