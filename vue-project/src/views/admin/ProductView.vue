<script setup lang="ts">
import LoadingVue from '@/components/Loading.vue';
import Table from '@/components/admin/Table.vue';
import { createProduct, deleteProduct, getProducts } from '@/modules/API/Product';
import { reactive } from 'vue';
import AddModalVue from '@/components/admin/product/AddModal.vue'
import SearchBar from '@/components/admin/SearchBar.vue';
import { filterData } from '@/modules/helpers/admin/filterData';
import prettierProduct from '@/modules/helpers/admin/product/prettierProduct'
import type { TProduct } from '@/modules/interfaces/TProduct';





const state = reactive({
    filter: 'id',
    page: 1,
    perPage: 10,
    modalStatus: false,
    loading: true,
    search: '',
    headers: ["ID", "NAME",  "PRICE", "DESCRIPTION"],
    keys: ["id", "name",  "price", "description"],
    products: <TProduct[]>[
    ],
})

function editarOrden(product: any) {
    // Lógica para editar un producto
    console.log('Editar producto', product);
}
async function eliminarOrden(productId: any) {
    const response = await deleteProduct(productId)
    getDataRequest();
    console.log('Eliminar product con ID', response);
}


function toggleModal() {
    state.modalStatus = !state.modalStatus;
}

function handleSearch() {
    const key = state.filter as keyof TProduct;
    return filterData(state.search, state.filter, state.products, key)
}

async function createproductRequest(formData: any) {
    const data = await createProduct(formData);
    if (data?.ok) {
        getDataRequest();
        toggleModal()
        console.log("Producto creado", data)
    }
    else {
        console.log("Error", data)
    }
}



async function getDataRequest() {
    const data = await getProducts(state.page, state.perPage);


    if (data.ok) {
        let response = await data.json();
        console.log(response)
        state.loading = false
        state.products = prettierProduct(response);
    }
    else {
        console.log("Error", data)
    }

}

getDataRequest();
</script>

<template>
    <section class="product">
        <h1 class="productTitle">PRODUCTS</h1>
        <div class="productList">
            <h2>FILTRAR</h2>
            <SearchBar name="Buscar productos" :keys="state.keys" v-model:filter="state.filter"
                v-model:search="state.search" :handleSearch="handleSearch" :toggleModal="toggleModal" />
            <LoadingVue v-if="state.loading" />
            <Table v-if="!state.loading" :headers="state.headers" :keys="state.keys" :data="handleSearch()"
                :editar="editarOrden" :eliminar="eliminarOrden">
            </Table>
        </div>
        <AddModalVue v-if="state.modalStatus" :toggleModal="toggleModal" :createproductRequest="createproductRequest" />
    </section>
</template>


<style scoped>
.product {
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



.productTitle {
    width: 100%;
    left: 5vw;
    text-align: left;
    color: #1e1e1e;
    font-size: 48px;
    font-weight: 100;
    margin: 50px 0;
}

.productList {
    display: flex;
    flex-direction: column;
    left: 5vw;
    width: 76vw;
    height: 100%;
}

.productMenu {
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
    bproduct: none;
    padding: 6px 10px;
    cursor: pointer;
    margin-right: 5px;
}

button:hover {
    background-color: white;
    color: black;
}
</style>