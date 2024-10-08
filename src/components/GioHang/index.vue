<template>
    <div class="container">
        <div class="row">
            <div class="col-9" style="margin-top: -70px;">
                <h4 class="text-center" style="font-size: 40px; color: gray; margin-bottom: 30px; margin-left: 50px;">
                    Thông Tin Tour Đã
                    Chọn</h4>
                <table class="table table-bordered">
                    <thead>
                        <tr class="text-center">
                            <th></th>
                            <th>stt</th>
                            <th>Ảnh Mô Tả</th>
                            <th>Tên Tour</th>
                            <th>Ticket</th>
                            <th>Ngày Khởi Hành</th>
                            <th>Đơn Giá</th>
                            <th>Thành Tiền</th>
                            <th>Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="(value, index) in List_shoppingCart" :key="index">
                            <tr class="align-middle">
                                <td class="align-middle text-center">
                                    <input v-on:change="totalProduct()" v-model="value.chon_sp"
                                        class="form-check-input me-3" type="checkbox" value="" aria-label="...">
                                </td>
                                <th>{{ index + 1 }}</th>
                                <td><img class="img-fluid" style="width: 100px; height: 100px"
                                        v-bind:src="value.hinh_anh" alt=""></td>
                                <td>{{ value.ten_tour }}</td>
                                <td>{{ value.ticket }}</td>
                                <td>{{ value.ngay_khoi_hanh }}</td>
                                <td>{{ formatMoney(value.don_gia) }}</td>
                                <td>{{ formatMoney(value.thanh_tien) }}</td>
                                <td>
                                    <div>
                                        <button v-on:click="deleteShoppingCart(value)"
                                            class="btn btn-danger me-3">Xóa</button>
                                    </div>
                                </td>
                            </tr>
                        </template>


                    </tbody>
                </table>
            </div>
            <div class="col-lg-3">
                <div class="card tongtien" style="background-color: gainsboro;">
                    <div class="card-header">
                        <div class="title-thanhToan">
                            <b>Tổng Tour Được Chọn</b>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="content text-end">
                            <p class="para-giohang">Tạm Tính</p>
                            <b class="para-giohang" style="color: black; font-size: 25px;">{{
                                formatMoney(total_amount)
                                }}</b>
                            <p class="para-giohang">Giảm Giá</p>
                            <b class="para-giohang" style="color: black; font-size: 25px;">{{
                                formatMoney(total_promotion)
                                }}</b>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="thanhtien text-end">
                            <b style="font-size: 20px;">Tổng:</b>
                            <b style="font-size: 20px; color: red;"> {{ formatMoney(total_amount)
                                }}</b>
                            <div>
                                <router-link to="/thanh-toan">
                                    <button v-on:click="buyProduct()" class="btn btn-danger mb-3 mt-3">Vào Trang Thanh
                                        Toán</button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import baseRequest from '../../core/baseRequest';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
export default {
    data() {
        return {
            List_shoppingCart: [],
            total_amount: 0,
            total_promotion: 0,
        }
    },
    mounted() {
        this.callShoppingCart();
    },
    methods: {
        callShoppingCart() {
            baseRequest
                .get('chi-tiet-don-hang/select-gio-hang')
                .then((res) => {
                    this.List_shoppingCart = res.data.data
                })
        },
        formatMoney(number) {
            return number.toLocaleString('vi', { style: 'currency', currency: 'VND' });
        },
        totalProduct() {
            let tmp = 0;
            this.List_shoppingCart.forEach((value, index) => {
                if (value.chon_sp == true) {
                    tmp = tmp + value.thanh_tien;
                }
            })
            this.total_amount = tmp;
        },
        buyProduct() {
            var list_chon = [];
            this.List_shoppingCart.forEach((value, key) => {
                if (value.chon_sp && value.chon_sp == true) {
                    list_chon.push(value);
                }
            });
            var payload = {
                'ds_mua_sp': list_chon,
            };
            baseRequest
                .post('gio-hang/list-chon-san-pham', payload)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        alert("Đây là một cảnh báo");
                        this.loadDataGioHang();
                    } else {
                        // toaster.error('Thông báo<br>' + res.data.message);
                    }
                });
        },
        deleteShoppingCart(value) {
            baseRequest
                .post('chi-tiet-don-hang/delete-san-pham-gio-hang', value)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success("Thông Báo<br>" + res.data.message);
                        this.callShoppingCart();
                    } else {
                        toaster.success("Thông Báo<br>" + res.data.message);
                    }
                })
        },
    },
}
</script>
<style></style>