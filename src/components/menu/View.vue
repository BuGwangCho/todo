<template>
    <div>
        <div id="header"><b>V I E W </b></div>
        <menu-tabs></menu-tabs>
    </div>
</template>
<script>
import MenuTabs from './MenuTabs'
export default{
    components: {
        'menuTabs' : MenuTabs 
    },
}
</script>
<style>
#header {
	height:50px;
    background: rgb(255, 254, 254);
    line-height: 50px;
}
</style>