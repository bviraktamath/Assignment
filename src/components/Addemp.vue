<template>
    

 <div class="container" style="max-width: 600px">
    <h2 class="text-center mt-5">Add Employee</h2>

    
<div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" class="form-control"  v-model="task"  aria-describedby="emailHelp" placeholder="Enter name">
    <small id="emailHelp" class="form-text text-muted"></small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Job</label>
    <input type="text" class="form-control"  v-model="job" id="exampleInputPassword1" placeholder="job">
  </div>
  
  <button type="submit" class="btn btn-primary" @click="submitTask">Submit</button>


    <!-- Task table -->
    <table class="table table-bordered mt-5">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col" style="width: 120px">Job</th>
          <th scope="col" class="text-center">Remove</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(task, index) in tasks" :key="index">
          <td>
            <span :class="{ 'line-through': task.job === 'finished' }">
              {{ task.name }}
            </span>
          </td>
          <td>
            <span :class="{ 'line-through': task.job === 'finished' }">
              {{ task.job }}
            </span>
          </td>
          <td class="text-center">
            <div>
              <span class="fa fa-trash pointer"></span>
                <button type="submit" class="btn btn-primary" @click="deleteTask(index)">delete</button>

            </div>
          </td>
          <td class="text-center">
            <div @click="editTask(index)">
              <p class="fa fa-pen pointer"></p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
 

</template>

<script>
export default {
  name: 'Addemp',

 data() {
    return {
      task: "",
      job: "",
      editedTask: null,

      tasks: [
        {
          name: "Basavaraj",
          job: "Developer",
        },
         {
          name: "Devaraj",
          job: "H.R",
        },
      
      ],
    };
  },

  methods: {
    /**
     * Capitalize first character
     */
    capitalizeFirstChar(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },

  
    changeStatus(index) {
      let newIndex = this.statuses.indexOf(this.tasks[index].status);
      if (++newIndex > 2) newIndex = 0;
      this.tasks[index].status = this.statuses[newIndex];
    },

 
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },

   
    editTask(index) {
      this.task = this.tasks[index].name;
      this.editedTask = index;
    },

   
    submitTask() {
      if (this.task.length === 0) return;
      if (this.job.length === 0) return;

      /* We need to update the task */
      if (this.editedTask != null) {
        this.tasks[this.editedTask].name = this.task;
        this.editedTask = null;
      } else {
        /* We need to add new task */
        this.tasks.push({
          name: this.task,
          job:  this.job,
        });
      }

      this.task = "";
      this.job = "";
    },
  },
};






</script>





<style scoped>
.pointer {
  cursor: pointer;
}
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently*/
}
.line-through {
  text-decoration: line-through;
}
</style>