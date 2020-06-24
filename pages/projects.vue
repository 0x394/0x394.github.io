<template>
  <div id="content">
    <Header background="header.jpg" />

    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered is-multiline">
            <div v-for="(project, index) in projects" :key="index" class="column has-text-centered is-half-tablet is-two-fifths-desktop is-one-third-widescreen is-one-quarter-fullhd">
              <div class="box-items" :style="`background-image: url(${require(`@/assets/content/${project.img}`)})`" @click="project.show = !project.show">
                <img :src="require(`@/assets/content/${project.img}`)" style="opacity: 0">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div v-for="(project, index) in projects" :key="index">
      <div class="modal" :class="{ 'is-active': project.show }">
        <div class="modal-background" @click="project.show = !project.show" />
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">
              {{ project.name }}
            </p>
            <button class="delete" aria-label="close" @click="project.show = !project.show" />
          </header>
          <section class="modal-card-body">
            {{ project.description }}
          </section>
          <footer class="modal-card-foot">
            <a class="button is-primary" :href="project.url" :disabled="!project.url" target="blank">
              Visit
            </a>
            <button class="button" @click="project.show = !project.show">
              Back
            </button>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .box-items {
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);
    transition: 0.3s;
    background-position: bottom;
    background-size: cover;
    height: 100%;
  }
  .box-items:hover {
    transform: scale(1.1);
    border: 0;
  }
  .box-items img {
    width: 100%;
    height: auto;
  }
  .modal-card-foot, .modal-card-head {
    border-radius: 2px;
  }
  .modal-card-title {
    font-weight: 900;
    font-family: 'Poppins', sans-serif;
  }
</style>

<script>
import Header from '@/components/global/header.vue'

export default {
  components: {
    Header
  },
  data () {
    return {
      projects: [
        {
          name: 'Cute Waifus',
          img: 'cute-waifus-club.gif',
          url: 'https://cute-waifus.club',
          description: 'This is my personnal file uploader. I have make front and backend of the project. Contact me if you would like an access!',
          show: false
        },
        {
          name: 'Instant SMS',
          img: 'instants.ms.gif',
          url: 'https://instants.ms',
          description: 'I have make the front end of this project. This project is my first using Nuxt. The backend made by Init.',
          show: false
        }
      ]
    }
  }
}
</script>
