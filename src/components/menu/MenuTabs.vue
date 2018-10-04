<template>
        <ul>
            <li><router-link to="/log">Log</router-link></li>
            <li><router-link to="/view">View</router-link></li>
            <li><router-link to="/test">Test</router-link></li>
            <li><router-link to="/">Logout</router-link></li>
        </ul>
</template>
<script>
    export default{

    }
</script>
<style>
ul {
    width: 100%;
    border-top:2px solid rgb(234, 234, 234);
    margin-bottom: 24px;
}
li {
        display: inline-block;
        padding: 8px;
        height: 50px;
        box-sizing: border-box;
        list-style: none;
        line-height:50px;
        cursor: pointer;
    }
a {
    display: block;
    height: 100%;
    width: 100%;
    color: #474545;
    font-weight: 600;
    font-size: 17px;    
}
</style>

