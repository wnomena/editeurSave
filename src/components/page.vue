<template>
    <token />
    <ajouta />
<div class="body">
    <header class="container-fluid">
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-header">
                        <h1>Nomena Pad</h1>
                    </div>
                    <div class="card-body">
                        <form action="" method="get" @submit.prevent="add">
                        <input v-model="search" type="text" placeholder="titre">
                        <input class="b" type="submit" value="chercher">
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <section class="container-fluid">
    </section>
</div>
</template>
<script>
import token from '@/components/token.vue'
import ajouta from '@/components/router.vue'
export default {
    name : 'page',
    data(){
        return {
            search : '',
        }
    },
    components : {
        token,ajouta
    },
    methods : {
        add : function(){
           if(this.search == ""){
            alert(`L'element à rechercher`)
           }
           else{
            this.$router.push('/search')
            // const stkg = localStorage.getItem('info')
            // fetch(`http://localhost:8000//get/list/${stkg.mail}/${this.search}`,{
            //     method : 'GET',
            //     headers : {
            //         "Content-Types" : "application/json"
            //     }
            // }).then(resp=>{
            //     resp.json().then(valiny=>{
            //         console.log(valiny)
            //         localStorage.setItem('valinkaroka',valiny)
            //         this.$router.push('/search')
            //     })
            // })
           }
        }
    }
}
</script>
<style scoped>
    h1{
        font-size: 30px;
    }
    .card{
        /* border: 1px solid black; */
        border-radius: 10px;
        /* height: 200px; */
    }
    .card-header{
        text-align: left;
        background-color: #42b983;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-style: oblique;
    }
    .card-body{
        background-color: #0a63bd;
        text-align: end;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
        font-size: 14px;
    }
    input{
        width: 200px;
        border-radius:  10px;
        border: none;
        outline: none;
    }
    form .b{
        width: 70px;
    }
</style>