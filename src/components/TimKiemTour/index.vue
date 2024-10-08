<template>
    <h4 class="mb-5" style="margin-top: -60px;">Tim Kiếm Tour</h4>
    <div class="row">
        <template v-for="(value, index) in list " :key="index">
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div class="property-item rounded overflow-hidden">
                    <div class="position-relative overflow-hidden">
                        <a href=""><img class="img-fluid" v-bind:src="value.hinh_anh" alt=""></a>
                        <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
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
                                        <h5 class="text-danger mb-2">{{ formatMoney(value.gia_khuyen_mai) }}</h5>
                                    </div>
                                    <div class="col-6">
                                        <h5 class="text-danger text-decoration-line-through mb-2"
                                            style="margin-left: 20px;">{{ formatMoney(value.gia_goc) }}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a class="d-block h5 mb-2" href="">{{ value.hoat_dong_chinh }}</a>
                        <p><i class="fa fa-map-marker-alt text-primary me-2"></i>{{ value.ten_tour }}
                        </p>
                        <p style="margin-top: -15px;">Ngày Khởi Hành: <b>{{ value.ngay_khoi_hanh }}</b>
                        </p>
                    </div>
                    <div class="d-flex border-top">
                        <small class="flex-fill text-center border-end py-2"><i
                                class="fa fa-ruler-combined text-primary me-2"></i>{{ value.ticket }}</small>
                        <small class="flex-fill text-center border-end py-2"><i
                                class="fa fa-bed text-primary me-2"></i>{{ value.slot }}</small>
                        <small class="flex-fill text-center py-2"><i class="fa fa-bath text-primary me-2"></i>{{
                            value.ngay_khoi_hanh }}</small>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>
<script>
import { createToaster } from "@meforma/vue-toaster";
import baseRequest from '../../core/baseRequest';
const toaster = createToaster({ position: "top-right" });
export default {
    props: ['thong_tin'],

    data() {
        return {
            thong_tin: this.$route.params.thong_tin,
            list: [],
        }
    },
    beforeRouteUpdate(to, from, next) {
        this.thong_tin = to.params.thong_tin;
        this.loadData();
        next();
    },
    mounted() {
        this.loadData();
    },
    methods: {
        formatMoney(number) {
            return number.toLocaleString('vi', { style: 'currency', currency: 'VND' });
        },

        loadData() {
            var payload = {
                'thong_tin_tim': this.thong_tin
            };
            baseRequest
                .post('trang-chu/tim-kiem', payload)
                .then((res) => {
                    this.list = res.data.data;

                })
        }
    },
}
</script>
<style></style>