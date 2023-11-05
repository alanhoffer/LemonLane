<script setup lang="ts">
import { reactive } from 'vue'

import AsideVue from '../components/Aside.vue';
import SliderControls from '@/components/SliderControls.vue';
import { getCollections, getCollectionsById } from '@/modules/API/Collection';

type Collection = {
  datos: tData,
  imagen: {
    type: string,
    data: []
  }
}

type tData = {
  id: number
  name: string,
  description: string
}

let newCollection: Collection[] = reactive([])

const sliderState = reactive({
  actualPage: 0,
  totalPages: 1,
  isLoading: true,
})

function getImageURL(img: number) {
      const arrayBuffer = new Uint8Array(newCollection[img].imagen.data).buffer;
      const blob = new Blob([arrayBuffer], { type: newCollection[img].imagen.type });
      const url = URL.createObjectURL(blob);
      return url;
}



async function fetchCollection() {
  const collections = await getCollections();
  newCollection = await collections.json();
  sliderState.totalPages = newCollection.length;
  sliderState.isLoading = false;
}

fetchCollection()



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
  if (page < 9) {
    return '0' + (page + 1)
  }
  return '' + (page + 1)
}

</script>

<template>
  <main>
    <section class="slider" v-if="!sliderState.isLoading">
      <img id="productImage" :src="getImageURL(sliderState.actualPage)" />

        <p class="colection">{{ newCollection[sliderState.actualPage].datos.name.toLocaleUpperCase() + ' COLLECTION' }}</p>
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