<template>
  <div class="contact">
    <TopSection />
    <ContactForm />
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
