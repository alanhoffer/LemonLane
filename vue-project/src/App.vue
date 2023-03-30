<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import AsideVue from './components/Aside.vue';
import NavbarVue from './components/Navbar.vue';
</script>

<template>
  <NavbarVue />

  <RouterView />

  <AsideVue />
</template>

<style scoped></style>
