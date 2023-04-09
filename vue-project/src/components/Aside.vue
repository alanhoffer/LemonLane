<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


const props = defineProps({
    actualPage: String,
    totalPages: Number,
    togglePage: {
      type: Function,
      required: true
    }
})

</script>

<template>
    <main>
        <RouterLink to="/profile">
            <font-awesome-icon icon="fa-solid fa-user" />
        </RouterLink>
        <RouterLink to="/cart">
            <font-awesome-icon icon="fa-solid fa-bag-shopping" />
        </RouterLink>

        
        <div>ASIDE: {{  props.actualPage }}</div>
        <button v-on:click="() => togglePage('prev')">prev</button>
        <div>01</div>
        <div>{{ props.totalPages }}</div>
        <button v-on:click="() => togglePage('next')">next</button>

    </main>
</template>

<style scoped></style>
