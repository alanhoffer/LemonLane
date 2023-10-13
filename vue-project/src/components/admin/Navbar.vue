<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

</script>

<template>
  <main>

    <div class="navbar-container">
      <RouterLink to="/admin/"><img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /></RouterLink>

      <div class="wrapper">
        <nav>
          <RouterLink to="/admin/">HOME</RouterLink>
          <RouterLink to="/admin/user">USERS</RouterLink>
          <RouterLink to="/admin/order">ORDERS</RouterLink>
          <RouterLink to="/admin/category">CATEGORY</RouterLink>
          <RouterLink to="/admin/product">PRODUCTS</RouterLink>
          <RouterLink to="/admin/collection">COLLECTIONS</RouterLink>
        </nav>
      </div>
      <div class="social-media">
        <a href="">
          <font-awesome-icon icon="fa-brands fa-square-facebook" />
        </a>
        <a href="">
          <font-awesome-icon icon="fa-brands fa-instagram" />
        </a>
        <a href="">
          <font-awesome-icon icon="fa-brands fa-twitter" />
        </a>
      </div>
    </div>
  </main>
</template>

<style scoped>
.navbar-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  height: 100vh;
  min-width: 13vw;
}


.navbar-container a {
  margin: auto;
}

.wrapper {
  height: 60%;
  display: flex;
  justify-content: center;
}

.wrapper nav {
  display: flex;
  flex-direction: column;
}

.wrapper nav a {
  margin: 0.5rem;
  font-weight: 500;
  color: black;
}

.social-media {

  display: flex;
  align-items: center;
  justify-content: center;

  height: 10%;
  width: 100%;


}

.social-media a {
  margin: 0.5rem;
  color: black;
}

.social-media a svg{
  font-size: 24px;
}
</style>
