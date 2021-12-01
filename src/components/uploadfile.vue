<template>
<div class="hello">
<input type="file" @change="onFileSelected"><br/><br/>
<button @click='uploaddata' class='primary' :style="{display:[{de}]}">upload</button><br/><br/>
<label>This is The Image:</label>
  <div class="image-container">
      <img :src="image" id="image-preview" />
  </div>
 

 </div>   
</template>
<script>
export default
{
name:'uploadfile',
data(){
    return {
        selectedFile:null,
        de:'none',
        image:''

        }   
    },
methods:{
    onFileSelected(event){
    this.selectedFile=event.target.files[0];
    this.image=event.target.files[0];
    this.de='none';
    var files=event.target.files || event.dataTransfer.files;
    if(!files.length)
        return;
    this.createImage(files[0]);
    },
    createImage(file){
        var image=new Image();
        console.log(image);
        var reader=new FileReader();

        reader.onload=(e)=>{
        this.image=e.target.result;
        console.log(this.image);
        };
        reader.readAsDataURL(file);
    }
}, 




 
computed:{
    ax(){
        return this.image;
    }
}

   
}
</script>
