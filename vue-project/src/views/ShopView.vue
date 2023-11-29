<script setup lang="ts">

import AsideVue from '@/components/Aside.vue';
import productCard from '../components/shop/productCard.vue'
import { reactive } from 'vue';
import type { TProduct } from '@/modules/interfaces/TProduct';
import { getAllProducts } from '@/modules/API/Product';
import prettierProduct from '@/modules/helpers/admin/product/prettierProduct';
import LoadingVue from '@/components/Loading.vue';


const state = reactive({
    filter: 'id',
    loading: true,
    search: '',
    headers: ["ID", "NAME",  "PRICE", "DESCRIPTION"],
    keys: ["id", "name",  "price", "description"],
    products: <TProduct[]>[
    ],
})

async function getDataRequest() {
    const data = await getAllProducts();


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
  <main>
    <section class="shop">
      <h1 class="shopTitle">SHOP</h1>
      <div class="shopContainer">
        <div class="shopList">
          <LoadingVue v-if="state.loading" />
          <RouterLink to="/product" v-if="!state.loading" v-for="product in state.products">
            <productCard class="card" :key="product.id" :product="product"/>
          </RouterLink>
        </div>
        <ul class="shopFilters">
          <h4>CATEGORIES</h4>
          <li>TRENDING</li>
          <li>CAPS</li>
          <li>JACKETS</li>
          <li>SWEATSHIRTS</li>
          <li>T-SHIRTS</li>
          <li>PANTS</li>
          <li>SOCKS</li>
          <h4>PRICE</h4>
          <div class="priceCtrl">

            <input placeholder="MIN" min="0" />
            <input placeholder="MAX" min="0" />
          </div>
          <h4>SIZE</h4>
          <select name="sizeCtrl" id="sizeCtrl">
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </ul>
      </div>
    </section>

  </main>


  <AsideVue>

  </AsideVue>
</template>


<style scoped>
* {
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  color: #1e1e1e;
}

.shop {
  width: 81vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-bottom: 30px;
}

.shopTitle {
  width: 100%;
  left: 5vw;
  text-align: left;
  color: #1e1e1e;
  font-size: 48px;
  font-weight: 100;
  margin: 50px 0;
}

.shopContainer {
  display: flex;
}

.shopList {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-columns: minmax(100px, auto);
  gap: 20px;
  width: 61vw;
}

.shopFilters {
  width: 10vw;
  list-style-type: none;
}

.shopFilters h4 {
  margin-top: 10px;
}

.shopFilters li {
  font-size: 12px;
  color: grey;
}

.shopFilters li:hover {
  font-size: 12px;
  color: red;
  cursor: pointer;
}

.shopFilters li.active {
  color: #1e1e1e;
}

.priceCtrl {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.priceCtrl input {
  width: 47.5%;
  font-size: 0.8em;
  height: 25px;
  color: #686868;
  border: 1px solid #686868;
  border-radius: 0;
}

#sizeCtrl {
  width: 100%;
  color: #686868;
  border: 1px solid #686868;
  border-radius: 0;
  background: none;
}
</style>