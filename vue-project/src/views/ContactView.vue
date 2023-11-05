<script setup lang="ts">
import AsideVue from '../components/Aside.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>

<template>
  <main>
    <section class="contact">
      <h1 class="contactTitle">CONTACT US</h1>
      <div class="contactContainer">
        <div class="contactForm">
          <div class="senderInformation">
            <div class="senderName">
              <input placeholder="First Name" />
              <input placeholder="Last Name" />
            </div>
              <input placeholder="Email" />
              <input placeholder="Subject" />
              <textarea class="senderMessage" placeholder="Your message" />
          </div>
          <div class="btnContainer">

            <button id="sendBtn">
              Send
              <font-awesome-icon id="sendIcon" icon="fa-solid fa-paper-plane" />
            </button>
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
  <AsideVue>
    <template #Aside-panel> </template>
  </AsideVue>
</template>

<style scoped>


.contact {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 81vw;
}

.contactContainer {
  width: 55vw;
}

.contactTitle {
  width: 100%;
  left: 5vw;
  text-align: left;
  color: #1e1e1e;
  font-size: 48px;
  font-weight: 100;
  margin: 50px 0 0 0;
}

.senderInformation {
  display: flex;
  flex-direction: column;
  height: 100%;
}

input{
  border-radius: 5px;
  border: 1px solid #303030;
}
.senderInformation input{
  margin: 0.5rem;
  padding: 1rem;
}

.senderName {
  display: flex;
  flex-direction: row;
}
.senderName input{
  padding: 1rem;
  width: 50%;
  margin: 0.5rem;
}

.senderMessage {
  resize: none;
  margin: 0.5rem;
  padding: 1rem;
  padding-bottom: 8rem;
  border-radius: 5px;
  border: 1px solid #303030;

}

.btnContainer{
  width: 100%;
  display: flex;
  justify-content: end;
}
#sendBtn {
  width: 25%;
  margin: 0.5rem;
  margin-top: 2rem;
  padding: 1rem;
  background-color: #1e1e1e;
  color: #ffffff;
  border: none;
  text-align: center;
}

#sendBtn:hover{
  background-color: #303030;
  cursor: pointer;

}

#sendIcon {
  margin: 0 5px;
  height: 1rem;
}

.contactInfo {
  width: 55vw;
  display: flex;
  justify-content: space-between;
  bottom: 2rem;
}

.contactItem {
  display: flex;
  align-items: center;
}

.contactItem p {
  margin: 10px;
}
</style>
