<template>
  <div id="app">
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>
import Navbar from '@/components/global/navbar.vue'

export default {
  components: {
    Navbar
  },
  transition: 'default',
  head () {
    return {
      title: `arch.wtf | ${this.$route.name}`
    }
  }
}
</script>
