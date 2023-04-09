<script setup lang="ts">

import AsideVue from '../components/Aside.vue';

import { reactive } from 'vue'

const homeArticles = ["asd", "asd", "asd", "asd", "asd", "asd", "asd", "asd", "asd", "asd", "asd", "asd", "asd", "asd", "asd", "asd"]

const sliderState = reactive({
  actualPage: 1,
  totalPages: 10,
})

function togglePage(direction: string) :Number{

  if (direction == 'next' && sliderState.totalPages > sliderState.actualPage) {
    return sliderState.actualPage++
  }
  if (direction == 'prev' && sliderState.actualPage > 1) {
    return sliderState.actualPage--
  }
  return 0
}

const getPageFormated = () => {

  if (sliderState.actualPage < 10) {
    return '0' + sliderState.actualPage
  }
  return '' + sliderState.actualPage

}

</script>

<template>
  <main>
    <div>content: {{  getPageFormated() }}</div>
  </main>

  <AsideVue v-bind:actualPage="getPageFormated()" :togglePage="togglePage" v-bind:totalPages="sliderState.totalPages" />
</template>
