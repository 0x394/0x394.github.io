<template>
  <div id="content">
    <Header background="header.jpg" />

    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            You can contact me by these ways:
          </h1>
          <ul>
            <li>
              Discord:
              <span>arch#6666</span>
            </li>
            <li>
              Email:
              <span>sylvain.lefeuvre0@gmail.com</span>
            </li>
            <li>
              Telegram:
              <span>none_ac</span>
            </li>
          </ul>
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
  ul {
    margin-top: 1.5rem;
    list-style: circle;
    padding-left: 40px;
  }

  ul li {
      font-size: 20px;
      font-weight: 900;
      color: #fff;
  }

  ul li span {
      color: #ee5253;
      font-weight: 400;
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
