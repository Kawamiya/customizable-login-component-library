<template>
  <nav>
<!--    <router-link to="/">Home</router-link>-->
<!--    |-->
    <a href="home.html">Home</a>
    |
    <router-link to="/Amazon">Amazon</router-link>
    |
    <router-link to="/Github">Github</router-link>
    |
    <router-link to="/Google">Google</router-link>
  </nav>
  <router-view />
</template>

<style>
body {
  margin: 0;
}

#app {
  padding: 0;
  margin: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /*float: right;*/
}

nav {
  top: 30px;
  position: absolute;

  /*width: calc(100%);*/
  /*padding: 30px;*/
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
