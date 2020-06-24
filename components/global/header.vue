<template>
  <section class="hero header has-text-centered" :style="background ? `background-image: url(${backgroundRender})`: null">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {{ title || this.$route.name.split('').map((l,i) => i == 0 ? l.toUpperCase() : l).join('') }}
        </h1>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .hero.header {
    background-position: middle
  }
  .title::after {
    content: "";
    border-bottom: solid #fff 0.1rem;
    width: 4rem;
    display: block;
    margin: auto;
  }
</style>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    background: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      backgroundRender: this.background ? require(`@/assets/content/${this.background}`) : null
    }
  }
}
</script>
