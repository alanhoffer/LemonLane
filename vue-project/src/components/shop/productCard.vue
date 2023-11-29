<script setup lang="ts">
import { base64ToUrl } from '@/modules/helpers/base64ToUrl';

const props = defineProps(['product']);

</script>

<template>
    <main>
        <div class="productCard">
            <img v-if="!props.product.imagen" src="" />
            <img v-if="props.product.imagen" :src="base64ToUrl(props.product.imagen)" />

            <div class="cardData">
                <h4>{{ props.product.name}}</h4>
                <p>${{ props.product.price }}</p>
            </div>

            <ul class="sizes">
                <!-- <li v-for="size in props.product" :key="size.name">{{ size.name }}</li> -->
                <li>S</li>
                <li>M</li>
                <li>L</li>
                <li>XL</li>
                <li>XXL</li>
            </ul>
        </div>

    </main>
</template>


<style scoped>
* {
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: #1e1e1e;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.sizes {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
}

.sizes li {
    user-select: none;
    list-style: none;
    width: 15%;
    font-size: 0.8em;
    text-align: center;
    color: #999999;
    border: 1px solid #999999;
    margin: 2.5px;
}

.sizes li.noStock {
    display: none;
}

.cardData {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 20px;
}

.productCard {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 320px;
}

.productCard:hover {
    cursor: pointer;
    box-shadow: 0px 0px 7px #1e1e1eaa;
}

.productCard h4 {
    font-size: .8rem;
    color: #686868
}


.productCard img {
    width: 100%;
    height: 240px;
    object-fit: cover;
}
</style>