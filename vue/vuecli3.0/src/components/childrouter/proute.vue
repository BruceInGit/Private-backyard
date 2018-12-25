<template>
    <div>
      <div>{{msg}}</div>
      <router-link to="/proute/broute">broute</router-link><router-link to="/proute/croute">croute</router-link>
      <div>
          <router-view></router-view>
      </div>
    </div>
</template>
<script>
 export default {
     /* 嵌套路由
     1.配置路由
      {
            path:'/proute',
            component:proute,
            children:[
                {                  //嵌套路由
                    path:'broute',
                    component:broute, 
                },
                {
                    path:'croute',
                    component:croute, 
                }
            ]
        },
     2.在父组件中配置子组件需要显示的地方
     <router-view></router-view>
     3.父组件定义链接
      <router-link to="/proute/broute">broute</router-link>
     */
     name:'proute',
     data() {
         return {
           msg:"首页组件"
         }
     },methods: {
       
         
     },
     mounted() {
         
     },
 }
</script>