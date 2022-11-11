import { createRouter, createWebHistory } from "vue-router";
import productIndex from "../../components/products/index.vue";
import notFound from "../../components/404.vue";
const routes = [
    {
        path: "/",
        component: productIndex,
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
