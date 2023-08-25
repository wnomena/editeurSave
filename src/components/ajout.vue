<template>
    <deco/>
    <token/>
  <form action="" @submit.prevent="registre">
    <div class="container-fluid">
    <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-head">
                    <table>
                        <tr>
                            <td>
                                <h3 v-bind:nom="notification">{{ notification }}</h3>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="titre">Entrer le titre de votre document</label>
                            </td>
                            <td>
                                <label for="">Une petite description</label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input v-model="titre" type="text" placeholder="Titre">
                            </td>
                            <td>
                                <input v-model="description" type="text" placeholder="description">
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="card-body">
                    <table class="t2">
                        <tr class="label">
                            <td>
                                <label for="">Votre document</label>
                            </td>
                        </tr>
                        <tr class="corp">
                            <td>
                                <textarea v-model="textearea" class="ferd" name="" cols="170" rows="10"></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button type="submit">Enregistrer</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
  </div>
  </form>
</template>

<script>
import token from '@/components/token.vue'
import deco from '@/components/disconnect.vue'
export default {
    components : {
        token,deco
    },
    props : ['nom'],
    name : 'ajout',
    data(){
        return {
            salection : '',
            textearea : '',
            titre : '',
            description : '',
            notification : '',

        }
    },
    methods : {
        registre : function(){
            console.log('Traitre !')
            if(this.titre == '' || this.description == '' || this.textearea == ''){
                this.notification = `Veuillez les remplir toutes`
                console.log('it"s good')
            }
            else{
                const mail = localStorage.getItem('mail')
                const titre = this.titre
                const description = this.description
                const textearea = this.textearea
                fetch(`http://localhost:8000/ajout/${mail}`,{
                    method : 'POST',
                    headers : {
                        "Content-Type" : "application/json"
                    },
                    body : JSON.stringify({titre : titre, description : description, textearea : textearea})
                }).then(valiny =>{
                    valiny.json().then(resp=>{
                        console.log(resp)
                        if(resp.message == `Veuillez utiliser un autre titre`){
                            this.notification = resp.message
                        }
                        else{
                            this.$router.push('/search')
                        }
                    })
                })
            }
        }
    }
}
</script>

<style scoped>
td{
    /* border: 1px solid green; */
    width: 900px;
}
input{
    width: 450px;
    border: 3px solid black;
    border-radius: 10px;
}
h3{
    color: red;
    font-weight: bold;
}
.card-header{
    justify-content: space-between;
}
.container-fluid{
    border-radius: 10px;
    margin-top: 10px;
    margin-left: 0;
    margin-bottom: 0;
    margin-right: 0;
}
.card{
    background: linear-gradient(blue,rgb(248, 104, 248)) center/cover;
    opacity: 0.9;
    border: 2px solid white;
    border-radius: 10px;
}
textarea{
    border: 3px solid black;
    border-radius: 10px;
}
</style>
