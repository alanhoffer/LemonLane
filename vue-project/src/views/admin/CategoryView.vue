<script setup lang="ts">
import Table from '@/components/admin/Table.vue';
import { getCategorys, deleteCategory } from '@/modules/API/Category';
import { reactive } from 'vue';


type TCategory = {
    id: string,
    name: string,
}


const state = reactive({
    filter: 'id',
    page: 1,
    perPage: 10,
    search: '',
    headers: ["ID", "NOMBRE"],
    keys: ["id", "name"],
    categorys: [
    ],
})

function editarCategoria(categoryId: any) {
    // Lógica para editar un usuario
    console.log('Editar usuario', categoryId);
}
async function eliminarCategoria(categoryId: any) {
    const response = await deleteCategory(categoryId)
    getData();
    console.log('Eliminar usuario con ID', response);
}

function filteredData() {
    const key = state.filter as keyof TCategory;
    let filteredCategorys: any = state.categorys

    state.search ? filteredCategorys = state.categorys.filter((category: TCategory) => category[key].toLowerCase().startsWith(state.search.toLowerCase())) : null

    return filteredCategorys;
}

async function getData() {
    const data = await getCategorys();

    if (data.ok) {
        let response = await data.json();
        state.categorys = response;
    }
    else {
        console.log("Error", data)
    }
}

getData();
</script>

<template>
    <section class="user">
        <h1 class="userTitle">CATEGORY</h1>
        <div class="user-list">
            <div class="user-filters">
                <h2>FILTRAR</h2>
                <select v-model="state.filter" name="filter" id="filter">
                    <option value="id">ID</option>
                    <option value="name">NAME</option>
                </select>
                <input v-model="state.search" placeholder="Buscar categoria" />
                <button @click="filteredData()">BUSCAR</button>
            </div>
            <Table :headers="state.headers" :keys="state.keys" :data="filteredData()" :editar="editarCategoria"
                :eliminar="eliminarCategoria">
            </Table>
        </div>
    </section>
</template>


<style scoped>
.user {

    width: 81vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding-bottom: 30px;
}

* {
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    color: #1e1e1e;
}



.userTitle {
    width: 100%;
    left: 5vw;
    text-align: left;
    color: #1e1e1e;
    font-size: 48px;
    font-weight: 100;
    margin: 50px 0;
}

.user-list {
    display: flex;
    flex-direction: column;
    left: 5vw;
    width: 76vw;
}

input,
select {
    padding: 4px 10px;
    margin-right: 5px;
}


button {
    background-color: black;
    color: white;
    border: none;
    padding: 6px 10px;
    cursor: pointer;
    margin-right: 5px;
}

button:hover {
    background-color: white;
    color: black;
}
</style>