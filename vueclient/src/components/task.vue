<template>

  <div>
     <hr>

    <form @submit.prevent="addtask">
      <div class="form-group">
          <label>Title</label>
          <input type="text" id="title" name="title" v-model="title"></td>
        </div>
        <div class="form-group">
            <label>Description</label>
            <textarea rows="4" cols="50" id="description" name="description" v-model="description"></textarea>
          </div>
          <div class="form-group">
              <label>Date</label>
              <input type="date" id="due_date" name="due_date" v-model="due_date">
            </div>

         <button type="submit" class="btn btn-primary">Add Task</button>

    </form>

  </div>
</template>

<script>
import axios from 'axios';
 export default{
   name:'addtask',
   data(){
     return {
       title:'',
       description:'',
       due_date:''
     }
   },
   methods:{
     addtask(){
        const token = localStorage.getItem('token');

       axios.post('http://localhost:5000/users/addtask', {
         title: this.title,
         description: this.description,
         due_date:this.due_date
       })
       .then(function (response) {
         console.log(response);

       })
       .catch(function (error) {
         console.log(error);
       });
       this.due_date =''
       this.description =''
       this.title = ''

     }
   }
 }
</script>
