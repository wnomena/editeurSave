<template>
    <div v-on:click="ajout" class="deco">
      Ajout
    </div>
  </template>
  
  <script>
  export default {
      name : 'deco' ,
      methods : {
          ajout : function(){
              this.$router.push('/ajouter')
          }
      }
  }
  </script>
  <style scoped>
      div.deco{
          color: white;
          position: absolute;
          top: 10px;
          right: 130px;
          width: auto;
          background-color: rgb(233, 15, 15);
          border-radius: 10px;
          padding: 5px;
          font-weight: bold;
          margin-top: 10px;
          margin-right: 10px;
          cursor: pointer;
          z-index: 11;
      }
  </style>