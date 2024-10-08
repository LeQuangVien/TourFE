<template>
    <div class='bgr2'>
        <section class="sign-in-form section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 mx-auto col-12">

                        <h1 class="hero-title text-center mb-5 mt-5" style='color: white;'>Sign Up</h1>

                        <div class="row">
                            <div class="col-lg-8 col-11 mx-auto">

                                <div class="form-floating">
                                    <input v-model="dang_ky.ho_va_ten" type="text" class="form-control"
                                        placeholder="name">

                                    <label for="text">Your Name</label>
                                </div>

                                <div class="form-floating my-4">
                                    <input v-on:change="checkEmail()" v-model="dang_ky.email" type="email"
                                        class="form-control" placeholder="email">

                                    <label for="email">Email</label>

                                </div>
                                <div class="form-floating my-4">
                                    <input v-model="dang_ky.so_dien_thoai" type="number" class="form-control"
                                        placeholder="phone">

                                    <label for="Phone">Phone</label>

                                </div>
                                <div class="form-floating">
                                    <input v-model="dang_ky.password" type="password" class="form-control"
                                        placeholder="Password">

                                    <label for="confirm_password">Password</label>
                                </div>

                                <button v-if="is_view == 1" v-on:click="DangKy()" type="button"
                                    class="btn btn-danger custom-btn form-control mt-4 mb-3">
                                    Create account
                                </button>
                                <button disabled v-else v-on:click="DangKy()" type="button"
                                    class="btn btn-danger custom-btn form-control mt-4 mb-3">
                                    Create account
                                </button>


                                <p class="text-center">Already have an account? Please
                                    <router-link to="/login">
                                        <a href="/login">Sign
                                            In</a>
                                    </router-link>
                                </p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import baseRequest from '../../core/baseRequest';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
export default {
    data() {
        return {
            dang_ky: {},
            is_view: 0,
        }
    },
    mounted() {
        this.DangKy();
    },
    methods: {
        DangKy() {
            baseRequest
                .post('khach-hang/dang-ky', this.dang_ky)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.dang_ky = {};
                        this.$router.push('/login');
                    } else {
                        toaster.error('Thông báo<br>' + res.data.message);
                    }
                })
        },
        checkEmail() {
            baseRequest
                .post('khach-hang/check-email', this.dang_ky)
                .then((res) => {
                    if (res.data.status == true) {
                        this.is_view = 0;
                        toaster.error("Thông Báo <br>" + res.data.message);
                    } else {
                        this.is_view = 1;
                        toaster.success("Thông báo<br>" + res.data.message);
                    }
                })
        }
    },
}
</script>
<style>
.bgr2 {
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.5) 50%), url("https://abvietnamtravel.com/img/logo/75B82SV64B_408255330_739691568182256_1104935954509976190_n.jpg");
    width: 100%;
    height: 800px;
    background-size: cover;
    /* Điều chỉnh kích thước hình ảnh để che phủ toàn bộ phần tử */
    background-position: center;
}
</style>