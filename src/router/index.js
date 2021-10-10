import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/about/About.vue"),
  },
  {
    path: "/product",
    name: "Product",
    component: () =>
      import("../views/product/Product.vue"),
    children: [
      {
        path: '',
        name: "ProductLeft",
        component: () =>
        import("../views/product/productLeft/ProductLeft.vue"),
      },
      {
        path: "productMid",
        name: "ProductMid",
        component: () =>
        import("../views/product/productMid/ProductMid.vue"),
      },
      {
        path: "productRight",
        name: "ProductRight",
        component: () =>
        import("../views/product/productRight/ProductRight.vue"),
      },
    ]
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
    import("../views/contact/Contact.vue"),
  },
  {
    path: "/carousel",
    name: "Carousel",
    component: () =>
      import("../components/share/Carousel.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
