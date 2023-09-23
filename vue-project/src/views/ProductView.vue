<script setup lang="ts">
import Aside from '../components/Aside.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import SolidButton from '@/components/SolidButton.vue'


</script>

<template>
    <main>
        <section class="productView">
            <div class="slider"></div>
            <div class="productContainer">
                <h2 class="name"></h2>
                <div class="rate">
                    <font-awesome-icon icon="fa-solid fa-star" />
                    <font-awesome-icon icon="fa-solid fa-star" />
                    <font-awesome-icon icon="fa-solid fa-star" />
                    <font-awesome-icon icon="fa-solid fa-star" />
                    <font-awesome-icon icon="fa-regular fa-star" />
                </div>
                <div class="price">
                    <p>$120.00</p>
                </div>
                <div class="description">
                    <h3>BRAND</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, libero quisquam? Culpa quibusdam tenetur tempora. Esse, nisi. Cumque nemo eius nesciunt, amet voluptas natus ab deleniti qui autem illum quaerat!</p>
                </div>
                <div class="separator"></div>
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
                <SolidButton buttonText="Add to Cart"/>
            </div>
        </section>
    </main>
    <Aside>
        <template #Aside-panel>

        </template>
    </Aside>
</template>

<style scoped>
.productView {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 81vw;
    height: 100vh;

}
.rate{
    height: 100px;
    width: 200px;
    border: 1px solid red;
}
.rate .svg-inline--fa {
    height: 20px;
    width: 20px;
    color: red;
}
</style>
