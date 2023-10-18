<script setup lang="ts">

import { defineProps, defineEmits, ref } from 'vue'

const { filter, search, handleSearch, toggleModal, name, keys } = defineProps(['filter', 'search', 'handleSearch', 'toggleModal', 'name', 'keys'])


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
                <option v-for="key in keys" :value="key">{{ key.toUpperCase() }}</option>
            </select>
            <input v-model="localSearch" v-on:input="emitSearchUpdate" :placeholder='name' />
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