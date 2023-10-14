<script setup lang="ts">
import Table from '@/components/admin/Table.vue';
import { deleteUser, getUsers } from '@/modules/API/User';
import { reactive } from 'vue';


type TUser = {
    id: string,
    name: string,
    email: string,
    role: string,
    created: string
}


const state = reactive({
    filter: 'id',
    search: '',
    headers: ["ID", "EMAIL", "NOMBRE", "APELLIDO", "ROLE"],
    keys: ["id", "name", "email", "role", "created"],
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

function filteredData() {
    const key = state.filter as keyof TUser;
    let filteredUsers: any = state.users

    state.search ? filteredUsers = state.users.filter(user => user[key].toLowerCase().startsWith(state.search.toLowerCase())) : null

    return filteredUsers;
}

async function getData() {
    const data = await getUsers();

    if (data.ok) {
        state.users = await data.json()
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
        <div class="user-list">
            <div class="user-filters">
                <h2>FILTRAR</h2>
                <select v-model="state.filter" name="filter" id="filter">
                    <option value="id">ID</option>
                    <option value="name">NAME</option>
                    <option value="email">EMAIL</option>
                    <option value="role">ROLE</option>
                    <option value="created">CREATED</option>
                </select>
                <input v-model="state.search" placeholder="Buscar usuario" />
                <button @click="filteredData()">AGREGAR</button>
            </div>
            <Table :headers="state.headers" :keys="state.keys" :data="filteredData()" :editar="editarUsuario"
                :eliminar="eliminarUsuario">
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