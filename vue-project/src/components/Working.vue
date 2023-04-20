<script setup lang="ts">

</script>

<template>
    <main>
        <div class="Working"> 
            <h1>We are working on it...</h1>
            <img src="../assets/photos/404gif.gif"  />
        </div>

    </main>
</template>

<style scoped>

.Working{
    display:flex;
    flex-direction:column;
    align-items: center;
    user-select: none;
    justify-content: center;
    width: 81vw;
    height: 100vh;
}

.Working img {
    
  pointer-events: none;
}

.Working h1 {
    position: absolute;
    z-index:1;
    bottom: 20%;
    opacity: 0.9;
    font-size: 32px;
}

</style>