<script setup lang="ts">
import Aside from '@/components/Aside.vue';
import Product from '@/components/cart/Product.vue'
import SolidButton from '@/components/SolidButton.vue'
</script>

<template>
  <main>
    <section class="cartView">
      <h1 class="cartTitle">CART</h1>
      <div class="productList">
        <Product />
        <Product />
        <Product />
      </div>
      <div class="buyAll">
        <div class="totalPrice">TOTAL: $213982.23</div>
        <SolidButton />
      </div>
    </section>
  </main>


  <Aside>
  </Aside>
</template>



<style scoped>
.cartView {
  width: 81vw;
  height: 100vh;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
}

.cartTitle {
  width: 100%;
  padding: 0 5vw;
  text-align: left;
  color: #1e1e1e;
  font-size: 48px;
  font-weight: 100;
  margin: 50px 0;
}

.productList {
  overflow-y: auto;
  max-height: 600px;
  padding: 0 5vw;
  box-sizing: border-box;
  width: 100%;
}

.buyAll {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 5vw;
  position: absolute;
  bottom: 50px;
}

.totalPrice {
  color: #646464;
  font-size: 24px;
  font-weight: 400;
}
</style>
