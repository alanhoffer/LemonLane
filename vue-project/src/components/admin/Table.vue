<script setup lang="ts">
import { defineProps } from 'vue';
import { base64ToUrl } from '@/modules/helpers/base64ToUrl';


const props = defineProps({
    headers: Array<any>,
    keys: Array<any>,
    data: Array<any>,
    editar: {
        type: Function,
        required: true
    },
    eliminar: {
        type: Function,
        required: true
    },
})
console.log(props.data)

</script>


<template>
    <div class="table-container">
        <table>
            <thead>
                <tr>
                    <th v-for="header in headers" :key="header">{{ header }}</th>
                    <th>ACCIONES</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in props.data" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.price }}</td>
                    <td ><img style="height: 100px;" :src="base64ToUrl(item.imagen)" alt=""></td>
                    <td>
                        <button @click="editar(data)">Editar</button>
                        <button @click="eliminar(item.id)">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
* {
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    color: #1e1e1e;
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


thead tr {
    user-select: none;
}

tbody tr:nth-child(even) {
    background-color: #f2f2f2;
}

tbody tr:hover {
    cursor: pointer;
    background-color: #dcdbdb;
}

tbody tr:nth-child(even):hover {
    background-color: #dcdbdb;
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