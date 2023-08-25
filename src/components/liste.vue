<template>
    <deco />
     <page />
     <token />
     <ajouta />
     <div v-for="resu in resus" class="list"  v-on:click="envoyer(resu.titre)" >{{ resu.titre }}<br>{{ resu.createdAt }}</div>
</template>
<script>
import deco from '@/components/disconnect.vue';
import page from '@/components/page.vue'
import token from '@/components/token.vue'
import ajouta from '@/components/router.vue'
export default {
props : ['nom'],
name : 'list',
components : {
    page,deco,token,ajouta
},
data(){
    return {
        resus : '',
    }
},
mounted(){
    this.remonter()
},
 methods : {
    remonter : function(){
        fetch(`http://localhost:8000/get/list/${localStorage.getItem('mail')}`,{
            headers : { "Content-Type" : "application/json"},
        }).then(data=>{
            data.json().then(data2=>{
                this.resus = data2.list
                console.log(this.resus)
            })
        })
    },
    envoyer : function(e){
        localStorage.setItem('e',e)
        this.$router.push('/personnal')
    }
},
}
</script>
<style>
.list{
    background-color: rgb(4, 77, 77);
    border-radius: 10px;
    margin: 10px;
    color: white;
    font-weight: bold;
    padding-left: 5px;
    cursor: pointer;

}
</style>