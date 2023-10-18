<script setup lang="ts">
import { reactive } from 'vue'
import { logout } from "@/modules/API/Auth";
import Aside from "@/components/Aside.vue";

const State = reactive({
  name: '',
  description: '',
  file: '',
})
</script>

<template>
  <main>
    <section class="profile">
      <div class="profileContainer">
        <h1 class="profileTitle">PROFILE</h1>
        <div class="profileForm">
          <div class="fullname">
            <input type="text" id="yourname" placeholder="Name" />
            <input type="text" id="lastname" placeholder="Last name" />
          </div>
          <input type="email" placeholder="Email" />
          <input type="Password" placeholder="Actual password" />
          <input type="Password" placeholder="New password (not necessary)" />
        </div>
        <button id="signBtn">Save Changes</button>
      </div>
        <ul class="profileNav">
          <li class="active">PROFILE</li>
          <li>ORDERS</li>
          <li>GIFT CARDS</li>
          <li>ADDRESS</li>
          <li>SUPPORT</li>
          <li @click="logout">LOG OUT</li>
        </ul>
    </section>
  </main>

  <Aside>
    <template #Aside-panel> </template>
  </Aside>
</template>

<style scoped>
.profile {
  display:flex;
  align-items: center;
  justify-content: space-evenly;
  width: 81vw;
  height:100vh;
}
* {
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  color: #1e1e1e;
}
.profileContainer {
  width: 30.5vw;
  display: flex;
  flex-direction: column;
}

.profileTitle {
  margin-right: 30px;
  width: 22.5vw;
  color: #1e1e1e;
  font-size: 48px;
  font-weight: 100;
  margin-bottom: 30px;
}

.profileForm {
  display: flex;
  flex-direction: column;
}
.profileForm input {
  width: 100%;
  margin-top: 30px;
  padding: 10px;
}

.fullname {
  display: flex;
  flex-direction: row;
}

.fullname input {
  width: 100%;
}

#yourname {
  margin-right: 15px;
}
#lastname {
  margin-left: 15px;
}

#signBtn {
  margin-left:auto;
  right: 0;
  width: 150px;
  margin-top: 30px;
  padding: 10px;
  background-color: #1e1e1e;
  color: #ffffff;
  border: none;
  text-align: center;
}

#signBtn:hover {
  background-color: #303030;
  cursor: pointer;
}


.profileNav{
  
}

.profileNav li{
  font-size: 18px;
  margin: 0.5rem ;
  list-style:none;
}

.profileNav li:hover{
  color: #d53232;
  cursor: pointer;
}

.profileNav li.active{
  color: #1e1e1e;
  font-weight: 500;
}

</style>
