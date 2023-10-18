<script setup lang="ts">
import SolidButtonVue from '@/components/SolidButton.vue';
import { defineProps } from 'vue';
import { reactive } from 'vue';


defineProps({
    toggleModal: {
        type: Function,
        required: true
    },
    createOrderRequest: {
        type: Function,
        required: true
    }
})

const formData = reactive({
    status: "",
    user: Number,
    giftcard: "",
});

</script>

<template>
    <div class="modalContainer">
        <h1 class="modalTitle"> AGREGAR UN USUARIO </h1>
        <div class="input-container">
            <select v-model="formData.status"  >
                <option hidden selected>Selecciona una opción</option>
                <option value="review">Revision</option>
                <option value="sended">Enviada</option>
                <option value="completed">Completada</option>
            </select>
            <input v-model="formData.user" type="number" placeholder="Usuario" />
            <input v-model="formData.giftcard" placeholder="Giftcard" />
        </div>
        <div class="buttonContainer">
            <SolidButtonVue buttonText="CANCELAR" v-on:click="toggleModal()" />
            <SolidButtonVue buttonText="AGREGAR" v-on:click="createOrderRequest(formData)" />
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

.modalContainer input,select {
    margin: 5px 0px;
    padding: 10px;
    width: 100%;
}
#choice option { color: black; }
.empty { color: gray; }


.buttonContainer {
    width: 100%;
    display: flex;
    justify-content: flex-end
}
</style>