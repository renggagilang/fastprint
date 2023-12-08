import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import AddProduct from "../components/AddProduct.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/add-product",
      name: "AddProduct",
      component: AddProduct,
    },
    {
      path: "/edit-product/:productId",
      name: "editProduct",
      component: AddProduct,
    },
  ],
});

export default router;
