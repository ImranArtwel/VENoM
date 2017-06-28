<template>
  <div class="register">
   <h1>{{title}}</h1>

   <hr>

   <form  v-on:submit.prevent="register">
      <div class="form-group">
       <input type="text" id="name" name="name" v-model="name" placeholder="Enter Name" autocomplete="false">
       <br /><br />
       <input type="text" id="username" name="username" v-model="username" placeholder="Enter Username" autocomplete="false">
       <br /><br />
       <input type="password" id="password" name="password" v-model="password" placeholder="Enter Password">
       <br /><br />
     </div>
     <button type="submit" class="btn btn-primary">Register</button>

   </form>
  </div>
</template>

<script>
 import axios from 'axios';
 export default {
   name: 'register',
  data() {
   return {
     title: 'Welcome Fellas ',
     msg: '',
     name:'',
     username:'',
     password:''
   }
  },
  methods:{
   register(){

  axios.post('http://localhost:5000/users/register', {
    name: this.name,
    username: this.username,
    password:this.password
  })
  .then(function (response) {
    console.log(response);

  })
  .catch(function (error) {
    console.log(error);
  });

  this.name = "";
  this.username = "";
  this.password = "";
  this.$router.push('/login')
  }
  }
 }

</script>

<style scoped>

</style>
