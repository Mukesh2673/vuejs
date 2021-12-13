<template>
  <div>
    <h1>hello viswas</h1>
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        :style="{ width: [width1] }"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  Name: "progressbar",
  data() {
    return {
      width: 100,
      message: "welcome to vue js application",
    };
  },
  methods: {
    callFunction: function () {
      var v = this;
      console.log(v.width);
      for (let i = 10; i >= 0; i--) {
        setTimeout(function () {
          v.width = 100 - i * 10 + "%";
          console.log(v.width);
        }, i * 3000);
      }
    },
    test() {
      for (let i = 10; i >= 0; i--) {
        console.log(i);
      }
    },
  },

  computed: {
    width1() {
      return this.width;
    },
  },
  mounted() {
    this.callFunction();
    //this.test();
  },
};
</script>
