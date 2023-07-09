<script setup lang="ts">
import AsideVue from '../components/Aside.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>

<template>
  <main>
    <section class="contact">
      <div class="contactContainer">
        <h1 class="contactTitle">CONTACT US</h1>
        <div class="contactForm">
          <div class="senderInformation">
            <div class="senderLeft">
              <input placeholder="First Name" />
              <input placeholder="Last Name" />
              <input placeholder="Email Name" />
            </div>
            <textarea class="senderMessage" placeholder="Message..." />
          </div>
          <button id="sendBtn">
            Send
            <font-awesome-icon id="avioncito" icon="fa-solid fa-paper-plane" />
          </button>
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
  <AsideVue>
    <template #Aside-panel> </template>
  </AsideVue>
</template>

<style scoped>


.contact {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 81vw;
}

.contactContainer {
  height: 60vh;
  width: 55vw;
}

.contactTitle {
  color: #1e1e1e;
  font-size: 48px;
  font-weight: 100;
  margin-bottom: 30px;
}

.senderInformation {
  display: flex;
  flex-direction: row;
  height: 100%;
}

.senderLeft {
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 25vh;
  margin-right: 15px;
  justify-content: space-between;
}

.senderLeft input {
  padding: 10px;

}

.senderMessage {
  resize: none;
  width: 50%;
  padding: 15px;
  margin-left: 15px;
}

#sendBtn {
  right: 0;
  position: absolute;
  width: 25%;
  margin-top: 30px;
  padding: 10px;
  background-color: #1e1e1e;
  color: #ffffff;
  border: none;
  text-align: center;
}

#sendBtn:hover{
  background-color: #303030;
  cursor: pointer;

}

#avioncito {
  color: #ffffff;
  margin: 0 5px;
}
.contactInfo {
  width: 55vw;
  display: flex;
  justify-content: space-between;
}

.contactItem {
  display: flex;
  align-items: center;
}

.contactItem p {
  margin: 10px;
}
</style>
