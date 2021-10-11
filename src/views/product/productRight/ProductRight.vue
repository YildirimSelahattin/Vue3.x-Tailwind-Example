<template>
  <div class="mt-6 lg:mt-0 mx-auto lg:pl-3 lg:w-4/5 productRight">
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
      <ExCard2 />
      <ExCard2 />
      <ExCard2 />
      <ExCard2 />
    </div>
  </div>
</template>

<script>
import ExCard2 from "@/components/ExCard2";
export default {
  name: "ProductRight",
  components: {
    ExCard2,
  },
};
</script>
