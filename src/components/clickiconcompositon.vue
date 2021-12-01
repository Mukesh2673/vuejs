<template>
  <div class="container mt-5">
    <div class="row bg-primary w-5" style="width: 420px; height: 240px">
      <img
        :src="url2"
        class="d-inline w-5 h-10"
        alt=""
        style="width: 460px; height: 240px"
      />
    </div>
    <div class="row mt-5">
      <div class="col-4" v-for="(i, k) in a" :Key="k" @click="test(i)">
        <br />
        <img
          :src="i.url"
          class="d-inline w-5 h-10"
          alt=""
          style="width: 120px; height: 120px"
        />
      </div>
    </div>
    <button
      class="btn btn-primary mt-5 float-right align-right"
      style="margin-left: 0%"
      @click="()=>getData()"
    >
      Add More
    </button>
  </div>
</template>


<script>
import { computed, ref } from "vue";
export default {
  Name: "clickicon",
  setup() {
    var a = ref([]);
    var limit = ref(3);
    var url1 = ref("https://via.placeholder.com/600/92c952");
    function getData(){
      fetch(
        `https://jsonplaceholder.typicode.com/photos/?_limit=${limit.value}`
      )
        .then((res) => res.json())
        .then((res) => {
          a.value = res;
          limit.value+=3;
   
        });
    }
   if(!a.value.length)
    {
      getData();

    } 
    function test(b){
      url1.value = b.url;
    }
    

    var url2 = computed(() => {
      return url1.value;
    });

    return {
      a,
      test,
      url2,
      getData
  
    };
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
