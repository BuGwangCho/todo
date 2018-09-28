<template>
  <div id="app">
    <LoginHeader></LoginHeader>
    <LoginForm></LoginForm>
  </div>
</template>

<script>
import LoginHeader from './components/login/LoginHeader.vue'
import LoginForm from './components/login/LoginForm.vue'

export default {
  components : {
    'LoginHeader' : LoginHeader,
    'LoginForm' : LoginForm
  }  
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
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
