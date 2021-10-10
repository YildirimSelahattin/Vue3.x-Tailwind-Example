<template>
<div class="app /dark">
  <MasterHeader/>
  <router-view/>
  <MasterFooter/>
</div>

</template>

<script>
import MasterHeader from '@/components/Header'
import MasterFooter from '@/components/Footer'


export default {
  name : "App",
  components: {
    MasterHeader,
    MasterFooter,
  }
}
</script>

<style lang="scss"></style>
