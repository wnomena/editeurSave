<template>
</template>

<script>
export default {
    name : 'token',
    mounted(){
        this.alerter()
    }
    ,
    methods : {
        alerter : function(){
            if(!localStorage.getItem('mail') || localStorage.getItem('mail') == undefined || localStorage.getItem('mail') == null){
                this.$router.push('/')
            }
        }
    }
}
</script>

<style>

</style>