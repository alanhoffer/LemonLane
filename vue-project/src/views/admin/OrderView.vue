<script setup lang="ts">
import LoadingVue from '@/components/Loading.vue';
import Table from '@/components/admin/Table.vue';
import { deleteOrder, getOrders } from '@/modules/API/Order';
import { reactive } from 'vue';
import ModalVue from '@/components/admin/order/Modal.vue'


type TOrder = {
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
    headers: ["ID", "ESTADO", "FECHA", "GIFTCARD"],
    keys: ["id", "status", "date", "giftcard"],
    orders: [
    ],
})

function editarOrden(usuario: any) {
    // Lógica para editar un usuario
    console.log('Editar orden', usuario);
}
async function eliminarOrden(orderId: any) {
    const response = await deleteOrder(orderId)
    getData();
    console.log('Eliminar orden con ID', response);
}


function toggleModal() {
    state.modalStatus = !state.modalStatus;
}

function filteredData() {
    const key = state.filter as keyof TOrder;
    let filteredorders: any = state.orders

    if (state.search && state.filter != 'id') {
        filteredorders = state.orders.filter((order: TOrder) => order[key].toLowerCase().startsWith(state.search.toLowerCase()))
    }
    if (state.search && state.filter == 'id') {
        filteredorders = state.orders.filter((order: TOrder) => order.id == state.search)
    }
    console.log(state.filter)

    return filteredorders;
}

async function getData() {
    const data = await getOrders(state.page, state.perPage);

    if (data.ok) {
        let response = await data.json();
        state.loading = false
        state.orders = response.orders;
    }
    else {
        console.log("Error", data)
    }
}

getData();
</script>

<template>
    <section class="order">
        <h1 class="orderTitle">ORDERS</h1>
        <div class="orderList">
            <h2>FILTRAR</h2>
            <div class="orderMenu">
                <div class="orderFilters">
                    <select v-model="state.filter" name="filter" id="filter">
                        <option value="id">ID</option>
                        <option value="status">ESTADO</option>
                        <option value="date">FECHA</option>
                        <option value="giftcard">GIFTCARD</option>
                    </select>
                    <input v-model="state.search" placeholder="Buscar orden" />
                    <button @click="filteredData()">BUSCAR</button>
                </div>
                <button @click="toggleModal">AGREGAR</button>
            </div>
            <LoadingVue v-if="state.loading" />
            <Table v-if="!state.loading" :headers="state.headers" :keys="state.keys" :data="filteredData()"
                :editar="editarOrden" :eliminar="eliminarOrden">
            </Table>
        </div>
        <ModalVue v-if="state.modalStatus" :toggleModal="toggleModal" />
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