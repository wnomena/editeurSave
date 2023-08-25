<template>
    <div v-on:click="deco" class="deco">
      Déconnexion
    </div>
  </template>
  
  <script>
  export default {
      name : 'deco' ,
      methods : {
          deco : function(){
              localStorage.removeItem('mail')
              localStorage.removeItem('e')
              localStorage.removeItem('token')
              localStorage.removeItem('mail')
              localStorage.removeItem('nom')
              this.$router.push('/')
          }
      }
  }
  </script>
  <style scoped>
      div.deco{
          color: white;
          position: absolute;
          top: 10px;
          right: 10px;
          width: auto;
          background-color: rgb(2, 14, 14);
          border-radius: 10px;
          padding: 5px;
          font-weight: bold;
          margin-top: 10px;
          margin-right: 10px;
          cursor: pointer;
          z-index: 11;
      }
  </style>