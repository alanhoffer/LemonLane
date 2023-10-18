<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<template>
  <main>
    <div class="registerContainer">
      <h1 class="registerTitle">SIGN UP</h1>
      <div class="registerForm">
        <div class="fullname">
          <input type="text" id="yourname" placeholder="Name" />
          <input type="text" id="lastname" placeholder="Last name" />
        </div>
        <input type="email" placeholder="Email" />
        <input type="Password" placeholder="Password" />
        <input type="Password" placeholder="Repeat Password" />
      </div>
      <button id="signBtn">Sign Up</button>
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
  justify-content: space-between;
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
  margin-top: 1rem;
  padding: 1rem;
}

.fullname {
  display: flex;
  flex-direction: row;
}

.fullname input {
  width: 11.25vw;
}
input {
  border: 1px solid #999;
}

#yourname {
  margin-right: 0.5rem;
}
#lastname {
  margin-left: 0.5rem;
}

#signBtn {
  width: 25%;
  margin: auto;
  margin-top: 2rem;
  padding: 10px;
  background-color: #1e1e1e;
  color: #ffffff;
  text-align: center;
}

#signBtn:hover {
  background-color: #303030;
  cursor: pointer;
}
</style>
