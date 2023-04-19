<script setup lang="ts">

</script>

<template>
    <main>
        <div class="productCard">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWu5bwnF7fO1qvBE8uHnlgWgbUgKoUA8ypMPUpbUTQ&s"  />
            <h4>REMERA FALOPERA</h4>
            <p>$ 23123</p>
        </div>

    </main>
</template>


<style scoped>
* {
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  color: #1e1e1e;
}

.productCard{
    border: 2px solid #1e1e1e;
    padding:30px 0px;
    display:flex;
    flex-direction: column;
    align-items: center;
}

.productCard:hover{
    cursor: pointer;
}

.productCard h4{
    font-size: 12px;
    color:#686868
}

.productCard p{
}



</style>