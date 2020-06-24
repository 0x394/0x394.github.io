<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <!--a class="navbar-item" href="/">
            <img src="" width="112" height="28">
      </a-->

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbar-items"
        :class="{ 'is-active': showNav }"
        @click="showNav = !showNav"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div id="navbar-items" class="navbar-menu" :class="{ 'is-active': showNav }">
      <div class="navbar-start" />

      <div class="navbar-end">
        <nuxt-link active-class="is-active" class="navbar-item" to="/" exact>
          <span class="icon">
            <i class="mdi mdi-home" />
          </span>
          <span>Home</span>
        </nuxt-link>
        <nuxt-link active-class="is-active" class="navbar-item" to="/about" exact>
          <span class="icon">
            <i class="mdi mdi-account-outline" />
          </span>
          <span>About</span>
        </nuxt-link>
        <nuxt-link active-class="is-active" class="navbar-item" to="/projects" exact>
          <span class="icon">
            <i class="mdi mdi-hammer" />
          </span>
          <span>Projects</span>
        </nuxt-link>
        <nuxt-link active-class="is-active" class="navbar-item" to="/contact" exact>
          <span class="icon">
            <i class="mdi mdi-phone" />
          </span>
          <span>Contact</span>
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      showNav: false
    }
  }
}
</script>

<style scoped>
.navbar-item.has-dropdown .navbar-dropdown {
  display: none;
}
.navbar-item.has-dropdown.is-active .navbar-dropdown {
  display: block;
}

.navbar {
  box-shadow: 0 2px 15px 1px rgba(0, 0, 0, 0.16);
}

.navbar-dropdown a.navbar-item:focus,
.navbar-dropdown a.navbar-item:hover,
.navbar-link.is-active,
.navbar-link:focus,
.navbar-link:focus-within,
.navbar-link:hover,
a.navbar-item.is-active,
a.navbar-item:focus,
a.navbar-item:focus-within,
a.navbar-item:hover {
  background-color: #fff;
  color: #c0392b;
}

.navbar .icon .material-icons {
  font-size: 20px !important;
  font-weight: 500;
}

.navbar-link:not(.is-arrowless)::after {
  border-color: #c0392b;
}

.navbar-link:hover:not(.is-arrowless)::after {
  border-color: #c0392b;
}

.navbar-dropdown {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.16);
}

.navbar-dropdown a.navbar-item.is-active {
  color: #c0392b;
}

@media screen and (min-width: 1025px) {
  .navbar-item.is-hoverable:hover .navbar-dropdown {
    display: block !important;
  }
  .navbar-item.is-hoverable:focus-within .navbar-dropdown {
    display: none;
  }
}

a.navbar-item.logout,
a.navbar-item.logout.is-active,
a.navbar-item.logout:focus,
a.navbar-item.logout:focus-within,
a.navbar-item.logout:hover {
  background-color: #fff;
  color: #c0392b;
}
</style>
