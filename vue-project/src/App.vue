<script setup lang="ts">
import {  RouterView } from 'vue-router'
import NavbarVue from './components/Navbar.vue';
</script>

<template>
  
  <NavbarVue />

  <RouterView />

  <aside>
    aside
  </aside>
</template>

<style scoped></style>
