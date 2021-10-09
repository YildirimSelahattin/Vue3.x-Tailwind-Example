<template>
  <form
    class="flex"
    form
    id="fs-frm"
    name="simple-contact-form"
    accept-charset="utf-8"
    action="https://formspree.io/f/xwkaydgk"
    method="post"
  >
    <div class="grid max-w-xl grid-cols-2 gap-4 m-auto">
      <div class="col-span-2 lg:col-span-1">
        <div class="relative">
          <input
            type="text"
            name="name"
            id="full-name"
            required=""
            class="
              rounded-lg
              border-transparent
              flex-1
              appearance-none
              border border-gray-300
              w-full
              py-2
              px-4
              bg-white
              text-gray-700
              placeholder-gray-400
              shadow-sm
              text-base
              focus:outline-none
              focus:ring-2
              focus:ring-purple-600
              focus:border-transparent
            "
            placeholder="isim"
          />
        </div>
      </div>
      <div class="col-span-2 lg:col-span-1">
        <div class="relative">
          <input
            type="email"
            name="_replyto"
            id="email-address"
            required=""
            class="
              rounded-lg
              border-transparent
              flex-1
              appearance-none
              border border-gray-300
              w-full
              py-2
              px-4
              bg-white
              text-gray-700
              placeholder-gray-400
              shadow-sm
              text-base
              focus:outline-none
              focus:ring-2
              focus:ring-purple-600
              focus:border-transparent
            "
            placeholder="email"
          />
        </div>
      </div>
      <div class="col-span-2">
        <label class="text-gray-700" for="name">
          <textarea
            rows="5"
            name="message"
            id="message"
            required=""
            class="
              flex-1
              appearance-none
              border border-gray-300
              w-full
              py-2
              px-4
              bg-white
              text-gray-700
              placeholder-gray-400
              rounded-lg
              text-base
              focus:outline-none
              focus:ring-2
              focus:ring-purple-600
              focus:border-transparent
            "
            cols="40"
          >
          </textarea>
        </label>
      </div>
      <input
        type="hidden"
        name="_subject"
        id="email-subject"
        value="Contact Form Submission"
      />
      <div class="col-span-2 text-right">
        <input
          type="submit"
          value="Submit"
          class="
            py-2
            px-4
            bg-gradient-to-tl
            from-red-600
            to-yellow-600
            hover:grow
            focus:ring-yellow-500
            text-white
            w-full
            transition
            ease-in
            duration-200
            text-center text-base
            font-semibold
            shadow-md
            focus:outline-none focus:ring-2
            rounded-lg
          "
        />
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "ContactForm",
  components: {},
};
</script>

<style></style>
