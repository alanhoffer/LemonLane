<script setup lang="ts">


const props = defineProps({
    totalPages: String,
    togglePage: {
      type: Function,
      required: true
    }
})
console.log(props.totalPages)
</script>


<template >
        <div class="sliderControls">
            <button class="pageChanger" v-on:click="() => togglePage('prev')">PREV</button>
            <div class="pageNumber pageMin">01</div>
            <div class="pageSpace"></div>
            <div class="pageNumber pageMax">{{ props.totalPages }}</div>
            <button class="pageChanger" v-on:click="() => togglePage('next')">NEXT</button>
        </div>
</template>



<style scoped>
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