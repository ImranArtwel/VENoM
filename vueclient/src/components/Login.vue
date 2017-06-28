<template>
  <div class="login">
    <h3>{{title}}</h3>
     <hr>
    <form @submit.prevent="login">
      <div class="form-group">
        <input type="text" id="username" name="username" v-model="username" placeholder="Enter Username">
        <br /><br />
        <input type="password" id="password" name="password" v-model="password" placeholder="Enter Password">
        <br /><br />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>

</template>

<script>
import axios from 'axios'
export default {
name: 'login',
  data() {
    return {
      title: 'Login',
      username:'',
      password:''
    }
  },
  methods:{
    login(){
      axios.post('http://localhost:5000/users/authenticate', {
        username: this.username,
        password:this.password
      })
      .then(function (response) {
          const token = response.data.token;
          const user = JSON.stringify(response.data.user);
          console.log(response);
          localStorage.setItem('token',token);
          localStorage.setItem('user',user);

      })
      .catch(function (error) {
        console.log(error);
      });

      this.username='',
      this.password=''

      this.$router.push('/addtask')
    }
  }
}
</script>

<style lang="css">
</style>
