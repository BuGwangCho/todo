<template>
  <div>
    <menu-tabs></menu-tabs>
    <b>Counting Test</b><br>
    <router-link to="home">go to home page</router-link>
    <hr>
    <h1>getters</h1>
    <br>
    <h1>counter : {{counter}}</h1>
    <h2>double count : {{doubleCounter}}</h2>
    <h2>triple copunt : {{tripleCounter}} </h2>
    <hr>
    <h1>mutations</h1>
    <br>
    <button @click="addCounter(1)">+1</button>
    <button @click="addCounter(5)">+5</button>
    <button @click="addCounter(10)">+10</button>
    <button @click="initialize">0</button>
    <hr>
    <h2>actions</h2>
    <br>
    <button @click="addCounterOne">+1</button>
    <button @click="asyncIncrement({by: 70, duration: 200 })">asyncIncrement</button>

  </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import MenuTabs from './MenuTabs'
export default{
  computed : {
    ...mapGetters([
      'doubleCounter',
      'counter',
      'tripleCounter'
    ])
  },
  methods: {
    ...mapMutations([
      'addCounter',
      'initialize'
    ]),
    ...mapActions([
      'addCounterOne',
      'asyncIncrement'
    ])
    // addCounter() {
    //   this.$store.dispatch('addCounter')
    // },
    // asyncIncrement(payloads){
    //   this.$store.dispatch('asyncIncrement',payloads)
    // }
    
  },
  components: {
        'menuTabs' : MenuTabs 
  },
  
}
</script>