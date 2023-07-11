<script setup lang="ts">
import Aside from '../components/Aside.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


</script>

<template>
    <main>
        <section class="productView">
            <div class="slider"></div>
            <div class="productContainer">
                <h2 class="name"></h2>
                <div class="rate"></div>
                <div class="price"></div>
                <div class="description">
                    <h3>BRAND</h3>
                    <p></p>
                </div>
                <div class="separator"></div>
                <div class="sizeContainer">
                    <h3>SIZE</h3>
                    <p>SIZE GUIDE</p>
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
.productView {
    display: flex;
    align-items: center;
    width: 81vw;
    height: 100vh;

}
</style>
