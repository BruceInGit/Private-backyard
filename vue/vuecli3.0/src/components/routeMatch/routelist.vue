<template>
    <div>
       <ul>
           <li v-for="(item,key) in list">
               <router-link :to="'/routelist/detail/'+item.aid">{{item.aid}}-----{{item.title}}</router-link>
                <div @click="daohang(item.aid)">{{item.aid}}-编程式导航-{{item.title}}</div>
           </li>
       </ul>
    </div>
</template>
 <script>
 /* 动态路由绑定
 1.在路由设置界面
   { path: '/user/:id', component: User }
   
2.在显示跳转的界面，绑定上需要传过去的值
  <router-link :to="'/routelist/detail/'+key">{{key}}-----{{item}}</router-link>
  命名的路由
  <router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
  带查询参数，下面的结果为 /register?plan=private
  <router-link :to="{ path: 'register', query: { plan: 'private' }}">Register</router-link>
3.在已经跳转的界面通过this.$route.params.id获取传过来的值
 */



/*  get传值
1.在路由设置界面
   { path: '/user', component: User }
 2.在显示跳转的界面，绑定上需要传过去的值
<router-link :to="'/routelist/detail?id:'+key">{{key}}-----{{item}}</router-link>
3.在已经跳转的界面通过this.$route.query.id获取传过来的值
*/
import Axios from 'axios'
 export default {
     name:'routelist',
     data() {
         return {
             list:[]
         }
     },methods: {
         getdata(){
              Axios.get('http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1')
                  .then((response)=>{
                   console.log(response);
                   this.list=response.data.result })
                  .catch((error)=>{
                    console.log(error) });
                },
        daohang(id){
            /*编程式导航
            单击<router-link :to="...">等同于调用router.push(...)方法

            1.this.$router.push({ path: `/routelist/detail/${id}` }); 通过path访问
            2.this.$router.push({name:"detail",params:{id}})通过name访问，前提是路由里给路径命名了
            */
          
          this.$router.push({name:"detail",params:{id}})
        }
         
     },
     mounted() {
          this.getdata()
     },
 }
 </script>

 <style>
 
 </style>
 
