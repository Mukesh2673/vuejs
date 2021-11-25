<template>
  <div>
<table class="table">
    
    <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Action</th>
    </tr>

<tbody>    
      <tr v-for="user in usersList" :key="user.id">
           
          <td>
          <h3>{{user.name}}</h3>
          </td>
            <td> <p>{{user.email}}</p></td>
            <td>
          <small class="text-danger delete" @click="deleteUser(user.id)">Delete</small>
            </td>
       </tr>
</tbody>
    </table>
  </div>
</template>

<script>
  import {
    mapGetters,
    mapActions
  } from "vuex";

  export default {
    name: 'users',
    methods: {
      ...mapActions(["fetchUsers", "deleteUser"])
    },
    computed:{
        ...mapGetters(["usersList"]),
    },
    created(){
      this.fetchUsers()
     
}
  }
</script>

<style>
 .delete {
   font-size: 18px;
   cursor: pointer;
 }

</style>