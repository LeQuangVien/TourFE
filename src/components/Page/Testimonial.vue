<template>
    <div class="container-fluid header bg-white p-0">
        <div class="row g-0 align-items-center flex-column-reverse flex-md-row">
            <div class="col-md-6 p-5 mt-lg-5">
                <h1 class="display-5 animated fadeIn mb-4">Testimonial</h1>
                <nav aria-label="breadcrumb animated fadeIn">
                    <ol class="breadcrumb text-uppercase">
                        <li class="breadcrumb-item">
                            <router-link to="/">
                                <a style="color: rgb(0, 185, 142);" href="/">Home</a>
                            </router-link>
                        </li>
                        <li class="breadcrumb-item">
                            <router-link to="/testimonial">
                                <a style="color: rgb(0, 185, 142);" href="/testimonial">Page</a>
                            </router-link>
                        </li>
                        <li class="breadcrumb-item text-body active" aria-current="page">Testimonial</li>
                    </ol>
                </nav>
            </div>
            <div class="col-md-6 animated fadeIn">
                <img class="img-fluid" src="../../assets/images/imgdowload/carousel-1.jpg" alt="">
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
                                        <h6 class="fw-bold~ mb-1">John Nguyen</h6>
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
export default {

}
</script>
<style></style>