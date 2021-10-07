<template>
  <div class="home">
    <Carousel/>
  </div>
</template>

<script>
import Carousel from '@/components/share/Carousel'
export default {
  name : "Home",
  components: {
    Carousel
  }
};
</script>

<style>
.urunler {
  width: 270px;
  height: 270px;
}
</style>
