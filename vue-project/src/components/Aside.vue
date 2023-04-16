<script setup lang="ts">
import { RouterLink } from 'vue-router'



</script>

<template #lawea>
    <aside class="aside">
        <RouterLink class="profileLink" to="/profile">
            <img src="../assets/icons/user.svg" />
        </RouterLink>


        
        <slot name="Aside-panel" />

        <RouterLink class="cartLink" to="/cart">
            <img src="../assets/icons/bag.svg" />
        </RouterLink>
    </aside>
</template>

<style scoped>
.aside{
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: space-around;
    background-color: white;
    min-width: 6vw;
}

a img{
    width: 24px;
}

a img:hover, .pageChanger:hover{
    color: #333;
}



</style>
