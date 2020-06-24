<template>
  <section class="hero is-fullheight has-text-centered">
    <div class="hero-body">
      <div class="container">
        <div class="logo" />
        <h1 class="title">
          Hello I'm
          <nuxt-link to="/about">
            arch
          </nuxt-link>
        </h1>
        <div class="buttons is-centered">
          <nuxt-link class="button is-primary" to="/about">
            <span class="icon">
              <i class="mdi mdi-account-outline" />
            </span>
            <span>
              About me
            </span>
          </nuxt-link>
          <nuxt-link class="button is-primary" to="/projects">
            <span class="icon">
              <i class="mdi mdi-hammer" />
            </span>
            <span>
              Projects
            </span>
          </nuxt-link>
          <nuxt-link class="button is-primary" to="/contact">
            <span class="icon">
              <i class="mdi mdi-phone" />
            </span>
            <span>
              Contact
            </span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .hero {
    background-image: url('~assets/content/background.jpg')
  }
  .hero .logo {
    background-image: url('~assets/content/logo.png');
    margin: auto auto 1rem auto;
    width: 200px;
    height: 200px;
    background-position: center;
    background-size: cover;
    border-radius: 50%;
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
