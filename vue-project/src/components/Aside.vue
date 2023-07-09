<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { AuthCheck } from '../modules/API/Auth';


const routeSelector = () => {
    if(AuthCheck()){
        return '/profile'
    }
    return '/auth'
}


</script>

<template #lawea>
    <aside class="aside">
        
        <RouterLink class="profileLink" :to=routeSelector() >
            <img src="../assets/icons/user.svg" />
        </RouterLink>





        <slot name="Aside-panel">
        </slot>

        <RouterLink class="cartLink" to='/cart' >
            <img src="../assets/icons/bag.svg" />
        </RouterLink>
    </aside>
</template>

<style scoped>
.aside {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    min-width: 6vw;
}

.cartLink {
    position: absolute;
    bottom: 2rem;
}

.profileLink {
    position: absolute;
    top: 2rem;
}

a img {
    width: 24px;
}

a img:hover,
.pageChanger:hover {
    color: #333;
}
</style>
