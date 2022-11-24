import { createRouter, createWebHistory } from "vue-router";
import productIndex from "../../components/products/index.vue";
import productCreate from "../../components/products/create.vue";
import notFound from "../../components/404.vue";
import { create } from "lodash";
const routes = [
    {
        path: "/",
        component: productIndex,
    },
    {
        path: "/product/create",
        component: productCreate,
    },
    {
        path: "/:pathMatch(.*)*",
        component: notFound,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
