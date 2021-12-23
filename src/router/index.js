import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory('/'),
    routes: [{
            path: "/",
            name: "home",
            component: () =>
                import ("../views/index.vue"),
        },
        {
            path: "/products",
            name: "product.index",
            component: () =>
                import ("../views/product.vue"),
        },
        {
            path: "/products/category/:cat_id",
            name: "product.show",
            component: () =>
                import ("../views/cat_product.vue"),
        },
        {
            path: "/checkout",
            name: "checkout.index",
            component: () =>
                import ("../views/checkout.vue"),
        },
        {
            path: "/contact-us",
            name: "contact-us",
            component: () =>
                import ("../views/contact-us.vue"),
        }
        // {
        //     path: "/:pathMatch(.*)*",
        //     name: "error.404",
        //     component: () =>
        //         import ("../views/Error/404.vue"),
        // }
    ],
});

export default router;