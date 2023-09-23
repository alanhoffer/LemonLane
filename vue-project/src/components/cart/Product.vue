<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

</script>

<template>
    <main>
        <div className="cartProduct">
            <img alt="product image" src="https://i.pinimg.com/originals/2f/f7/7d/2ff77d149b32f6ac6b6664f9181ca803.png" />
            <div className="name">WILD FLOWER</div>
            <div className="size">M</div>
            <div className="color" data-color="Rojo"></div>
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
    width: 80%;
    margin: auto;
    margin-bottom:20px;
}

.cartProduct img {
    height: 80%;
    aspect-ratio: 2/2;
    object-fit: cover;
}


.cartProduct .name {
    color: #000000;
    font-size: 26px;
    font-weight: 200;

}

.cartProduct .size {
    color: #000000;
    font-size: 26px;
    font-weight: 200;
}

.cartProduct .price {
    color: #646464;
    font-size: 26px;
    font-weight: 200;
}


.cartProduct .color {
    background-color: red;
    border: 1px solid;
    border-radius: 6px;
    border-color: #646464;
    height: 20px;
    width: 20px;
}

.cartProduct .color:hover::after {
  content: attr(data-color);
  display: block;
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  color: #ffffff;
  background-color: #222222;
  padding: 5px;
  border-radius: 5px;
  white-space: nowrap;
}


.cartProduct .svg-inline--fa :hover {
  color: #c42929;
  cursor: pointer;
}

.cartProduct .svg-inline--fa {
    height: 20px;
    width: 20px;
}

</style>