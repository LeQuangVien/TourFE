import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save
import kiemTraKhachHang from '../core/kiemtrakhachhang';

const ROUTE_PATHS = {
    DEFAULT: '/',
    PROPERTIES: '/propertylist'
}

const routes = [
    {
        path: ROUTE_PATHS.DEFAULT,
        component: () => import('../components/TrangChu/index.vue'),
    },
    {
        path: '/propertylist',
        component: () => import('../components/Property/PropertyList.vue'),
    },
    {
        path: '/about',
        component: () => import('../components/About/index.vue'),
    },
    {
        path: '/propertyType',
        component: () => import('../components/Property/PropertyType.vue'),
    },
    {
        path: '/propertyAgent',
        component: () => import('../components/Property/PropertyAgent.vue'),
    },
    {
        path: '/testimonial',
        component: () => import('../components/Page/Testimonial.vue'),
    },
    {
        path: '/404Error',
        component: () => import('../components/Page/404Error.vue'),
    },

    {
        path: '/contact',
        component: () => import('../components/Contact/Contact.vue'),
    },

    {
        path: '/chi-tiet-tour/:id_san_pham',
        component: () => import('../components/ChiTietTour/index.vue'),
        props: true
    },
    // logiin
    {
        path: '/login',
        component: () => import('../components/SignIn/index.vue'),
        meta: { layout: 'auth' }
    },

    {
        path: '/register',
        component: () => import('../components/Register/index.vue'),
        meta: { layout: 'auth' }
    },

    // gio hang
    {
        path: '/gio-hang',
        component: () => import('../components/GioHang/index.vue'),
        beforeEnter: kiemTraKhachHang

    },
    {
        path: '/thanh-toan',
        component: () => import('../components/ThanhToan/index.vue'),
        beforeEnter: kiemTraKhachHang

    },

    {
        path: '/tim-kiem',
        component: () => import('../components/TimKiemTour/index.vue'),
        name: 'timKiem',
        props: true
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router