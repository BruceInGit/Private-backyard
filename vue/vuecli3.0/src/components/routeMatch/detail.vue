<template>
    <div>
       <h2>{{content.title}}</h2>
       <div v-html="content.content"></div>
    </div>
</template>
 <script>
 import Axios from 'axios';
 export default {
     name:'detail',
     data() {
         return {
            msg:'详情',
            content:[],
            id:''
         }
     },mounted() {
         this.getdata();
     },methods: {
         getdata(){
             this.id=this.$route.params.id
            var url=  'http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+this.$route.params.id
              Axios.get(url)
               .then((response)=>{
                  this.content=response.data.result;
                  this.content=this.content[0]; })
               .catch((error)=>{
                 });
              }
         }
    
 }
 </script>

 <style>
 
 </style>
 
