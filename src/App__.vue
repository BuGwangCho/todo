<template>
  <div id="app">
  
      <LoginHeader></LoginHeader>
      <LoginInputId></LoginInputId>
      <LoginInputPw></LoginInputPw>
      <LoginFooter></LoginFooter>
  
  </div>
</template>

<script>
import LoginHeader from './components/login/LoginHeader.vue'
import LoginFooter from './components/login/LoginFooter.vue'
import LoginInputPw from './components/login/LoginInputPw.vue'
import LoginInputId from './components/login/LoginInputId.vue'

export default {
  components : {
    'LoginHeader' : LoginHeader,
    'LoginFooter' : LoginFooter,
    'LoginInputPw' : LoginInputPw,
    'LoginInputId' : LoginInputId
  }  
}
</script>

<style>
body {
  text-align : center;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
}
</style>
