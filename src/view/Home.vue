<template>
    <div id="dynamic-component-demo">
        <div id="header"><b>{{currentTab}} </b></div>
        <div id="body">
        <keep-alive>
            <component v-bind:is="currentTabComponent"
            class="tab"></component>
        </keep-alive>
        </div>
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
import tabEtc from '../components/tab-etc'
import tabLogout from '../components/tab-logout'
export default {
    name: 'home',
    data () {
        return {
            currentTab: 'Logs',
            tabs: ['Logs', 'Storage', 'Test', 'Etc','Logout']
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
        'tab-test' : tabTest,
        'tab-etc' : tabEtc,
        'tab-logout' : tabLogout
    },
    methods: {
        logout(currentTab){
            if(currentTab === 'Logout') {
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
  width: 20%;
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
}
.tab-button:last-child {
    border-right: none;
}
#dynamic-component-demo{
 position:relative;
 min-height: 100%;
}
#header {
position: fixed;
top:0;
width: 100%;
height:50px;
background: rgb(255, 254, 254);
line-height: 50px;
border-bottom: 1px solid #ccc;
}
#footer {
 position: fixed;
 bottom:0;
 width: 100%;
 height: 50px;   
 line-height: 40px;
 background:rgb(255, 254, 254);
}
#body {
    margin-bottom:50px;
    margin-top:50px;
}
.logs-tab {
    position:fixed;
    top:50px;
    width:100%;
}
</style>

