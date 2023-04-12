<script setup lang="ts">
import { reactive } from 'vue'

import AsideVue from '../components/Aside.vue';

type Article = {
  id: number
  name: string,
  price: string,
  image: string,
  season: string,
  isNew: boolean,
}

let newArticles: Article[] = reactive([])

const sliderState = reactive({
  actualPage: 0,
  totalPages: 10,
  isLoading: true,
})

fetch('https://6435d85e537112453fe08ab1.mockapi.io/Home')
  .then(response => response.json())
  .then(res => {
    newArticles = res.filter((article: { isNew: boolean; }) => article.isNew === true)
    sliderState.totalPages = newArticles.length;
  })
  .then(() => {
    sliderState.isLoading = false;
  })


  


function togglePage(direction: string): Number {

  if (direction == 'next' && sliderState.totalPages > sliderState.actualPage + 1) {
    return sliderState.actualPage++
  }
  if (direction == 'prev' && sliderState.actualPage > 0) {
    return sliderState.actualPage--
  }
  return 0
}

const getPageFormated = (page: number) => {
  if (page < 10) {
    return '0' + (page + 1)
  }
  return '' + (page + 1)
}

</script>

<template>
  <main>
      <section class="slider" v-if="!sliderState.isLoading">
        <img id="productImage" :src="newArticles[sliderState.actualPage].image" />
        
        <div class="colection">
          <p>{{ newArticles[sliderState.actualPage].season.toLocaleUpperCase() + ' COLECTION'}}</p>
          <span></span>
        </div>
        <div class="sliderPage"> {{ getPageFormated(sliderState.actualPage) }} </div>
      </section>

  </main>

  <AsideVue v-bind:actualPage="getPageFormated(sliderState.actualPage)" :togglePage="togglePage"
    v-bind:totalPages="getPageFormated(sliderState.totalPages - 1)" />
</template>


<style scoped>
.slider{
  height: 100vh;
  width: 81vw;
  overflow: hidden;
  background-color: red;
}

#productImage{
  width: 100%;
  height: 100%;
  position:relative;
  object-fit: cover;
  
}


.colection{
  position: relative;
  width: 100%;
  bottom:40px;
  margin:auto;
  position: absolute;
  color:white;
  user-select: none;
}
.colection p{
  position: relative;
  overflow: hidden;
  text-align: center;
  margin-left: 100px;
  overflow:hidden; 
  padding: 0px 20px;
  
  z-index:1;
  width:fit-content;
}
.colection span{
  position: absolute;
  top: 50%;
  transform: translate(0%, -50%);
  display:inline;
  width: 100%;
  height: 10%;
  background-color:white;
}


.sliderPage{
  position: absolute;
  top: 50%;
  transform: translate(0%, -50%);
  right:10px;
  font-size: 128px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  -webkit-text-fill-color: transparent;   -webkit-text-stroke: 1px;
  color:white;
  user-select: none;

}
</style>