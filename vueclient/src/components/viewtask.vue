<template>

  <div class="panel panel-default">

    <div class="panel-body">
      <div v-for="task in tasks">
        <input type="text" v-model ="task.title"> <br /><br />
        <textarea rows="4" cols="50" v-model="task.description"></textarea> <br /><br />
        <input type="date" v-model="task.due_date"> <br /><br />
        <button class="btn btn-primary" @click="updateTask">Save</button>
        <button class="btn btn-primary" @click="deleteTask">Delete</button>
        <br /><hr>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
 export default{
   name: 'viewtask',
   data (){
     return {
       tasks: [],
       editing: false
     }
   },
   props: ['qt'],
   mounted (){
      axios.get('http://localhost:5000/users/tasks').
      then (
        (response) => {
          console.log(response)

          this.tasks = response.data;
        }
      ).catch(
        console.log(error)
      );
   },
   methods: {
     updateTask()
     {

     },
     deleteTask()
     {

     }

   }
 }
</script>
