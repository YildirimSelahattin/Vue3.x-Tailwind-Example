<template>
  <div class="product">
    <h1>Product</h1>

    <router-link to="/product" class="hover:text-indigo-500">Product Left</router-link> |
    <router-link to="/product/productMid" class="hover:text-indigo-500">Product Mid</router-link> |
    <router-link to="/product/productRight" class="hover:text-indigo-500">Product Right</router-link>

    <router-view />
  </div>
</template>

<script>
export default {};
</script>
