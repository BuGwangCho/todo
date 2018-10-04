<template>
    <div id="wrapper">
        <div id="header"><b>L O G </b></div>
        <div class="container">
            <menu-tab></menu-tab>
        </div>
        <div id="footer">
            <k-tabs>
                <k-tab name="Home" :selected="true">this is home </k-tab>
                <k-tab name="Log"></k-tab>
                <k-tab name="Test"></k-tab>
                <k-tab name="Logout"><span @click="logout">logout</span></k-tab>
            </k-tabs>
        </div>
    
    </div>
</template>
<script>
import Test from './menu/Test'
import Log from './menu/Log'
import Login from './LoginForm'
import MenuTabs from './menu/MenuTabs'
export default{
    data () {
        return {
            menu_selected : ''
        }
    },
    methods : {
        logout()  {
            alert("logout클릭");
            this.$router.push({
                name : 'Login'
            })
        },
    },
    components: {
        'menuTab' : MenuTabs 
    }
}
</script>
<style>
#wrapper {
	position:relative;
    min-height:100%;
}
#header {
	height:50px;
    background: rgb(255, 254, 254);
    line-height: 50px;
}
.container {
    padding:20px;
}
#footer {
    bottom:0;
    width:100%;
    height:50px;   
    line-height: 50px;
    background:rgb(255, 254, 254);
}
</style>
