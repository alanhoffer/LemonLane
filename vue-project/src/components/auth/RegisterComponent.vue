<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<template>
  <main>
    <div class="registerContainer">
      <h1 class="registerTitle">SIGN IN</h1>
      <div class="registerForm">
        <div class="fullname">
          <input type="text" id="yourname" placeholder="Name" />
          <input type="text" id="lastname" placeholder="Last name" />
        </div>
        <input type="email" placeholder="Email" />
        <input type="Password" placeholder="Password" />
        <input type="Password" placeholder="Repeat Password" />
      </div>
      <button id="signBtn">Sign In</button>
    </div>
  </main>
</template>

<style scoped>
* {
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  color: #1e1e1e;
}
.registerContainer {
  width: 40.5vw;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.registerTitle {
  margin-right: 30px;
  width: 22.5vw;
  color: #1e1e1e;
  font-size: 48px;
  font-weight: 100;
  margin-bottom: 30px;
}

.registerForm {
  display: flex;
  flex-direction: column;
}
.registerForm input {
  width: 100%;
  margin-top: 30px;
  padding: 10px;
}

.fullname {
  display: flex;
  flex-direction: row;
}

.fullname input {
  width: 11.25vw;
}

#yourname {
  margin-right: 15px;
}
#lastname {
  margin-left: 15px;
}

#signBtn {
  right: 0;
  width: 25%;
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
</style>
