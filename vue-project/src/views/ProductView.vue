<script setup lang="ts">
import Aside from '../components/Aside.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import SolidButton from '@/components/SolidButton.vue'
import { base64ToUrl } from '@/modules/helpers/base64ToUrl';
import { onMounted, reactive } from 'vue';
import type { TProduct } from '@/modules/interfaces/TProduct';
import { getProductById } from '@/modules/API/Product';
import prettierProduct from '@/modules/helpers/admin/product/prettierProduct';
import { useRoute } from 'vue-router';



const state = reactive({
    filter: 'id',
    loading: true,
    search: '',
    headers: ["ID", "NAME",  "PRICE", "DESCRIPTION"],
    keys: ["id", "name",  "price", "description"],
    product: <TProduct[]>[
    ],
    imagen: '',
    datos: {
        name: '',
        price: 0,
        description: ''
    }
})

async function getDataRequest(id:number) {
    const data = await getProductById(id);


    if (data.ok) {
        let response = await data.json();
        state.loading = false
        state.datos = response.datos;
        state.imagen = response.imagen
        console.log(state.datos)
    }
    else {
        console.log("Error", data)
    }

}
onMounted(()=>{
    const route = useRoute();
    const productId = route.params.productId;
    getDataRequest(parseInt(productId));
})




</script>

<template>
    <main>
        <section class="productView">
            <div class="slider">
                <img class="image" v-if="!state.imagen" src="" />
                <img class="image" v-if="state.imagen" :src="base64ToUrl(state.imagen)" />
                <!-- <div class="image"><p>2</p></div>
                <div class="image"><p>3</p></div> -->
            </div>
            <div class="productContainer">
                <div class="nameRate">

                    <h2 class="name">{{ state.datos.name}}</h2>
                    <div class="rate">
                        <font-awesome-icon icon="fa-solid fa-star" />
                        <font-awesome-icon icon="fa-solid fa-star" />
                        <font-awesome-icon icon="fa-solid fa-star" />
                        <font-awesome-icon icon="fa-solid fa-star" />
                        <font-awesome-icon icon="fa-regular fa-star" />
                    </div>
                </div>
                <div class="price">
                    <p>${{ state.datos.price }}</p>
                </div>
                <div class="description">
                    <h3>DESCRIPTION</h3>
                    <p>{{ state.datos.description }}</p>
                </div>
                <div class="separator"></div>
                <div class="addControl">

                    <div class="sizeContainer">
                        <h3>SIZE</h3>
                        <select name="sizeOption" id="sizeOption" required>
                            <option value="default" disabled selected>SELECT SIZE</option>
                            <option value="xs">XS</option>
                            <option value="s">S</option>
                            <option value="m">M</option>
                            <option value="l">L</option>
                            <option value="xl">XL</option>
                            <option value="xxl">XXL</option>
                            <option value="xxxl">XXXL</option>
                        </select>
                    </div>
                    <SolidButton buttonText="Add to Cart" />
                </div>
            </div>
        </section>
    </main>
    <Aside>
        <template #Aside-panel>

        </template>
    </Aside>
</template>

<style scoped>
* {
    font-weight: 400;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    color: #1e1e1e;
}

.productView {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 81vw;
    height: 100vh;
    overflow: hidden;
}

.slider {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
}

.image {
    height: 60vh;
    width: auto;
    margin: 7vh 0;
    align-items: center;
    justify-content: center;
    display: flex;
}

.image p {
    font-size: 100px;
    font-weight: bold;
    color: #fff;
    margin: auto;
}

.productContainer {
    width: 50%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.name {
    font-size: 48px;
    font-weight: 200;
}

.rate .svg-inline--fa {
    height: 16px;
    width: 16px;
    margin-left: 3px;
}

.price p {
    font-size: 1.5rem;
}

.description{
    width: 60%;
}
.description h3{
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 1rem;
}
.separator{
    width: 60%;
    height: 2px;
    background-color: #1e1e1e44;
}

.addControl {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 60%;
}
</style>
