<script setup lang="ts">

</script>

<template>
    <div class="loading">
      <div class="loading-icon">
        <i class="fa fa-spinner fa-spin"></i>
      </div>
      <div class="loading-text">Cargando...</div>
    </div>
  </template>
  

  
  <style scoped>
  .loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin:auto;
  }
  
  .loading-icon {
    font-size: 48px;
    margin-bottom: 16px;
  }
  
  .loading-text {
    font-size: 18px;
    color: #333;
  }
  </style>