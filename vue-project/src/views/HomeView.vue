<script setup lang="ts">
import { reactive } from 'vue'

import AsideVue from '../components/Aside.vue';
import SliderControls from '@/components/SliderControls.vue';

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



async function fetchImages() {
  const response = await fetch('https://6435d85e537112453fe08ab1.mockapi.io/Home')
  .then(response => response.json())
  .then(res => {
    newArticles = res.filter((article: { isNew: boolean; }) => article.isNew === true)
    sliderState.totalPages = newArticles.length;
  })
  .then(() => {
    sliderState.isLoading = false;
  })
}

fetchImages()



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

        <p class="colection">{{ newArticles[sliderState.actualPage].season.toLocaleUpperCase() + ' COLECTION' }}</p>
      <div class="sliderPage"> {{ getPageFormated(sliderState.actualPage) }} </div>
    </section>

  </main>

    <AsideVue  >
      <template #Aside-panel >

          <SliderControls 
          :togglePage="togglePage"
          :totalPages="getPageFormated(sliderState.totalPages - 1)" 
          />
          
      </template>
    </AsideVue>
</template>


<style scoped>


.slider {
  height: 100vh;
    width: 0vw;
  overflow: hidden;
  
  animation-name: sliderAnim;
  animation-duration: 0.5s;
  animation-delay: 0s;
  background-color: #222;
}

.slider{
  width: 81vw;
}


#productImage {
  width: 100%;
  height: 100%;
  position: relative;
  object-fit: cover;

}


.colection {
  position: absolute;
  bottom: 20px;
  left: 100px;
  margin: 0;
  color: white;
  width: 15%;
  text-align: center;
}

.colection:before,
.colection:after {
  content: "";
  position: absolute;
  top: 50%;
  height: 2px;
  background-color: white
}

.colection:before {
  left: -4vw;
  width: 4vw;
}

.colection:after {
  right: -56vw;
  width: 56vw;
}


.sliderPage {
  position: absolute;
  top: 50%;
  transform: translate(0%, -50%);
  right: 10px;
  font-size: 128px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px;
  color: white;
  user-select: none;

}


@keyframes sliderAnim {
  0%   {width: 0vw;}
  100% {width: 81vw;}
}

</style>