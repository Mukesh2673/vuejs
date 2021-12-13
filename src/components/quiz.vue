
<template>
    <div class="container">
    <div class="progress">
        <div class="progress-bar bg-danger" role="progressbar" :style="{width: [width1]}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  <div class="row d-flex justify-content-center mt-5">

<div class="card cardcss" :style="{display: marksbody}">
  <div class="card-body">
    <h5 class="card-title">Quiz Result</h5>
    <div class="card-text center">{{count}} marks</div>      
  </div>
</div>



 </div>   

  <div class="row d-flex justify-content-center" >
  <div class="card" style="width: 38rem;box-shadow: 5px 5px 10px 10px grey; "  v-show="questionsbody">
  <div class="card-body">
    <h5 class="card-title">Simple Quiz Application</h5>
    <div class="card-text center" v-for="(i,k) in questions1" :Key="k">{{i}}</div>
   <div class="d-flex flex-column"> 
    <div class="bg-primary text-light btn btn-primary mt-1"  v-for="(i,k) in answers1" :Key="k" v-on:Click="test">{{i}}</div>

    </div>
  </div>
</div>
    </div>
  </div>
</template>
<script>
export default ({
Name:'AddQuestion',
data(){
  return{
    questions:[],
    answers:[],
    correctAnswers:[],
    count:0,
    qn:0,
    t:1,
    marksbody:'none',
    questionsbody:true,
    width:100,
    progressbardisplay:'none',
    counterflag:0
  }
},
methods:{
 async getQuestions(t){
let res=await fetch(`http://localhost:3000/${t}`);
if(res.status==200)
{
  let data=await res.json();
  this.questions.push(data[this.qn].question)
  this.answers.push(data[this.qn].options),
  this.correctAnswers.push(data[this.qn].answers)
  this.answers=this.answers[this.qn];
}
else{
  this.marksbody='block';
  this.questionsbody=!this.questionsbody
  }


},
test(e){
//var i=0;
this.counterflag=1;
let t=(e.target.innerText);
let c=this.correctAnswers[0][0];

if(t===c)
{
  this.count++;

 // i++;
}
this.correctAnswers=[];
this.t++; //increase the backend array index so that watch can be run;
},
setshow(t){
  console.log("\n",t)
  t++;
},
callFunction: function () {
            var v = this;
            for(let i=10;i>=0;i--){
            setTimeout(function (){
                   if(v.counterflag==1)
                   {
                     console.log(v.counterflag);
                     v.counterflag=0;
                     return i=10;

                   }
                   
                    v.width=100-i*10+'%'
                    if(v.width==0+'%')
                       { console.log('hi');
                         v.t++;
                         if(v.t<=2){
                        return v.callFunction();}
                        
                        else{
                            v.questionsbody=!v.questionsbody;
                                v.progressbardisplay='none'
                            console.log('finishied');
                          return 0;
                        }
                       }
                    console.log(v.width);
            }, i*3000);
            }
        }





















},
/* method fininesh */

watch:{
t(){
  let q='q'+this.t;
  this.questions=[];
  this.answers=[];
  this.getQuestions(q);


},

},
computed:{
 questions1(){
    return this.questions
 },
  answers1(){
  
    return this.answers;
 },
  width1(){
            return this.width;
        }
},




beforeMount(){
  let t='q'+1
  this.getQuestions(t);
  //console.log(this.questions)
},
mounted(){
        this.callFunction();
        //this.test();
    }


})
</script>
<style scoped>
.cardcss{
  width:18rem;box-shadow: 5px 5px 10px 10px grey;
}

</style>
