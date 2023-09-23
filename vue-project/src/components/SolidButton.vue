<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  buttonText: {
    type: String,
  },
});
</script>

<template>

        <button id="logBtn">{{ buttonText }}</button>
</template>



<style scoped>
* {
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  color: #1e1e1e;
}

#logBtn{
  right: 0;
  width: 25%;
  max-width: 150px;
  margin-top: 30px;
  padding: 10px ;
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