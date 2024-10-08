<template>

    <div class="container-fluid header bg-white p-0">
        <div class="row g-0 align-items-center flex-column-reverse flex-md-row">
            <div class="col-md-6 p-5 mt-lg-5">
                <h1 class="display-5 animated fadeIn mb-4">Thế Giới <span style="color: rgba(0, 185, 142, .9)">
                        Tour</span> Trong Tay Bạn - Phục Vụ Tận Tâm Giá Siêu Ưu Đãi
                </h1>
                <p class="animated fadeIn mb-4 pb-2">Du lịch trong nước luôn là lựa chọn tuyệt vời. Đường bờ biển dài
                    hơn 3260km, những khu bảo tồn thiên nhiên tuyệt vời, những thành phố nhộn nhịp, những di tích lịch
                    sử hào hùng, nền văn hóa độc đáo và hấp dẫn, cùng một danh sách dài những món ăn ngon nhất thế giới,
                    Việt Nam có tất cả những điều đó.</p>
                <a href="" class="btn btn-danger py-3 px-5 me-3 animated fadeIn">Get Started</a>
            </div>
            <div class="col-md-6 animated fadeIn">
                <div class="owl-carousel-item">
                    <img class="img-fluid" src="../../assets/images/imgdowload/carousel-1.jpg" alt="">
                </div>

            </div>
        </div>
    </div>
    <hr class="mt-5">

    <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5 align-items-center">
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div class="about-img position-relative overflow-hidden p-5 pe-0">
                        <img class="img-fluid w-100" src="../../assets/images/imgdowload/about.jpg">
                    </div>
                </div>
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <h1 class="mb-4">#1 Top Những Nơi Dịch Vụ Du Lịch Tốt Nhất Cả Nước</h1>
                    <p class="mb-4">Trang web du lịch của chúng tôi là một nền tảng toàn diện, giúp du khách dễ dàng tìm
                        kiếm và
                        đặt tour du lịch, khách sạn, dịch vụ vận chuyển và các hoạt động giải trí. Với mục tiêu mang đến
                        trải nghiệm du lịch tốt nhất, chúng tôi cung cấp nhiều lựa chọn và thông tin hữu ích để hỗ trợ
                        khách hàng trong việc lên kế hoạch cho chuyến đi của mình.
                    </p>
                    <p><i class="fa fa-check text-danger me-3"></i>Tìm kiếm linh hoạt</p>
                    <p><i class="fa fa-check text-danger me-3"></i>Hỗ trợ khách hàng</p>
                    <p><i class="fa fa-check text-danger me-3"></i>Thông tin chi tiết</p>
                    <a class="btn btn-danger py-3 px-5 mt-3" href="">Read More</a>
                </div>
            </div>
        </div>
    </div>
    <hr class="mt-5">
    <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-0 gx-5 align-items-end">
                <div class="col-lg-6">
                    <div class="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                        <h1 class="mb-3 text-danger">Thông Tin Tour</h1>
                        <hr>
                        <p>Mỗi sản phẩm đều được mô tả chi tiết với hình ảnh đẹp và thông tin hữu ích, tạo nên một trải
                            nghiệm người dùng tốt nhất cho du khách khi truy cập trang web.</p>
                    </div>
                </div>
                <div class="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                    <ul class="nav nav-pills d-inline-flex justify-content-end mb-5">
                        <li class="nav-item me-2">
                            <a class="btn btn-outline-danger active" data-bs-toggle="pill" href="#tab-1">Nổi Bật</a>
                        </li>
                        <li class="nav-item me-2">
                            <a class="btn btn-outline-danger" data-bs-toggle="pill" href="#tab-2">Mới Nhất</a>
                        </li>
                        <li class="nav-item me-0">
                            <a class="btn btn-outline-danger" data-bs-toggle="pill" href="#tab-3">Xem Tất Cả</a>
                        </li>
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
    <hr class="mt-5">
    <div class="container-xxl py-5">
        <div class="container">
            <div class="bg-light rounded p-3">
                <div class="bg-white rounded p-4" style="border: 1px dashed rgba(0, 185, 142, .3)">
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
    <hr class="mt-5">
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
                <h1 class="mb-3">Lãnh Đạo</h1>
                <p>Những lĩnh vực mà nhà lãnh đạo đã làm việc, cũng như kiến thức chuyên môn trong ngành. Điều này giúp
                    khẳng định sự phù hợp của họ với vai trò hiện tại.</p>
            </div>
            <div class="row g-4">
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="team-item rounded overflow-hidden">
                        <div class="position-relative">
                            <img class="img-fluid" src="../../assets/images/imgdowload/team-1.jpg" alt="">
                            <div class="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div class="text-center p-4 mt-3">
                            <h5 class="fw-bold mb-0">Full Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="team-item rounded overflow-hidden">
                        <div class="position-relative">
                            <img class="img-fluid" src="../../assets/images/imgdowload/team-2.jpg" alt="">
                            <div class="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div class="text-center p-4 mt-3">
                            <h5 class="fw-bold mb-0">Full Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="team-item rounded overflow-hidden">
                        <div class="position-relative">
                            <img class="img-fluid" src="../../assets/images/imgdowload/team-3.jpg" alt="">
                            <div class="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div class="text-center p-4 mt-3">
                            <h5 class="fw-bold mb-0">Full Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div class="team-item rounded overflow-hidden">
                        <div class="position-relative">
                            <img class="img-fluid" src="../../assets/images/imgdowload/team-4.jpg" alt="">
                            <div class="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div class="text-center p-4 mt-3">
                            <h5 class="fw-bold mb-0">Full Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr class="mt-5">
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
                <h1 class="mb-3 text-danger">Đánh Giá Của Khách Hàng!</h1>
                <p>Khách hàng có thể nhận xét về sự phong phú và đa dạng của các lựa chọn tour, địa điểm và hoạt động.
                    Một
                    trang web có nhiều sản phẩm hấp dẫn sẽ thu hút hơn.</p>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="row">
                        <div class="col-6 bg-light rounded p-3">
                            <div class="bg-white border rounded p-4">
                                <p>Tôi rất ấn tượng với giao diện của trang web. Thiết kế trực quan, dễ dàng tìm kiếm
                                    thông
                                    tin và các menu được bố trí hợp lý. Các hình ảnh đẹp và sinh động giúp tôi hình dung
                                    rõ
                                    hơn về các tour.</p>
                                <div class="d-flex align-items-center">
                                    <img class="img-fluid flex-shrink-0 rounded"
                                        src="../../assets/images/imgdowload/testimonial-1.jpg"
                                        style="width: 45px; height: 45px;">
                                    <div class="ps-3">
                                        <h6 class="fw-bold mb-1">David Lee</h6>
                                        <small></small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 bg-light rounded p-3">
                            <div class="bg-white border rounded p-4">
                                <p>Thông tin trên trang web rất chi tiết và chính xác. Tôi đã tìm thấy tất cả các thông
                                    tin
                                    cần thiết về giá cả, lịch trình, và các điểm tham quan trong tour mà tôi đang quan
                                    tâm.
                                    Điều này giúp tôi cảm thấy yên tâm khi đặt chỗ.</p>
                                <div class="d-flex align-items-center">
                                    <img class="img-fluid flex-shrink-0 rounded"
                                        src="../../assets/images/imgdowload/testimonial-2.jpg"
                                        style="width: 45px; height: 45px;">
                                    <div class="ps-3">
                                        <h6 class="fw-bold mb-1">John Nguyen</h6>
                                        <small></small>
                                    </div>
                                </div>
                            </div>
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