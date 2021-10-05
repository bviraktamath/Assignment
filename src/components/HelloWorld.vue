<template>
<div class="container">
<h1>Welcome To HelloWorld</h1>
 </div>  

   <div class="container">
<ul>
  <li><router-link to="/Emp_table"  >Employee-Table</router-link></li>
  <li><router-link to="/Addemp">Add-Employee</router-link></li>
  <li><router-link to="/Calculator">Calculator</router-link></li>
  <li><router-link to="/Digital_clock">Digital-Clock</router-link></li>
  <li><router-link to="/Navbar">Navbar</router-link></li>
  <li><router-link to="/Weather">Weather-Dashboard</router-link></li>


</ul>
</div>

<router-view/>

</template>

<script>
export default {
  name: 'HelloWorld',
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  margin-top: 20px;
  margin-left: 40px;
}

</style>
