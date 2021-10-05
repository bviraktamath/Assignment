<template>
  
  <div class="container">
<ul>
  <li><router-link to="/Home" class="active" >HOME</router-link></li>
  <li><router-link to="/Projects">PROJECTS</router-link></li>
  <li><router-link to="/Services">SERVICES</router-link></li>
  <li><router-link to="/Contact">CONTACT</router-link></li>
</ul>
</div>

<router-view/>


</template>






<style scoped>

ul {
  list-style-type: none;
  margin: 10px;
  padding: 0px;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #111;
}

.active {
  background-color: #04AA6D;
}

</style>