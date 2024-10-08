<template >
    <div class="container-fluid header bg-white p-0">
            <div class="row g-0 align-items-center flex-column-reverse flex-md-row">
                <div class="col-md-6 p-5 mt-lg-5">
                    <h1 class="display-5 animated fadeIn mb-4">404 Error</h1> 
                        <nav aria-label="breadcrumb animated fadeIn">
                        <ol class="breadcrumb text-uppercase">
                            <li class="breadcrumb-item"><router-link to="/">
                                    <a style="color: rgb(0, 185, 142);" href="/">Home</a>
                                </router-link></li>
                            <li class="breadcrumb-item">
                                <router-link to="/404Error">
                                    <a style="color: rgb(0, 185, 142);" href="/404Error">Page</a>
                                </router-link>
                            </li>
                            <li class="breadcrumb-item text-body active" aria-current="page">404 Error</li>
                        </ol>
                    </nav>
                </div>
                <div class="col-md-6 animated fadeIn">
                    <img class="img-fluid" src="../../assets/images/imgdowload/property-6.jpg" alt="">
                </div>
            </div>
        </div>
        <hr class="mt-5">
        <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div class="container text-center">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <i class="bi bi-exclamation-triangle display-1 text-danger"></i>
                        <h1 class="display-1">404</h1>
                        <h1 class="mb-4">Page Not Found</h1>
                        <p class="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                        <a class="btn btn-primary py-3 px-5" href="">Go Back To Home</a>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    
}
</script>
<style >
    
</style>