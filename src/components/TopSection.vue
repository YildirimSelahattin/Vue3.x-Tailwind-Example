<template>
  <section
    class="
      w-full
      mx-auto
      bg-yellow-600
      flex
      pt-12
      md:pt-0 md:items-center
      bg-center
    "
    style="
      max-width: 1600px;
      height: 18rem;
      background-image: url('img/kitchen.jpg');
    "
  >
    <div class="container mx-auto">
      <div
        class="
          flex flex-col
          w-full
          lg:w-1/2
          justify-center
          items-start
          px-6
          tracking-wide
        "
      >
        <h1
          class="
            text-white
            bg-black
            rounded-2xl
            p-2
            bg-opacity-20
            text-3xl
            my-4
          "
        >
          Bizi Sosyal Medyada Takip Edin !
        </h1>
        <SMButtons />
      </div>
    </div>
  </section>
</template>

<script>
import SMButtons from "@/components/share/SocialMediaButtons";
export default {
  name: "TopSection",
  components: {
    SMButtons,
  },
};
</script>

<style></style>
