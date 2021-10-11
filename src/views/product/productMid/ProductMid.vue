<template>
  <div class="mt-6 lg:mt-0 mx-auto lg:pl-3 lg:w-4/5 productMid">
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
      <ExCard />
      <ExCard />
      <ExCard />
      <ExCard />
      <ExCard />
      <ExCard />
      <ExCard />
      <ExCard />
      <ExCard />
      <ExCard />
      <ExCard />
    </div>
  </div>
</template>

<script>
import ExCard from "@/components/ExCard";
export default {
  name: "ProductMid",
  components: {
    ExCard,
  },
};
</script>
