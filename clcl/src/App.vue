<template>
  <nav>
    <router-link to="/">NormalCentral</router-link>
    |
    <router-link to="/NormalFull">NormalFull</router-link>
    |
    <router-link to="/NormalLateral">NormalLateral</router-link>
    |
    <router-link to="/GoogleCentral">GoogleCentral</router-link>
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
}

nav {
  top: 30px;
  position: absolute;
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
