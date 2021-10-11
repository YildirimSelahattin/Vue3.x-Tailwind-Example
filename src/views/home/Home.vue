<template>
  <div class="home bg-gray-800 dark:bg-gray-100">
    <Carousel />
    <div
      class="border-t-2 w-full border-yellow-700 dark:border-yellow-600"
    ></div>
    <div
      class="
        max-w-screen-xl
        p-4
        pb-14
        bg-gray-800
        dark:bg-gray-100
        mx-auto
        px-4
        sm:px-6
        lg:px-8
        relative
        py-26
        lg:mt-10
      "
    >
      <div class="relative">
        <div
          class="
            lg:grid lg:grid-flow-row-dense
            flex flex-col-reverse
            lg:grid-cols-2 lg:gap-8 lg:items-center
          "
        >
          <HomeRightSection />
          <HomeLeftSection />
        </div>
      </div>
    </div>
    <About />
    <FAQs />
  </div>
</template>

<script>
import Carousel from "@/components/share/Carousel";
import HomeLeftSection from "@/components/share/HomeLeftSection";
import HomeRightSection from "@/components/share/HomeRightSection";
import About from "@/views/about/About";
import FAQs from "@/components/FAQs/";

export default {
  name: "Home",
  components: {
    Carousel,
    About,
    HomeLeftSection,
    HomeRightSection,
    FAQs,
  },
};
</script>

<style>
.urunler {
  width: 270px;
  height: 270px;
}
</style>
