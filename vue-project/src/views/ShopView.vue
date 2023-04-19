<script setup lang="ts">

import AsideVue from '@/components/Aside.vue';
import productCard from '../components/shop/productCard.vue'
</script>

<template>
  <main>
    <section class="shop">
      <h1 class="shopTitle">SHOP</h1>
      <div class="shopContainer">
        <div class="shopList">
          <productCard />
          <productCard />
          <productCard />
          <productCard />
          <productCard />
          <productCard />
          <productCard />
          <productCard />
          <productCard />
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
          <input placeholder="MIN" min="0"/>
          <input placeholder="MAX" min="0"/>
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
.shop{
  width: 81vw;
  height: 100vh;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.shopTitle{
  width: 100%;
  text-align: left;
}
.shopContainer{
  display:flex;
  align-items: center;
}

.shopList{
  display:grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: minmax(100px, auto);
  gap: 20px;
  width: 61vw;
}

.shopFilters{

  list-style-type: none;
}

.shopFilters h4{

}

.shopFilters li{
  font-size: 12px;
  color: grey;
}

.shopFilters li:hover{
  font-size: 12px;
  color: red;
  cursor: pointer;
}

.shopFilters li.active{
  color: #e1e1e1;
}

</style>