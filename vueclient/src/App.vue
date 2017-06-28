<template>
  <div id="app">
  <div class="container">
   <div class="links">
     <router-link :to="{path: '/'}">Home</router-link>|
     <router-link :to="{path: '/login'}">Login</router-link>|
     <router-link :to="{path: '/addtask'}">Add Task</router-link>|
     <router-link :to="{path: '/tasks'}">View Tasks</router-link> |
     <a href="#" @click="logout">Logout</a>
   </div>

  <router-view></router-view>
</div>
 <hr>
  </div>
</template>

<script>

import Register from './components/register'


export default {
  name: 'app',
  components: {
    Register
  },
  methods: {
    logout(){
      localStorage.clear();
      this.$router.push('/login')
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}



</style>
