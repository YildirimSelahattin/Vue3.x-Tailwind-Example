<template>
  <header>
    <nav id="header" class="w-full z-30 top-0 py-1 bg-gray-900">
      <div
        class="
          w-full
          container
          mx-auto
          flex flex-wrap
          items-center
          justify-between
          mt-0
          px-6
          py-3
          
        "
      >
        <label for="menu-toggle" class="cursor-pointer md:hidden block">
          <svg
            class="fill-current text-yellow-600"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input class="hidden" type="checkbox" id="menu-toggle" />

        <div
          class="
            hidden
            md:flex md:items-center md:w-auto
            w-full
            order-3
            md:order-1
          "
          id="menu"
        >
          <nav>
            <ul
              class="
                md:flex
                items-center
                justify-between
                text-base text-gray-700
                pt-4
                md:pt-0
              "
            >
              <li>
                <router-link
                  to="./home"
                  class="
                    inline-block
                    no-underline
                    text-yellow-600
                    hover:text-yellow-400
                    py-2
                    px-4
                  "
                  >Anasayfa</router-link
                >
              </li>
              <li>
                <router-link
                  to="/product"
                  class="
                    inline-block
                    no-underline
                    text-yellow-600
                    hover:text-yellow-400
                    py-2
                    px-4
                  "
                  >Ürünler</router-link
                >
              </li>
              <li>
                <router-link
                  to="/about"
                  class="
                    inline-block
                    no-underline
                    text-yellow-600
                    hover:text-yellow-400
                    py-2
                    px-4
                  "
                  >Hakkımızda</router-link
                >
              </li>
              <li>
                <router-link
                  to="/contact"
                  class="
                    inline-block
                    no-underline
                    text-yellow-600
                    hover:text-yellow-400
                    py-2
                    px-4
                  "
                  >İletişim</router-link
                >
              </li>
            </ul>
          </nav>
        </div>

        <div class="">
          <router-link
            to="/home"
            class="
              flex
              items-center
              tracking-wide
              no-underline
              hover:no-underline
              font-bold
              text-gray-800 text-xl
            "
            ><img class="w-7/12" src="img/logo.png"
          /></router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "MainHeader",
};
</script>

<style scoped>
.work-sans {
  font-family: "Work Sans", sans-serif;
}

#menu-toggle:checked + #menu {
  display: block;
}

.hover\:grow {
  transition: all 0.3s;
  transform: scale(1);
}

.hover\:grow:hover {
  transform: scale(1.02);
}
</style>
>
