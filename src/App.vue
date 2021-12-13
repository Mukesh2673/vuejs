<template>
<quiz/>

</template>

<script>
import quiz from './components/quiz.vue'
export default {
  name: 'App',
  components: {
    quiz
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
