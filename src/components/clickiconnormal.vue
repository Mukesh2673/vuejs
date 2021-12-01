<template>
  <div class="container mt-5">
    <div class="row bg-primary w-5" style="width: 420px; height: 240px">
     <img
          :src="url1"
          class="d-inline w-5 h-10"
          alt=""
          style="width: 460px; height: 240px"
        />
    </div>
    <div class="row mt-5">
      <div class="col-4" v-for="(i,k) in a" :Key="k" @click='test(i)'> 
        <h1>{{k}}</h1>
        <img
          :src="i.url"
          class="d-inline w-5 h-10"
          alt=""
          style="width: 120px; height: 120px"
        />
      </div>
    </div>
  </div>

</template>
v-for="i in a" :key(index,i)

<script>
export default {
  Name: "HelloWorld",
  data() {
    return {
      a:[],
      url:'https://via.placeholder.com/600/92c952'
    };
  },
  methods: {
    getData: function () {
      fetch("https://jsonplaceholder.typicode.com/photos/?_limit=3")
        .then((res) => res.json())
        .then((res) => {
          this.a = res;
        
        });
    },

    test:function(b){
      this.url=b.url; 
    }
  },

   
computed:{
  url1:function(){
    return this.url;
  }
},


  created() {
    this.getData();
  },

};
</script>




<style scoped>
.container {
  width: 420px;
}
img {
  width: 60px;
}
</style>
