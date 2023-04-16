<script setup lang="ts">
import AsideVue from '../components/Aside.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

</script>

<template>
  <main>
    <section class="aboutUs">
      <div class="aboutUsContainer">
        <h1 class="aboutUsTitle">
          CONTACT US
        </h1>
        <div class="contactForm">
          <div class="senderInformation">
            <input placeholder="First Name" />
            <input placeholder="Last Name" />
            <input placeholder="Email Name" />
          </div>
          <div class="senderMessage">
            <textarea placeholder="First Name" />
            <button>Send <font-awesome-icon icon="fa-solid fa-paper-plane" /> </button>
          </div>
        </div>
      </div>
      

      <div class="contactInfo">

        <div class="contactItem">
          <font-awesome-icon icon="fa-solid fa-envelope" />
          <p>info@lemonlane.com</p>
        </div>

        <div class="contactItem">
          <font-awesome-icon icon="fa-solid fa-phone" />
          <p>+54 9 2267 999999</p>
        </div>

        <div class="contactItem">
          <font-awesome-icon icon="fa-solid fa-map-location-dot" />
          <p>Bs As, Gral Madariaga Quetimporta 567</p>
        </div>

      </div>
    </section>
  </main>
  <AsideVue  >
      <template #Aside-panel >

          
      </template>
    </AsideVue>
</template>


<style scoped>

.aboutUs{
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 81vw;
  background-color: #afafaf;
}

.aboutUsContainer{
  height: 40vh;
  width: 50vw;
  background-color: red;
}

.aboutUsTitle{
  text-align: left;
}

.contactForm{
  display:flex;
}

.senderInformation{
  display:flex;
  flex-direction: column;
}

.senderMessage{
  display: flex;
  flex-direction: column;
  height: 100%;
}

.senderMessage textarea{
  height: 100%;
  resize: none;
}

.contactInfo{
  width: 50vw;
  display:flex;
  justify-content: space-between;
}

.contactItem{
  display:flex;
  align-items: center;
}
</style>