<script setup lang="ts">
import Aside from '../components/Aside.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import SolidButton from '@/components/SolidButton.vue'


</script>

<template>
    <main>
        <section class="productView">
            <div class="slider">
                <div class="image"><p>1</p></div>
                <div class="image"><p>2</p></div>
                <div class="image"><p>3</p></div>
            </div>
            <div class="productContainer">
                <div class="nameRate">

                    <h2 class="name">WILD FLOWER</h2>
                    <div class="rate">
                        <font-awesome-icon icon="fa-solid fa-star" />
                        <font-awesome-icon icon="fa-solid fa-star" />
                        <font-awesome-icon icon="fa-solid fa-star" />
                        <font-awesome-icon icon="fa-solid fa-star" />
                        <font-awesome-icon icon="fa-regular fa-star" />
                    </div>
                </div>
                <div class="price">
                    <p>$120.00</p>
                </div>
                <div class="description">
                    <h3>BRAND</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima neque perspiciatis illo iste
                        reprehenderit magni fugit corrupti cum molestias, dolorem vel autem unde beatae. Necessitatibus qui,
                        vero accusantium quod in nostrum modi recusandae velit dolor saepe eius ad eos minus ab debitis
                        deserunt nobis explicabo maxime totam et. Architecto, voluptatem.</p>
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
                <SolidButton buttonText="Add to Cart" />
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
    width: 20vw;
    background-color: gray;
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
    font-size: 36px;
    font-weight: 100;
}

.rate .svg-inline--fa {
    height: 16px;
    width: 16px;
}

.price p {
    font-size: 1.5rem;
}

.description{
    width: 60%;
}

.separator{
    width: 60%;
    height: 2px;
    background-color: #1e1e1e44;
}
</style>
