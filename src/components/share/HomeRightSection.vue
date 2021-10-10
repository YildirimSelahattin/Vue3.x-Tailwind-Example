<template>
            <div class="lg:col-start-2 lg:max-w-2xl ml-auto">
            <p class="text-2xl leading-6 font-bold text-yellow-700 dark:text-yellow-600">
              Ürünlerimiz
            </p>
            <h4
              class="
                mt-2
                text-xl
                leading-8
                font-extrabold
                text-gray-400
                dark:text-gray-500
                sm:text-xl sm:leading-9
              "
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h4>
            <p class="mt-4 text-lg leading-6 dark:text-gray-800 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem officiis optio, voluptatem dolore reiciendis
              consequuntur laudantium aperiam autem sunt libero aliquam sapiente
              voluptas dolorem minus.
            </p>
            <ul class="mt-8 md:grid md:grid-cols-2 gap-6">
              <li class="mt-6 lg:mt-0">
                <div class="flex">
                  <span
                    class="
                      flex-shrink-0 flex
                      items-center
                      justify-center
                      h-6
                      w-6
                      rounded-full
                      bg-green-100
                      dark:bg-green-200
                      text-green-800
                      dark:text-green-500
                      drark:bg-transparent
                    "
                  >
                    <svg
                      class="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span
                    class="
                      ml-4
                      text-base
                      leading-6
                      font-medium
                      text-gray-500
                      dark:text-gray-800
                    "
                  >
                    Ücretsiz kurulum
                  </span>
                </div>
              </li>
              <li class="mt-6 lg:mt-0">
                <div class="flex">
                  <span
                    class="
                      flex-shrink-0 flex
                      items-center
                      justify-center
                      h-6
                      w-6
                      rounded-full
                      bg-green-100
                                            dark:bg-green-200
                      text-green-800
                      dark:text-green-500
                      drark:bg-transparent
                    "
                  >
                    <svg
                      class="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span
                    class="
                      ml-4
                      text-base
                      leading-6
                      font-medium
                      text-gray-500
                      dark:text-gray-800
                    "
                  >
                    Mimari Danışmanlık
                  </span>
                </div>
              </li>
              <li class="mt-6 lg:mt-0">
                <div class="flex">
                  <span
                    class="
                      flex-shrink-0 flex
                      items-center
                      justify-center
                      h-6
                      w-6
                      rounded-full
                      bg-green-100
                                            dark:bg-green-200
                      text-green-800
                      dark:text-green-500
                      drark:bg-transparent
                    "
                  >
                    <svg
                      class="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span
                    class="
                      ml-4
                      text-base
                      leading-6
                      font-medium
                      text-gray-500
                      dark:text-gray-800
                    "
                  >
                    7/24 destek
                  </span>
                </div>
              </li>
              <li class="mt-6 lg:mt-0">
                <router-link to="/product" class="flex">
                  <span
                    class="
                      hidden
                      flex-shrink-0
                      /flex
                      items-center
                      justify-center
                      h-6
                      w-6
                      rounded-full
                      bg-green-100
                      text-green-800
                      dark:text-green-500
                      drark:bg-transparent
                    "
                  >
                    <svg
                      class="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span
                    class="
                      text-lg
                      hover:underline hover:text-yellow-700
                      leading-6
                      font-medium
                      text-yellow-500
                      dark:text-yellow-600
                    "
                  >
                    Tüm ürünleri gör...
                  </span>
                </router-link>
              </li>
            </ul>
          </div>
</template>

<script>
export default {
  name: "HomeRightSection",
  components: {

  },
};
</script>

<style>

</style>