<script setup lang="ts">
import { logout } from '@/modules/API/Auth';
</script>

<template>
  <main>
    <button @click="logout"> LOGOUT </button>
  </main>
</template>
