<script setup lang="ts">

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { reactive } from 'vue';


const state = reactive({
  isVisible: true,
});

const toggleVisible = () => {
    state.isVisible = !state.isVisible
}




</script>

<template>
    <section class="changeOption" :class="{active: state.isVisible }">
        <h2 class="changeOptionTitle"> 
            {{ state.isVisible ? 'You don’t have an account?':'You already have an account?' }}
        </h2>
        <button @click="toggleVisible" id="changeOptionBtn">
            {{ state.isVisible ? 'SIGN UP':'LOG IN' }}
        </button>
    </section>

</template>

<style scoped>
* {
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  color: white;
}
.changeOption{
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 1;
    height: 100vh;
    width:40.5vw;
    top:0;
    transition: all 0.25s ease-in;
    position:absolute;
    background-color: #1e1e1e;
}

.changeOption.active{
    transform: translateX(40.5vw);
}

.changeOptionTitle{
    font-weight: 100;
    font-size: 64px;
    padding:0px 100px;
    box-sizing: border-box;
}

#changeOptionBtn{
  right: 0;
  width: 25%;
  margin-top: 30px;
  padding: 10px;
  background-color: #D53232;
  color: #ffffff;
  border: none;
  text-align: center;
}

#changeOptionBtn:hover{
  background-color: #D53232ee;
  cursor: pointer;

}


</style>
