<template>
  <nav>
  </nav>
  <router-view/>
</template>
<style>
#app {
  padding: 5px;
  background-color: #00CCFF;
  height: 100vh;
  outline: hidden;
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50; */
} 

nav {
  color: #0a63bd;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
