<template>
<div class="space-y-3 lg:w-2/12 lg:pt-6 pl-8 lg:px-2 lg:space-y-4 border-r border-gray-500">
    <router-link to="/product"><LeftMenuItem /></router-link>
    <router-link to="/product/productMid"><LeftMenuItem /></router-link>
    <router-link to="/product/productRight"><LeftMenuItem /></router-link>
</div>
</template>

<script>
import LeftMenuItem from "@/components/share/LeftMenuItem";
export default {
  name: "LeftMenu",
  components: {
    LeftMenuItem,
  },
};
</script>

<style></style>
