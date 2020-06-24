<template>
  <div id="content">
    <Header background="header.jpg" />

    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            So, who I am?
          </h1>
          <p>
            I'm arch aka Sylvain. I'm a freelance developer based in France.
          </p>
          <p>
            At this time, I'm specialized in website development.I take care to make the simplest, fastest and most efficient website possible by following the specifications imposed by the customer.
          </p>
          <p>
            In my spare time, I play video games and I also watch series and animes.
          </p>
          <p>
            I'm very particular about the details. I like everything done right. I'm also fond of new technology. I like to relax (like everyone else I think) without giving up my work.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
  .title {
    margin-bottom: 3rem;
  }
  p {
    color: #fff;
    font-size: 1.2rem;
  }
  p:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  .title::after {
    content: "";
    border-bottom: solid #fff 0.15rem;
    width: 6rem;
    display: block;
  }
</style>

<script>
import Header from '@/components/global/header.vue'

export default {
  components: {
    Header
  }
}
</script>
