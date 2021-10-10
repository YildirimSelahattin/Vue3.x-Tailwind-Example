<template>
  <div
    class="flex flex-col items-center sm:px-0 px-4 justify-center w-full max-w-lg mx-auto"
  >
    <img
      class="object-cover w-full rounded-md h-72 xl:h-80"
      src="img/standart.jfif"
      alt="T-Shirt"
    />
    <h4 class="mt-2 text-base font-medium dark:text-gray-600 text-gray-300">
      {/{productName}}
    </h4>
    <p class="text-yellow-600">{/{price}}</p>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  components: {},
};
</script>

<style></style>
