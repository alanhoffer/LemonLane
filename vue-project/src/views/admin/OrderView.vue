<script setup lang="ts">
import LoadingVue from '@/components/Loading.vue';
import Table from '@/components/admin/Table.vue';
import { createOrder, deleteOrder, getOrders } from '@/modules/API/Order';
import { reactive } from 'vue';
import AddModalVue from '@/components/admin/order/AddModal.vue'
import SearchBar from '@/components/admin/SearchBar.vue';
import { filterData } from '@/modules/helpers/admin/filterData';
import prettierOrder from '@/modules/helpers/admin/order/prettierOrder'



type TOrder = {
    id: number;
    status: string;
    giftcard: string;
    date: string;
}


const state = reactive({
    filter: 'id',
    page: 1,
    perPage: 10,
    modalStatus: false,
    loading: true,
    search: '',
    headers: ["ID", "ESTADO", "GIFTCARD", "FECHA"],
    keys: ["id", "status", "giftcard", "date"],
    orders: <TOrder[]> [
    ],
})

function editarOrden(usuario: any) {
    // Lógica para editar un usuario
    console.log('Editar orden', usuario);
}
async function eliminarOrden(orderId: any) {
    const response = await deleteOrder(orderId)
    getDataRequest();
    console.log('Eliminar orden con ID', response);
}


function toggleModal() {
    state.modalStatus = !state.modalStatus;
}

function handleSearch() {
    const key = state.filter as keyof TOrder;
    return filterData(state.search, state.filter, state.orders, key)
}

async function createOrderRequest(formData: any) {
    const data = await createOrder(formData);
    if (data?.ok) {
        getDataRequest();
        toggleModal()
        console.log("Orden creado", data)
    }
    else {
        console.log("Error", data)
    }
}



async function getDataRequest() {
    const data = await getOrders(state.page, state.perPage);

    if (data.ok) {
        let response = await data.json();
        state.loading = false
        state.orders  = prettierOrder(response.orders);
    }
    else {
        console.log("Error", data)
    }

}

getDataRequest();
</script>

<template>
    <section class="order">
        <h1 class="orderTitle">ORDERS</h1>
        <div class="orderList">
            <h2>FILTRAR</h2>
            <SearchBar name="Buscar ordenes" :keys="state.keys" v-model:filter="state.filter" v-model:search="state.search"
                :handleSearch="handleSearch" :toggleModal="toggleModal" />
            <LoadingVue v-if="state.loading" />
            <Table v-if="!state.loading" :headers="state.headers" :keys="state.keys" :data="handleSearch()"
                :editar="editarOrden" :eliminar="eliminarOrden">
            </Table>
        </div>
        <AddModalVue v-if="state.modalStatus" :toggleModal="toggleModal" :createOrderRequest="createOrderRequest" />
    </section>
</template>


<style scoped>
.order {
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



.orderTitle {
    width: 100%;
    left: 5vw;
    text-align: left;
    color: #1e1e1e;
    font-size: 48px;
    font-weight: 100;
    margin: 50px 0;
}

.orderList {
    display: flex;
    flex-direction: column;
    left: 5vw;
    width: 76vw;
    height: 100%;
}

.orderMenu {
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