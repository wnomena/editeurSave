<template>
<deco />
<token />
    <form action="" @submit.prevent="modification">
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
                                  <textarea v-model="textearea" class="ferd" name="" cols="170" rows="10">{{ textearea }}</textarea>
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <button @click.prevent="modification()" type="submit">Modifier</button>
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
import deco from '@/components/disconnect.vue'
import token from '@/components/token.vue'
export default {
    name : 'donner',
    props : ['nom'],
    components : {
        deco,token
    },
    data(){
        return {
            titre : '',
            description : '',
            textearea : '',
            notification : '',
        }
    },
    mounted(){
        this.recuperation() //pour le mettre automatiquement sur l'écran
    },
    methods : {
        recuperation : function(){
            if(!localStorage.getItem('mail') || localStorage.getItem('mail') == null || localStorage.getItem('mail') == undefined){
                this.$router.push('/')
            }
            else{
                fetch(`http://localhost:8000/get/list/${localStorage.getItem('mail')}/${localStorage.getItem('e')}`)
                .then(data=>{
                    data.json().then(data2=>{
                    localStorage.setItem('id',data2.ok[0]._id)
                    this.notification = data2.message
                    this.titre = data2.ok[0].titre
                    this.description = data2.ok[0].description
                    this.textearea = data2.ok[0].textearea

                })
            })
            }
        },
        modification : function(){
        console.log(`this.titre : ${this.titre}`)
        if(!this.titre || !this.description || !this.textearea){
            this.notification = `Veuillez les remplir tous`
        }
        else{
            fetch(`http://localhost:8000/update/${localStorage.getItem('id')}`,{
                method : 'PUT',
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({titre : this.titre, description : this.description, textearea : this.textearea})
            }).then(data=>{
                data.json().then(data2=>{
                    console.log(data2)
                    this.notification = data2.message
                    if(data2.message == "Ces informations sont déjà enregistrer dans votre base de données"){
                        this.notification = data2.message
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
