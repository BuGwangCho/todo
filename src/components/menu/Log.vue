<template>
    <div>
        <div id="header"><b>L O G </b></div>
        <div id="footer">
            <menu-tabs></menu-tabs>
        </div>
    </div>
</template>

<script>
    import MenuTabs from './MenuTabs'
    export default{
        data() {
            return {
                isActive: true,
            }
        },
        mounted() {
            //this.isActive = this.selected
        },
        components: {
            'menuTabs' : MenuTabs
        }
        
    }
</script>
<style>
html,
body {
    margin:0;
    padding:0;
    height:100%;
}
#header {
	height:50px;
    background: rgb(255, 254, 254);
    line-height: 50px;
    border-bottom:2px solid rgb(234, 234, 234)
}
#footer {
    position:fixed;
    bottom:0;
    width:100%;
    background: rgb(255, 254, 254);
}
</style>

