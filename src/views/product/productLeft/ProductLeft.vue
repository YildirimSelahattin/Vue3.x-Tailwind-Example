<template>
  <div class="mt-6 lg:mt-0 mx-auto lg:pl-3 lg:w-4/5 productLeft">
    <div
      class="
        grid grid-cols-1
        gap-8
        mt-8
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
      "
    >
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard";
export default {
  name: "ProductLeft",
  components: {
    ProductCard,
  },
};
</script>
