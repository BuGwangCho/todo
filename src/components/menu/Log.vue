<template>
    <div>
        <menu-tabs></menu-tabs>
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
