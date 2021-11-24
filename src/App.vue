<template>
<div>
  <img alt="Vue logo" src="./assets/logo.png">
  <AddUser/>
  <user />
</div>
</template>

<script>
import AddUser from './components/AddUser.vue'
import user from './components/user.vue'
export default {
  name: 'App',
  components: {
    AddUser,
    user
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
