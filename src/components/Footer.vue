<template>
  <div class="footer">
    <footer
      class="bg-gray-900 h-full mx-auto border-t-2 border-yellow-700"
      :class="[
        $route.name == 'About'
          ? 'bg-gray-900 h-full mx-auto border-t-2 border-yellow-700'
          : '',
      ]"
    >
      <div class="flex px-3 pb-8">
        <div class="w-full mx-auto flex flex-wrap">
          <div class="w-full pt-14 px-10 lg:w-5/12">
            <img src="/img/mgsmobilya.png" alt="" />
          </div>
          <div class="flex w-full lg:w-4/12">
            <div class="px-3 md:px-0">
              <h3 class="font-bold text-gray-900 invisible">About</h3>
              <div class="pt-1 text-yellow-600">
                Adres:
                <p class="text-gray-200">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Similique exercitationem numquam eveniet ducimus.
                </p>
              </div>
              <div class="pt-2 text-yellow-600">
                Telefon:
                <p class="text-gray-200">0546 822 0444</p>
              </div>
              <div class="text-yellow-600 pt-2">
                Mail:
                <p class="text-gray-200">mgsmobilya.tr@gmail.com</p>
              </div>
            </div>
          </div>
          <div class="flex w-full lg:w-3/12 lg:justify-end lg:text-right">
            <div
              class="
                px-3
                py-7
                md:mr-10 md:px-0
                flex
                items-center
                mx-auto
                md:mx-0 md:inline
              "
            >
              <h3 class="text-center text-yellow-600 pb-4 hidden md:block">
                Sosyal Medya
              </h3>
              <SMButtons />
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center pt-4 items-center">
        <p class="flex text-gray-600 text-sm mb-1">
          Designed and built with by&nbsp;<a
            rel="license"
            class="text-pink-700"
            href="https://github.com/YildirimSelahattin"
            >selahattinYildirim</a
          >
        </p>
      </div>
      <div class="text-gray-600 text-sm flex justify-end items-center mr-2">
        This work is licensed under&nbsp;
        <a
          rel="license"
          class="text-indigo-500"
          href="http://creativecommons.org/licenses/by-nc-nd/4.0/"
        >
          CC BY-NC-ND 4.0
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
import SMButtons from "@/components/share/SocialMediaButtons";
export default {
  name: "MainFooter",
  components: {
    SMButtons,
  },
};
</script>
