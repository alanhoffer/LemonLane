<script setup lang="ts">
import SolidButtonVue from '@/components/SolidButton.vue';
import { defineProps } from 'vue';
import { reactive } from 'vue';


defineProps({
    toggleModal: {
        type: Function,
        required: true
    },
    createUserRequest: {
        type: Function,
        required: true
    }
})

const formData = reactive({
    name: "",
    lname: "",
    email: "",
    password: ""
});

</script>

<template>
    <div class="modalContainer">
        <h1 class="modalTitle"> AGREGAR UN USUARIO </h1>
        <div class="input-container">
            <input v-model="formData.name" placeholder="Nombre" />
            <input v-model="formData.lname" placeholder="Apellido" />
            <input v-model="formData.email" placeholder="Email" />
            <input v-model="formData.password" placeholder="Password" />
        </div>
        <div class="buttonContainer">
            <SolidButtonVue buttonText="CANCELAR" v-on:click="toggleModal()" />
            <SolidButtonVue buttonText="AGREGAR" v-on:click="createUserRequest(formData)" />
        </div>
  
    </div>
</template>

<style scoped>
.modalContainer {
    position: absolute;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(205, 205, 205);
    display: flex;
    flex-direction: column;
    padding: 50px;
    width: 500px;
    height: fit-content;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.modalTitle {
    margin-right: 30px;
    color: #1e1e1e;
    font-size: 28px;
    font-weight: 300;
    margin-bottom: 15px;
}

.modalContainer input {
    margin: 5px 0px;
    padding: 10px;
    width: 100%;
}

.buttonContainer {
    width: 100%;
    display: flex;
    justify-content: flex-end
}
</style>