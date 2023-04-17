<script setup lang="ts">

import RegisterComponent from '@/components/auth/RegisterComponent.vue';
import ChangeOptionComponent from '@/components/auth/ChangeOptionComponent.vue';
import LoginComponent from '@/components/auth/LoginComponent.vue';
import AsideVue from '../components/Aside.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


</script>

<template>
  <main>
    <section class="authView">
        <ChangeOptionComponent  />


        <LoginComponent />
        <RegisterComponent />
    </section>
  </main>
  <AsideVue  >
      <template #Aside-panel >

          
      </template>
    </AsideVue>
</template>

<style scoped>
.authView{
    display:flex;
    align-items: center;
    width: 81vw;
    height: 100vh;

}

</style>
