<template>
 <form @submit.prevent="onUserSubmit">
  <div class="form-group">
    <input type="text" class="form-control" placeholder="Enter name" v-model="name">
  </div><br>
  <div class="form-group">
    <input type="text" class="form-control" placeholder="Enter email" v-model="email">
  </div><br>
  <button type="submit" class="btn btn-block btn-primary">Add</button>
</form>
</template>
<script>
import {mapActions} from "vuex";
export default  {
    name:'AddUser',
    data(){
        return {
            name:'',
            email:''
        }
    },
    methods:{
            ...mapActions(["addUsers"]),
            onUserSubmit(){
                this.addUsers({
                    name:this.name,
                    email:this.email
                })
            }
            }
}


</script>
<style scoped>
input{
    width:420px;
    margin-left:550px;
}
</style>