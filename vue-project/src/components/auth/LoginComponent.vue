<script setup lang="ts">

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { reactive } from 'vue';
import { login } from '@/modules/API/Auth';

const loginState = reactive({
  email: '',
  password:'',
})



</script>

<template>
  <main>
    <div class="loginContainer">
        <h1 class="loginTitle">LOG IN</h1>
        <div class="loginForm">
            <input type="email" placeholder="Email" v-model="loginState.email" /> 
            <input type="Password" placeholder="Password" v-model="loginState.password"/> 
        </div>
        <button id="logBtn" @click="login(loginState.email, loginState.password)"> Log in </button>
    </div>
  </main>

</template>


<style scoped>
* {
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  color: #1e1e1e;
}
.loginContainer{
    width:40.5vw;
    display:flex;
    align-items:center;
    justify-content: space-between;
    flex-direction: column;

}

.loginTitle {
    width:22.5vw;
    color: #1e1e1e;
    font-size: 48px;
    font-weight: 100;
    margin-bottom: 30px;
}

.loginForm {
    display:flex;
    flex-direction:column;
}

.loginForm input{
    width:22.5vw;
    margin-top: 1rem;
    padding: 1rem;
}
input {
  border: 1px solid #999;
}
 

#logBtn{
  right: 0;
  width: 25%;
  margin-top: 2rem;
  padding: 10px;
  background-color: #1e1e1e;
  color: #ffffff;
  border: none;
  text-align: center;
}

#logBtn:hover{
  background-color: #303030;
  cursor: pointer;

}




</style>