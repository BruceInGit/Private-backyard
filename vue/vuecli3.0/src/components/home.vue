<template lang="">
    <div>
       欢迎学习VUE 
       <br>
    <router-link to='/requestdata'>请求数据</router-link>
    <br>
    <router-link to='/storage'>TODO例子</router-link>
     <br>
    <router-link to='/parent'>传值</router-link>
    <br>
    <router-link to="/routelist">动态路由匹配</router-link>
    </div>
    
</template>
<script>
export default {
    name:'home'
}
</script>