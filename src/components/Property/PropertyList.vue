<template>
    <div class="container-fluid header bg-white p-0">
        <div class="row g-0 align-items-center flex-column-reverse flex-md-row">
            <div class="col-md-6 p-5 mt-lg-5">
                <h1 class="display-5 animated fadeIn mb-4">Danh Sách Tour</h1>
                <nav aria-label="breadcrumb animated fadeIn">
                    <ol class="breadcrumb text-uppercase">
                        <li class="breadcrumb-item"><router-link to="/">
                                <a style="color: rgb(0, 185, 142);" href="/">Home</a>
                            </router-link></li>
                        <li class="breadcrumb-item">
                            <router-link to="/property">
                                <a href="/property" style="color: rgb(0, 185, 142);">Property</a>
                            </router-link>
                        </li>
                        <li class="breadcrumb-item text-body active" aria-current="page">Danh Sách Tour</li>
                    </ol>
                </nav>
            </div>
            <div class="col-md-6 animated fadeIn"><img class="img-fluid"
                    src="https://upanh123.com/wp-content/uploads/2020/12/back-ground-thien-nhien-viet-nam-yen-bai.jpg"
                    alt="website template image"></div>
        </div>
    </div>
    <hr class="mt-5">
    <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-0 gx-5 align-items-end">
                <div class="col-lg-6">
                    <div class="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s"
                        style="visibility: visible; animation-delay: 0.1s; animation-name: slideInLeft;">
                        <h1 class="mb-3 text-danger">Danh Sách Tour Du Lịch</h1>
                        <hr>
                        <p> Với mục tiêu mang đến trải nghiệm du lịch tốt nhất, chúng tôi cung cấp nhiều lựa chọn và
                            thông tin hữu ích để hỗ trợ khách hàng trong việc lên kế hoạch cho chuyến đi của mình.</p>
                    </div>
                </div>
                <div class="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s"
                    style="visibility: visible; animation-delay: 0.1s; animation-name: slideInRight;">
                    <ul class="nav nav-pills d-inline-flex justify-content-end mb-5">
                        <li class="nav-item me-2"><a class="btn btn-outline-danger active" data-bs-toggle="pill"
                                href="#tab-1">Nổi Bật</a></li>
                        <li class="nav-item me-2"><a class="btn btn-outline-danger" data-bs-toggle="pill"
                                href="#tab-2">Mới Nhất</a></li>
                        <li class="nav-item me-0"><a class="btn btn-outline-danger" data-bs-toggle="pill"
                                href="#tab-3">Xem Tất Cả</a></li>
                    </ul>
                </div>
            </div>
            <div class="tab-content">
                <div id="tab-1" class="tab-pane fade show p-0 active">
                    <div class="row g-4">
                        <template v-for="(value, index) in list_travel" :key="index">
                            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <router-link :to="'/chi-tiet-tour/' + value.id">
                                    <div class="property-item rounded overflow-hidden">
                                        <div class="position-relative overflow-hidden">
                                            <a href=""><img class="img-fluid" style="height: 285px;"
                                                    v-bind:src="value.hinh_anh" alt=""></a>
                                            <div
                                                class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                {{ value.dia_diem_chinh }}</div>
                                            <div
                                                class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                                Shop</div>
                                        </div>
                                        <div class="p-4 pb-0">
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="row">
                                                        <div class="col-6">
                                                            <h5 class="text-danger mb-2">{{
                                                                formatMoney(value.gia_khuyen_mai) }}</h5>
                                                        </div>
                                                        <div class="col-6">
                                                            <h5 class=" text-decoration-line-through mb-2"
                                                                style="margin-left: 20px; color: #c1cdcd; font-size: 15px;">
                                                                {{
                                                                    formatMoney(value.gia_goc) }}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p class="d-block h5 mb-2" href="" style="color: #838b8b;">{{
                                                value.hoat_dong_chinh }}</p>
                                            <p><i class="fa fa-map-marker-alt text-danger me-2"></i><span
                                                    style="color: red;">{{
                                                        value.ten_tour }}</span>
                                            </p>
                                            <p style="margin-top: -15px; color: red;">Ngày Khởi Hành: <b> {{
                                                value.ngay_khoi_hanh }}</b>
                                            </p>
                                        </div>
                                        <div class="d-flex border-top">
                                            <small class="flex-fill text-center border-end py-2"><i
                                                    class="fa fa-ruler-combined text-primary me-2"></i>{{ value.ticket
                                                }}</small>
                                            <small class="flex-fill text-center border-end py-2"><i
                                                    class="fa fa-bed text-primary me-2"></i>{{ value.slot }}</small>
                                            <small class="flex-fill text-center py-2"><i
                                                    class="fa fa-bath text-primary me-2"></i>{{ value.ngay_khoi_hanh
                                                }}</small>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </template>
                        <div class="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                            <a class="btn btn-danger py-3 px-5" href="">Browse More Property</a>
                        </div>
                    </div>
                </div>
                <div id="tab-2" class="tab-pane fade show p-0">
                    <div class="row g-4">
                        <template v-for="(value, index) in list_travel_alldata" :key="index">
                            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <router-link :to="'/chi-tiet-tour/' + value.id">
                                    <div class="property-item rounded overflow-hidden">
                                        <div class="position-relative overflow-hidden">
                                            <a href=""><img class="img-fluid" style="height: 285px;"
                                                    v-bind:src="value.hinh_anh" alt=""></a>
                                            <div
                                                class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                {{ value.dia_diem_chinh }}</div>
                                            <div
                                                class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                                Shop</div>
                                        </div>
                                        <div class="p-4 pb-0">
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="row">
                                                        <div class="col-6">
                                                            <h5 class="text-danger mb-2">{{
                                                                formatMoney(value.gia_khuyen_mai) }}</h5>
                                                        </div>
                                                        <div class="col-6">
                                                            <h5 class=" text-decoration-line-through mb-2"
                                                                style="margin-left: 20px; color: #c1cdcd; font-size: 15px;">
                                                                {{
                                                                    formatMoney(value.gia_goc) }}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p class="d-block h5 mb-2" href="" style="color: #838b8b;">{{
                                                value.hoat_dong_chinh }}</p>
                                            <p><i class="fa fa-map-marker-alt text-danger me-2"></i><span
                                                    style="color: red;">{{
                                                        value.ten_tour }}</span>
                                            </p>
                                            <p style="margin-top: -15px; color: red;">Ngày Khởi Hành: <b> {{
                                                value.ngay_khoi_hanh }}</b>
                                            </p>
                                        </div>
                                        <div class="d-flex border-top">
                                            <small class="flex-fill text-center border-end py-2"><i
                                                    class="fa fa-ruler-combined text-primary me-2"></i>{{ value.ticket
                                                }}</small>
                                            <small class="flex-fill text-center border-end py-2"><i
                                                    class="fa fa-bed text-primary me-2"></i>{{ value.slot }}</small>
                                            <small class="flex-fill text-center py-2"><i
                                                    class="fa fa-bath text-primary me-2"></i>{{ value.ngay_khoi_hanh
                                                }}</small>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </template>
                        <div class="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                            <a class="btn btn-danger py-3 px-5" href="">Browse More Property</a>
                        </div>
                    </div>
                </div>
                <div id="tab-3" class="tab-pane fade show p-0">
                    <div class="row g-4">
                        <template v-for="(value, index) in list_travel_outstanding" :key="index">
                            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <router-link :to="'/chi-tiet-tour/' + value.id">
                                    <div class="property-item rounded overflow-hidden">
                                        <div class="position-relative overflow-hidden">
                                            <a href=""><img class="img-fluid" style="height: 285px;"
                                                    v-bind:src="value.hinh_anh" alt=""></a>
                                            <div
                                                class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                {{ value.dia_diem_chinh }}</div>
                                            <div
                                                class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                                Shop</div>
                                        </div>
                                        <div class="p-4 pb-0">
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="row">
                                                        <div class="col-6">
                                                            <h5 class="text-danger mb-2">{{
                                                                formatMoney(value.gia_khuyen_mai) }}</h5>
                                                        </div>
                                                        <div class="col-6">
                                                            <h5 class=" text-decoration-line-through mb-2"
                                                                style="margin-left: 20px; color: #c1cdcd; font-size: 15px;">
                                                                {{
                                                                    formatMoney(value.gia_goc) }}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p class="d-block h5 mb-2" href="" style="color: #838b8b;">{{
                                                value.hoat_dong_chinh }}</p>
                                            <p><i class="fa fa-map-marker-alt text-danger me-2"></i><span
                                                    style="color: red;">{{
                                                        value.ten_tour }}</span>
                                            </p>
                                            <p style="margin-top: -15px; color: red;">Ngày Khởi Hành: <b> {{
                                                value.ngay_khoi_hanh }}</b>
                                            </p>
                                        </div>
                                        <div class="d-flex border-top">
                                            <small class="flex-fill text-center border-end py-2"><i
                                                    class="fa fa-ruler-combined text-primary me-2"></i>{{ value.ticket
                                                }}</small>
                                            <small class="flex-fill text-center border-end py-2"><i
                                                    class="fa fa-bed text-primary me-2"></i>{{ value.slot }}</small>
                                            <small class="flex-fill text-center py-2"><i
                                                    class="fa fa-bath text-primary me-2"></i>{{ value.ngay_khoi_hanh
                                                }}</small>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </template>
                        <div class="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                            <a class="btn btn-danger py-3 px-5" href="">Browse More Property</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-xxl py-5">
        <div class="container">
            <div class="bg-light rounded p-3">
                <div class="bg-white rounded p-4" style="border:1px dashed rgba(0,185,142,.3)">
                    <div class="row g-5 align-items-center">
                        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <img class="img-fluid rounded w-100" src="../../assets/images/imgdowload/call-to-action.jpg"
                                alt="">
                        </div>
                        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <div class="mb-4">
                                <h1 class="mb-3">Liên Hệ Với Chúng Tôi</h1>
                                <p>Hãy Liên Hệ Với Chúng Tôi Để Chúng Tôi Giải Đáp Mọi Thắt Mắt</p>
                            </div>
                            <button disabled href="" class="btn btn-danger py-3 px-4 me-2"><i
                                    class="fa fa-phone-alt me-2"></i>0899923563</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import axios from 'axios';
import baseRequest from '../../core/baseRequest'
export default {
    data() {
        return {
            list_travel: [],
            list_travel_alldata: [],
            list_travel_outstanding: [],
        }
    },

    mounted() {
        this.CallListTravel();
    },

    methods: {
        CallListTravel() {
            baseRequest
                .get('trang-chu/dia-diem/select')
                .then((res) => {
                    this.list_travel = res.data.outstanding;
                    this.list_travel_alldata = res.data.new;
                    this.list_travel_outstanding = res.data.data;
                })
        },
        formatMoney(number) {
            return number.toLocaleString('vi', { style: 'currency', currency: 'VND' });
        }

    }
}

</script>
<style></style>