<script setup lang="ts">
import { RouterLink } from 'vue-router'


const isLoggedIn = () => {
    let username = localStorage.username;
    
    if(username){
        return '/profile'
    }

    return '/auth'
}

const logout = () => {
    localStorage.removeItem('username');
    return ''
}


</script>

<template #lawea>
    <aside class="aside">
        
        <RouterLink class="profileLink" :to=isLoggedIn() >
            <img src="../assets/icons/user.svg" />
        </RouterLink>




        <slot name="Aside-panel" />
        <RouterLink class="cartLink" :to=logout() >
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
