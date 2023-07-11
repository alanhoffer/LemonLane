<script setup lang="ts">

import RegisterComponent from '@/components/auth/RegisterComponent.vue';
import ChangeOptionComponent from '@/components/auth/ChangeOptionComponent.vue';
import LoginComponent from '@/components/auth/LoginComponent.vue';
import Aside from '../components/Aside.vue';


</script>

<template>
  <main>
    <section class="authView">
      <ChangeOptionComponent />


      <LoginComponent />
      <RegisterComponent />
    </section>
  </main>
  <Aside>
    <template #Aside-panel>


    </template>
  </Aside>
</template>

<style scoped>
.authView {
  display: flex;
  align-items: center;
  width: 81vw;
  height: 100vh;

}
</style>
