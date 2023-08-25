
<template>
<form @submit.prevent="validation" >
            <span class="notification" v-bind:nom="message"> {{ message }}</span><br>
            <label class="text-light fw-bold"  for="">Put your Username</label><br>
            <input v-model="Username" class="Username" type="text" placeholder="Username"><br>
            <label class="text-light fw-bold"  for="">Password</label><br>
            <input v-model="password" class="Password" type="password" placeholder="Your Pass"><br>
            <input class="bc-green" type="submit" value="Se connecter">
            <input class="bc-red" type="reset" placeholder="Tout effacer"><br>
            <Router-link class="a" to="/sign-up">Créer un compte</Router-link>
        </form>
        <!-- <p v-bind:nom="message" v-if="message ==`Tentative de connexion reussi`"> Kindrenty </p> -->
</template>

<script>
export default {
    name : "nomena",
    props : ['nom'],
    data(){
        return {
            password : "",
            Username : "",
            message : "",
        }
    },
    methods : {
        validation : function(){
            var Username = this.Username
            var password = this.password
            if(!Username || !password){
                this.message = "Champ obligatoire"
                console.log(this.message)
                return false
            }
            else{
                fetch(`http://localhost:8000/nomena/auth`,{
                    method : 'POST',
                    headers : {
                        "Content-Type" : "application/json"
                    },
                    body : JSON.stringify({mail : Username, pass : password})
                }).then(data=>{
                    data.json().then(reponse=>{
                        console.log(reponse)
                        console.log(reponse.token)
                        console.log(reponse.info.mail)
                        console.log(reponse.info.nom)
                        localStorage.setItem('token',reponse.token)
                        localStorage.setItem('mail',reponse.info.mail)
                        localStorage.setItem('nom',reponse.info.nom)
                        
                        this.$router.push('/search')
                    })
                })
            }
        }
    }
}
// console.log(token)
</script>
<style scoped>
form{
    transform: translateY(200px);
    background-color: rgb(27, 27, 71);
    border-radius: 10px;
    line-height: 30px;
    width: 500px;
    margin: auto;
    text-align: center;

}
input{
    border-radius: 10px;
    background-color: transparent;
    outline: none;
    border-left: 0 solid transparent;
    border-right: 0 solid transparent;
    border-top: 0 solid transparent;
    font-weight: bold;
    margin-bottom: 5px;
}
.notification{
    color: red;
    font-weight: bold;
}
.a{
    font-weight: bold;
    color: rgb(89, 116, 238);
    text-decoration: none;
    font-size: 15px;
    margin: auto;
    text-decoration: none;
}
.bc-green{
    background-color: green;
}
.bc-red{
    background-color: red;
    margin-left: 5px;
}
</style>