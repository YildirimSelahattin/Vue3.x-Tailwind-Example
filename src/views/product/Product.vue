<template>
  <section class="w-full bg-gray-800 dark:bg-gray-100 product">
    <div class="container py-8 mx-auto">
      <div class="lg:flex lg:-mx-2">
        <LeftMenu />
        <router-view />
      </div>
    </div>
  </section>
</template>

<script>
import LeftMenu from "@/components/share/LeftMenu";
export default {
  name: "Product",
  components: {
    LeftMenu,
  },
};
</script>
