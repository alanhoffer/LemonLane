<script setup lang="ts">

import { ref } from 'vue'

const { filter, search, handleSearch, toggleModal } = defineProps(['filter', 'search', 'handleSearch', 'toggleModal'])

const emits = defineEmits()

const localFilter = ref(filter)
const localSearch = ref(search)

const emitFilterUpdate = () => emits('update:filter', localFilter)
const emitSearchUpdate = () => emits('update:search', localSearch)

</script>

<template>
    <div class="userMenu">
        <div class="userFilters">
            <select v-model="localFilter" v-on:input="emitFilterUpdate" name="filter" id="filter">
                <option value="id">ID</option>
                <option value="name">NAME</option>
                <option value="lname">APELLIDO</option>
                <option value="email">EMAIL</option>
            </select>
            <input v-model="localSearch" v-on:input="emitSearchUpdate" placeholder="Buscar usuario" />
            <button @click="handleSearch">BUSCAR</button>
        </div>
        <button @click="toggleModal">AGREGAR</button>
    </div>
</template>


<style scoped>
.userMenu {
    display: flex;
    justify-content: space-between;
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