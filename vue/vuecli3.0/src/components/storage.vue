<template>
  <div>
    <div class="title">
      todo，刷新不会重新加载 
    </div>
  <input type="text" v-model="todo">
  <button @click="add()">增加</button>
  <h2>进行中</h2>
  <div v-for="(item,key) in list" v-if='!item.check' >
     <input type="checkbox" v-model="item.check" >  
          {{item.title}}
     <button @click="dele(key)">减少</button>
  </div>
  <h2>已完成</h2>
  <div v-for="(item,key) in list" v-if='item.check' >
    <input type="checkbox" v-model="item.check" @change="change()" >  
          {{item.title}}
    <button @click="dele(key)">减少</button></div>
  </div>
</template>
<script>
import storage from '../model/storage.js';

  export default {
    name:'storage',
    data(){
      return {
      list:[],
      todo:'',
      }
  },
      methods:{
       add(){
         if(!this.todo){
           alert('请输入');
         }
         else{
        this.list.push({title:this.todo,check:false});
        this.todo="";
     
        storage.set('list',this.list);
        }
       },
       dele(key){
        this.list.splice(key,1);
         storage.set('list',this.list);
       },
       change(){
         storage.set('list',this.list);
       }
      },
      mounted(){
        var list=storage.get('list');
        if(list){
          this.list=list;
          console.log(this.list)
        }
      }
    }
</script>
<style >
.red{color:red;}
.title{
  font-size: 20px;
  font-weight: bolder;
   padding-bottom: 20px;
  color: red;
}
</style>