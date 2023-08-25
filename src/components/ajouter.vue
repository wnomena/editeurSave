<template>
  <page />
  <ajout />
  <deco />
  <token />
</template>

<script>
import page from '@/components/page.vue'
import ajout from '@/components/ajout.vue'
import deco from '@/components/disconnect.vue'
import token from '@/components/token.vue'
export default {
components : {
    page,ajout,deco,token
},
name : 'ajouter'
}
</script>

<style>

</style>