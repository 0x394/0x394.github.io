<template>
  <section class="hero is-fullheight has-text-centered">
    <div class="hero-body">
      <div class="container">
        <div class="logo" />
        <h1 class="title">
          Error {{ error.statusCode }}
        </h1>
        <h2 class="subtitle">
          {{ error.message }}
        </h2>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .hero {
    background-image: url('~assets/content/error.jpg')
  }
  .hero .logo {
    background-image: url('~assets/content/error_logo.png');
    margin: auto auto 1rem auto;
    width: 200px;
    height: 200px;
    background-position: center;
    background-size: cover;
  }
  .hero .title a {
    color: #fff;
    border-bottom: 0.1rem #fff dotted;
    transition: 0.3s;
  }
  .hero .title a:focus, .hero .title a:hover, .hero .title a:active {
    color: #c0392b;
    border-color: #c0392b;
  }
</style>

<script>
export default {
  props: {
    error: {
      type: Object,
      default () {
        return { statusCode: 404, path: null, message: 'This page could not be found' }
      }
    }
  }
}
</script>
