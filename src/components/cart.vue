<template>
    <span>count:{{counterList}}</span><br>
     <button type="submit" class="btn btn-block btn-primary" v-on:click="addcart">Add</button>
</template>
<script>
 import {
    mapGetters,
    mapActions
  } from "vuex";
export default 
{
   name: 'users',
 data(){
      
        },
        methods:{
            ...mapActions(["addToCart"]),
            addcart(){
                this.addToCart();
            }
        },
    computed:{
        ...mapGetters(["counterList"]),
    }
     
}








/*     methods:{
            ...mapActions(["addUsers"]),
            onUserSubmit(){
                this.addUsers({
                    name:this.name,
                    email:this.email
                })
            } }*/
            
</script>
