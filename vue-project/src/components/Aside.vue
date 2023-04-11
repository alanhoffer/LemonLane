<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


const props = defineProps({
    actualPage: String,
    totalPages: String,
    togglePage: {
      type: Function,
      required: true
    }
})

</script>

<template>
    <aside class="aside">
        <RouterLink to="/profile">
            <font-awesome-icon icon="fa-solid fa-user" />
        </RouterLink>


        <div class="sliderControls">
            <div>ASIDE: {{  props.actualPage }}</div>
            <button v-on:click="() => togglePage('prev')">prev</button>
            <div>01</div>
            <div>{{ props.totalPages }}</div>
            <button v-on:click="() => togglePage('next')">next</button>
        </div>
        <RouterLink to="/cart">
            <font-awesome-icon icon="fa-solid fa-bag-shopping" />
        </RouterLink>

    </aside>
</template>

<style scoped>
.aside{
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    min-width: 8vw;
}

</style>
