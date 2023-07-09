<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

</script>

<template>
    <main>
        <div className="cartProduct">
            <img alt="product image" src="https://i.pinimg.com/originals/2f/f7/7d/2ff77d149b32f6ac6b6664f9181ca803.png" />
            <div className="name">WILD FLOWER</div>
            <div className="size">M</div>
            <div className="color"></div>
            <div className="price">$120.0</div>
            <font-awesome-icon icon="fa-solid fa-trash" />
        </div>
    </main>
</template>


<style scoped> 
.cartProduct {
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 150px;
    width: 100%;
    margin-bottom:10px;
}

.cartProduct img {
    height: 100%;
    width: 140px;
    object-fit: cover;
}


.cartProduct .name {
    color: #000000;
    font-size: 26px;
    font-weight: 100;

}

.cartProduct .size {
    color: #000000;
    font-family: "Poppins-Thin", Helvetica;
    font-size: 26px;
    font-weight: 100;
}

.cartProduct .price {
    color: #646464;
    font-family: "Poppins-Regular", Helvetica;
    font-size: 26px;
    font-weight: 400;
}


.cartProduct .color {
    background-color: #ffffff;
    border: 3px solid;
    border-color: #000000;
    height: 26px;
    width: 26px;
}

.cartProduct .svg {
    height: 20px;
    width: 20px;
}

</style>