<script setup lang="ts">
import SolidButtonVue from '@/components/SolidButton.vue';
import { defineProps, onMounted } from 'vue';
import { reactive, ref } from 'vue';
import { getCollections } from '@/modules/API/Collection';
import { getCategories } from '@/modules/API/Category';

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
    price: null,
    description: "",
    collection: 0,
    category: 0
});

type TCollection = {
    id: string,
    name: string,
    description: string,
    imagen: object
}
type TCategory = {
    id: string,
    name: string,
}
const data = reactive({
    collectionsData:<TCollection[]> [],
    categoriesData:<TCategory[]> []
});



onMounted(async () => {
    const dataCat = await getCategories();
    const dataCol = await getCollections();

    if (dataCat.ok) {
        let response = await dataCat.json();
        data.categoriesData = response;
    }
    else {
        console.log("Error", dataCat)
    }   


    if (dataCol.ok) {
        let response = await dataCol.json();
        data.collectionsData = response;
    }
    else {
        console.log("Error", dataCol)
    }


});

</script>

<template>
    <div class="modalContainer">
        <h1 class="modalTitle"> AGREGAR UN PRODUCTO </h1>
        <div class="input-container">
            <input v-model="formData.name" placeholder="Name" />
            <input type="number" min="0" v-model="formData.price" placeholder="Price"  />
            <input v-model="formData.description" placeholder="Description" />
            <select v-model="formData.collection">
                <option disabled value="0">SELECT A COLLECTION</option>
                <option v-for="e in data.collectionsData" :value="e.id">{{ e.name }}</option>
            </select>
            <select v-model="formData.category">
                <option disabled value="0">SELECT A CATEGORY</option>
                <option v-for="e in data.categoriesData" :value="e.id">{{ e.name }}</option>
            </select>
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
    justify-content: flex-end;
}

.buttonContainer *{
    margin-left: 10px;
}
select{
    width: 100%;
    margin: 5px 0;
}
</style>