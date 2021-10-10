<template>
  <div class="about">
    <div :class="[$route.name == 'Home' ? 'hidden' : '']">
      <TopSection />
    </div>
    <section class="bg-gray-900 dark:bg-gray-100 py-8 " :class="[$route.name == 'Home' ? 'bg-gray-900 py-8 border-t-2 border-yellow-700 dark:border-yellow-600' : '']">
      <div class="container py-8 px-6 mx-auto">
        <a
          class="
            tracking-wide
            no-underline
            hover:no-underline
            font-bold
            text-gray-100 dark:text-yellow-600 text-2xl
            mb-8
          "
          href="#"
        >
          Hakkımızda
        </a>
        <p class="my-8 text-gray-400 dark:text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel risus
          commodo viverra maecenas accumsan lacus vel facilisis volutpat. Vitae
          aliquet nec ullamcorper sit. Nullam eget felis eget nunc lobortis
          mattis aliquam. In est ante in nibh mauris. Egestas congue quisque
          egestas diam in. Facilisi nullam vehicula ipsum a arcu. Nec nam
          aliquam sem et tortor consequat. Eget mi proin sed libero enim sed
          faucibus turpis in. Hac habitasse platea dictumst quisque. In aliquam
          sem fringilla ut. Gravida rutrum quisque non tellus orci ac auctor
          augue mauris. Accumsan lacus vel facilisis volutpat est velit egestas
          dui id. At tempor commodo ullamcorper a. Volutpat commodo sed egestas
          egestas fringilla. Vitae congue eu consequat ac.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import TopSection from "@/components/TopSection";
export default {
  name: "About",
  components: {
    TopSection,
  },
};
</script>
