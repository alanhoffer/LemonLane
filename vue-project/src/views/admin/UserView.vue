<script setup lang="ts">
import LoadingVue from '@/components/Loading.vue';
import Table from '@/components/admin/Table.vue';
import { deleteUser, getUsers } from '@/modules/API/User';
import { reactive } from 'vue';
import ModalVue from '@/components/admin/user/Modal.vue'
import { filterData } from '@/modules/helpers/admin/filterData'
import SearchBar from '@/components/admin/SearchBar.vue';


type TUser = {
    id: string,
    name: string,
    email: string,
    role: string,
    created: string
}


const state = reactive({
    filter: 'id',
    page: 1,
    perPage: 10,
    modalStatus: false,
    loading: true,
    search: '',
    headers: ["ID", "EMAIL", "NOMBRE", "APELLIDO"],
    keys: ["id", "email", "name", "lname"],
    users: [
    ],
})

function editarUsuario(usuario: any) {
    // Lógica para editar un usuario
    console.log('Editar usuario', usuario);
}
async function eliminarUsuario(userId: any) {
    const response = await deleteUser(userId)
    getData();
    console.log('Eliminar usuario con ID', response);
}


function toggleModal(){
    state.modalStatus = !state.modalStatus;
}

function handleSearch(){
    const key = state.filter as keyof TUser;
    return filterData(state.search, state.filter, state.users, key)
}


async function getData() {
    console.log(state.filter)
    const data = await getUsers(state.page, state.perPage);

    if (data.ok) {
        let response = await data.json();
        state.loading = false
        state.users = response.users;
    }
    else {
        console.log("Error", data)
    }
}

getData();
</script>

<template>
    <section class="user">
        <h1 class="userTitle">USERS</h1>
        <div class="userList">
            <h2>FILTRAR</h2>
            <SearchBar v-model:filter="state.filter" v-model:search="state.search" :handleSearch="handleSearch" :toggleModal="toggleModal" />
            <LoadingVue v-if="state.loading" />
            <Table v-if="!state.loading" :headers="state.headers" :keys="state.keys" :data="handleSearch()"
                :editar="editarUsuario" :eliminar="eliminarUsuario">
            </Table>
        </div>
        <ModalVue v-if="state.modalStatus" :toggleModal="toggleModal" />
    </section>
</template>


<style scoped>
.user {
    position: relative;
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

.userList {
    display: flex;
    flex-direction: column;
    left: 5vw;
    width: 76vw;
    height: 100%;
}

</style>