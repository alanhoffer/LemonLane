<script setup lang="ts">
const headers = ["ID", "NAME", "EMAIL", "ROLE", "CREATED"]
const keys = ["name", "age"]

const users = [
    { id: 1, nombre: 'Usuario 1', email: 'usuario1@example.com', role: 'Admin', created: '2023-10-13' },
    { id: 2, nombre: 'Usuario 2', email: 'usuario2@example.com', role: 'Usuario', created: '2023-10-14' },
]

function editarUsuario(usuario: any) {
    // Lógica para editar un usuario
    console.log('Editar usuario', usuario);
}
function eliminarUsuario(userId: any) {
    // Lógica para eliminar un usuario
    console.log('Eliminar usuario con ID', userId);
}

function filtrar() {
    // Lógica para filtrar un usuario
    console.log('Filtrando usuarios');
}

{/* get data from api || store */ }
const getData = () => {
    return
}
</script>

<template>
    <section class="user">
        <h1 class="userTitle">USERS</h1>
        <div class="user-list">
            <div class="user-filters">
                <h2>FILTRAR</h2>
                <select name="filter" id="filter">
                    <option value="id">ID</option>
                    <option value="name">NAME</option>
                    <option value="role">ROLE</option>
                    <option value="created">CREATED</option>
                </select>
                <input />
                <button @click="filtrar()">Buscar</button>
            </div>
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th v-for="header in headers" :key="header">{{ header }}</th>
                            <th>AGREGAR</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" :key="user.id">
                            <td>{{ user.id }}</td>
                            <td>{{ user.nombre }}</td>
                            <td>{{ user.email }}</td>
                            <td>{{ user.role }}</td>
                            <td>{{ user.created }}</td>
                            <td>
                                <button @click="editarUsuario(user)">Editar</button>
                                <button @click="eliminarUsuario(user.id)">Eliminar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
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

.table-container {
    margin-top: 20px;
}

table {
    width: 100%;
    border-collapse: collapse;
    background-color: #f8f8f8;
}

th,
td {
    padding: 8px;
    text-align: center;
}

thead {
    background-color: #ffffff;
    color: white;
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}

input, select{
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