<template>
  <div class="hello">
    <div class="title">
      vue请求数据axios和vue-resource
    </div>
   <button @click="get()">v-resource请求接口</button>
   <h2>v-resource请求的数据</h2>
   <div v-for="item in alist">{{item}}</div>
   <button @click="gettwo()">axios请求接口</button>
   <h2>axios请求的数据</h2>
   <div v-for="item in blist">{{item}}</div>
   <br>
   <br>
   <br>
  </div>
</template>

<script>
/* 使用Vue-resource请求数据
1.npm install vue-resource --save安装模块
2.main.js中引入  import VueResource from 'vue-resource';
3.vue.use(VueResource)使用插件
4.在组件中使用
      {
         // GET /someUrl
          this.$http.get('url').then(response => {
               // get body data
          }, response => {
               // error callback
        });
       }
*/
import Axios from 'axios';
export default {
  name: 'requestdata',
  data(){
    return {
      alist:[],
      blist:[]
    }
  },
  methods:{
    get(){
           {
             // GET /someUrl
              this.$http.get('https://www.easy-mock.com/mock/5bc2ecc1dfc4ef4ebc52b236/lyl/home')
              .then(response => 
              {   
               // get body data
               this.alist=response.body.data.swiperList;
              }, 
              response => {
               // error callback
              console.log("err");
              });
            }
           },
    gettwo(){
      /*使用axios请求数据
      1.npm install axios --save
      2.在组件内引入 import Axios from 'axios'
      3.使用
        Axios.get('url')
      .then((response)=>{
        })
      .catch((error)=>{
        });
     }
      */
      Axios.get('https://www.easy-mock.com/mock/5bc2ecc1dfc4ef4ebc52b236/lyl/home')
      .then((response)=>{
        
         this.blist=response.data.data.bookList;
        console.log(response.data.data);
        })
      .catch((error)=>{
        console.log(error);
        });
     }
}}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
  font-size: 20px;
  font-weight: bolder;
  padding-bottom: 20px;
  color: red;
}
</style>
