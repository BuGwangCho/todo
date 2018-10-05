<template>
    <div id="dynamic-component-demo">
        <div id="header"><b>{{currentTab}} </b></div>
        <keep-alive>
            <component v-bind:is="currentTabComponent"
            class="tab"></component>
        </keep-alive>
        <div id="footer">
            <button
                v-for="tab in tabs"
                v-bind:key="tab"
                v-bind:class="['tab-button', {active: currentTab === tab}]"
                v-on:click="currentTab=tab, logout(currentTab)"
                >{{tab}} 
            </button>
        </div>
    </div>
</template>
<script>
import tabLogs from '../components/tab-logs'
import tabStorage from '../components/tab-storage'
import tabTest from '../components/tab-test'
export default {
    data () {
        return {
            currentTab: 'Logs',
            tabs: ['Logs', 'Storage', 'Test','Logout']
        }
    },
    computed:{
        currentTabComponent: function() {
            return 'tab-' + this.currentTab.toLowerCase()
        }
    },
    components: {
        'tab-logs' : tabLogs,
        'tab-storage' : tabStorage,
        'tab-test' : tabTest
    },
    methods: {
        logout(currentTab){
            if(currentTab == 'Logout') {
                this.$router.push({
                    name: 'Login'
                })
            }
        }
    }
}
</script>
<style>
.tab-button {
  padding: 6px 10px;
  width: 25%;
  height: 50px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #fffdfd;
  font-weight: 00;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border-top: 1px solid #ccc;
}
.tab-button:last-child {
    border-right: none;
}
#dynamic-component-demo{
 position:relative;
 min-height: 100%;
}
#header {
height:50px;
background: rgb(255, 254, 254);
line-height: 50px;
}
#footer {
 position: fixed;
 bottom:0;
 width: 100%;
 height: 50px;   
 line-height: 40px;
 background:rgb(255, 254, 254);
}
</style>

