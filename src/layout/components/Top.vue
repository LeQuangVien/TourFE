<template>
    <div class="container-fluid nav-bar bg-transparent">
        <nav class="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
            <router-link to="/">
                <a href="/" class="navbar-brand d-flex align-items-center text-center">
                    <div class="icon p-2 me-2"><img class="img-fluid" src="../../assets/images/imgdowload/icon-deal.png"
                            alt="website template image" style="width:30px;height:30px;"></div>
                    <h1 class="m-0 " style="color: rgb(0, 185, 142);">Thành Bún</h1>
                </a>
            </router-link>
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="position-relative search-bar-box"><input v-on:keyup.enter="timKiem()"
                        v-model="information_serch" type="text" class="form-control search-control"
                        placeholder="Type to search..."><span
                        class="position-absolute top-50 search-show translate-middle-y"><i
                            class="bx bx-search"></i></span><span
                        class="position-absolute top-50 search-close translate-middle-y"><i class="bx bx-x"></i></span>
                </div>
                <div class="navbar-nav ms-auto">
                    <router-link to="/">
                        <a href="/" class="nav-item nav-link">Home</a></router-link>
                    <router-link to="/about">
                        <a href="/about" class="nav-item nav-link">About</a>
                    </router-link>
                    <div class="nav-item dropdown"><a href="" class="nav-link dropdown-toggle active"
                            data-bs-toggle="dropdown">Property</a>
                        <div class="dropdown-menu rounded-0 m-0">
                            <router-link to="/propertylist">
                                <a href="/propertylist" class="dropdown-item active">Danh Sách Tour</a>
                            </router-link>
                            <router-link to="/propertyType">
                                <a href="/propertyType" class="dropdown-item">Loại Hình Du Lịch</a>
                            </router-link>
                            <router-link to="/propertyAgent">
                                <a href="/propertyAgent" class="dropdown-item">Chuyên Gia Du Lịch</a>
                            </router-link>
                        </div>
                    </div>
                    <div class="nav-item dropdown"><a href="" class="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown">Pages</a>
                        <div class="dropdown-menu rounded-0 m-0">
                            <router-link to="/testimonial">
                                <a href="/testimonial" class="dropdown-item">Testimonial</a>
                            </router-link>
                            <router-link to="/404Error">
                                <a href="/404Error" class="dropdown-item">404
                                    Error</a>
                            </router-link>
                        </div>
                    </div>
                    <router-link to="/contact">
                        <a href="/contact" class="nav-item nav-link">Contact</a>
                    </router-link>
                </div>
                <template v-if="auth">
                    <div class="user-box dropdown me-5">
                        <a class="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret" href="#"
                            role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://image.pngaaa.com/345/1582345-middle.png" style="width: 70px;"
                                alt="user avatar">
                            <div class="user-info ps-3">
                                <p class="user-name mb-0">{{ nameKH }}</p>
                                <p class="designattion mb-0">Phong Cách</p>
                            </div>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li>
                                <router-link to="/profile">
                                    <a class="dropdown-item" href="javascript:;">
                                        <i class="bx bx-user"></i><span>Profile</span>
                                    </a>
                                </router-link>
                            </li>
                            <li>
                                <div class="dropdown-divider mb-0"></div>
                            </li>
                            <li><a v-on:click="LogOut()" class="dropdown-item"><i
                                        class='bx bx-log-out-circle'></i><span>Đăng
                                        Xuất</span></a>
                            </li>
                            <li><a v-on:click="LogOutAllDevice()" class="dropdown-item"><i
                                        class='bx bx-log-out-circle'></i><span>Đăng Xuất Tất
                                        Cả</span></a>
                            </li>
                        </ul>
                    </div>
                </template>

                <template v-else>
                    <div class="user-box me-5">
                        <a class="d-flex align-items-center">
                            <router-link to="/login">
                                <button style="font-size: 10px;" type="button" class="btn btn-primary me-2"><i
                                        class="bx bxs-lock-open"></i>
                                    Đăng
                                    Nhập</button>
                            </router-link>
                            <router-link to="/register">
                                <button style="font-size: 10px;" type="button" class="btn btn-secondary"><i
                                        class="fa-solid fa-right-to-bracket fa-2xs"></i> Đăng
                                    Ký</button>
                            </router-link>
                        </a>
                    </div>
                </template>
                <div class="d-none d-lg-block">
                    <router-link to="/gio-hang">
                        <a href="product-detail.html" class="bi-bag custom-icon"></a>
                    </router-link>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
import { createToaster } from "@meforma/vue-toaster";

import baseRequest from '../../core/baseRequest';

const toaster = createToaster({ position: "top-right" });
export default {
    data() {
        return {
            auth: false,
            nameKH: '',
            information_serch: "",
        }
    },
    mounted() {
        this.checkLogin();
        this.nameKH = localStorage.getItem('ten_kh')
    },
    methods: {
        timKiem() {
            this.$router.push({
                name: 'timKiem',
                params: {
                    thong_tin: this.information_serch
                }
            });
        },
        checkLogin() {
            baseRequest
                .post('khach-hang/check-login')
                .then((res) => {
                    if (res.data.status) {
                        this.auth = true
                    }
                })
        },
        LogOut() {
            baseRequest
                .get('khach-hang/dang-xuat')
                .then((res) => {
                    if (res.data.status) {
                        toaster.success('Thông Báo<br>' + res.data.message);
                        window.localStorage.removeItem('key_login');
                        window.localStorage.removeItem('ten_kh');
                        this.auth = false;
                        this.$router.push('/');
                    } else {
                        toaster.error('Thông Báo <br>' + res.data.message);
                    }
                })
        },
        LogOutAllDevice() {
            baseRequest
                .get('khach-hang/dang-xuat-tat-ca-thiet-bi')
                .then((res) => {
                    if (res.data.status) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        window.localStorage.removeItem('key_login');
                        window.localStorage.removeItem('ten_kh');
                        this.auth = false;
                        this.$router.push('/');
                    } else {
                        toaster.error('Thông báo<br>' + res.data.message);
                    }
                })
        }
    },
}
</script>
<style></style>