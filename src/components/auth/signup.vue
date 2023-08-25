<template>
    <form action="" @submit.prevent="validation">
            <span v-bind:nom="message" class="notification">{{ message }}</span><br>
            <label for="">Enter your Name</label><br>
            <input v-model="Name" class="Name" type="text" placeholder="Name"><br>
            <label for="">Enter your mail adress</label><br>
            <input v-model="NewMail" class="NewMail" type="mail" placeholder="Your mail"><br>
            <label for="">Your Password</label><br>
            <input v-model="Create" class="Create" type="text" placeholder="Create your password"><br>
            <label for="">Confirm your Password</label><br>
            <input v-model="confirm" class="Confirm" type="text" placeholder="Password"><br>
            <button class="insert" type="submit">Create this account</button><br>
            <router-link class="a" to="/">Retour</router-link>
        </form>
</template>

<script>
export default {
    name: 'signup',
    props: ['nom'],
    data(){
        return {
            message : '',
            NewMail : '',
            Create : '',
            confirm : '',
            Name : ''

        }        
    },
    methods : {
        validation : function(){
            const NewMail = this.NewMail
            const Name = this.Name
            const Create = this.Create
            const confirm = this.confirm
            if(!Name || !NewMail || !Create || !confirm){
                this.message = `Veuillez remplir toutes les informations demandées`
                return false
            }
            else{
                if(Create !== confirm){
                    this.message =`les mots de passe que vous avez insérée ne sont pas identiques`
                    return false
                }
                else{
                    fetch('http://localhost:8000/inscription',{
                        method : 'POST',
                        headers : {"Content-Type" : "application/json"},
                        body : JSON.stringify({nom : Name, mail : NewMail, pass : Create})
                    })
                    .then(res=>{
                        res.json()
                            .then(valiny=>{
                                if(valiny.message == 'Ce boite mail est déjà utilisé pour un autre compte'){
                                    this.message = valiny
                                    return false
                                }
                                else{
                                    this.message = valiny.message
                                    this.$router.push('/')
                                }
                            })
                    })
                }
            }
        }
    }
}
</script>

<style scoped>
    form{
        transform: translateY(30%);
    text-align: center;
    background-color: rgb(27, 27, 71);
    line-height: 30px;
    border-radius: 10px;
    width: 500px;
    margin: auto;
}
input{
    border-radius: 10px;
    background-color: transparent;
    outline: none;
    border-left: 0 solid transparent;
    border-right: 0 solid transparent;
    border-top: 0 solid transparent;
    font-weight: bold;
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
button{
    border-radius: 10px;
    margin: 5px;
    /* height: 20px; */
    font-size: 16px;

}
</style>