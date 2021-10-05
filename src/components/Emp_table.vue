<template>
  <div class="home">
   <h1>Employee Table</h1>
  </div>

<div class="container">
<table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Job</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Charlie</td>
      <td>Janitor</td>

    </tr>
    <tr>
      <td>Mac</td>
      <td>Bouncer</td>
    </tr>
    <tr>
      <td>Dee</td>
      <td>Aspiring actress</td>
    </tr>
   <tr>
      <td>Dennis</td>
      <td>Bartender</td>
    </tr>

  </tbody>
</table>
</div>

</template>

<script>
// @ is an alias to /src

export default {
  name: 'Emp_table',
  components: {
  }
}
</script>


<style scoped>

h1{

margin-left: 80px;
margin-top: 10px;
}
</style>