<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import userIcon from '../assets/icons/user.svg'


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
        <RouterLink class="profileLink" to="/profile">
            <img src="../assets/icons/user.svg" />
        </RouterLink>


        <div class="sliderControls">
            <button class="pageChanger" v-on:click="() => togglePage('prev')">PREV</button>
            <div class="pageNumber pageMin">01</div>
            <div class="pageSpace"></div>
            <div class="pageNumber pageMax">{{ props.totalPages }}</div>
            <button class="pageChanger" v-on:click="() => togglePage('next')">NEXT</button>
        </div>
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

.sliderControls{
    color:black;
    user-select: none;
    display:flex;
    flex-direction:column;
    align-items: center;
}
.pageChanger{
    cursor: pointer;
    font-family: 'Poppins';
    border: none;
    font-weight: 600;
    transform: rotate(90deg);
    background-color: transparent;
}

a img:hover, .pageChanger:hover{
    color: #333;
}

.pageNumber{
    font-weight: 600;
    transform: rotate(90deg);
    box-sizing: border-box;
}

.pageSpace{
    display: block;
    height:150px;
    width:1px;
    background-color: black;
}
.pageMin{
    margin:15px 0px; 

}

.pageMax{
    margin:15px 0px; 

}

</style>
