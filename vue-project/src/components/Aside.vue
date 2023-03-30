<script lang="ts">
import { RouterLink } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
    name: "AsideVue",
    components: {
        FontAwesomeIcon
    }
};
</script>

<template>
    <main>
        <RouterLink to="/profile">
            <font-awesome-icon icon="fa-solid fa-user" />
        </RouterLink>
        <RouterLink to="/cart">
            <font-awesome-icon icon="fa-solid fa-bag-shopping" />
        </RouterLink>

    </main>
</template>

<style scoped></style>
