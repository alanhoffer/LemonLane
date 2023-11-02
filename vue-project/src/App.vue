<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarVue from './components/Navbar.vue';
</script>

<template>
    <RouterView name="navbar" />
    <RouterView />
</template>

<style >
* {
    box-sizing: border-box;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
}</style>
