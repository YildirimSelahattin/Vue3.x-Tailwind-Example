<template>
  <div class="contact">
    <TopSection />
    <div class="w-full px-5 py-10 m-auto dark:bg-gray-100 bg-gray-900">
      <div class="mb-6 text-2xl font-bold text-center text-yellow-600">
        İletişim
      </div>
      <ContactForm />
    </div>
  </div>
</template>

<script>
import ContactForm from "@/components/share/ContactForm";
import TopSection from "@/components/TopSection";
export default {
  name: "Contact",
  components: {
    ContactForm,
    TopSection,
  },
};
</script>
