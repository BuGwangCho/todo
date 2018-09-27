<template>
  <div id="app">
      <TodoHeader></TodoHeader>
      <TodoInput></TodoInput>
      <TodoList></TodoList>
      <TodoFooter></TodoFooter>
   </div>
</template>

<script>
import TodoHeader from './components/Todo/TodoHeader.vue'
import TodoFooter from './components/Todo/TodoFooter.vue'
import TodoInput from './components/Todo/TodoInput.vue'
import TodoList from './components/Todo/TodoList.vue'

export default {
  components : {
    'TodoHeader' : TodoHeader,
    'TodoFooter' : TodoFooter,
    'TodoInput' : TodoInput,
    'TodoList' : TodoList
  }  
}
</script>

<style>
body {
  text-align : center;
  background-color : #f6f6f8;
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
