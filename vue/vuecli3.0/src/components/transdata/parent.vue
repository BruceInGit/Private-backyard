<template>
   <div id="parent">
       <div class="title"> vue父子组件传值</div>
    <child :title='title' :dosth='dosth' ref='zzj'></child>  
    <button @click='getChild'> 点击父组件主动获得子组件的数据和方法</button> 

    <br>
    
    <apage></apage>
    <bpage></bpage>
    </div> 
</template>
<script>
/* 父组件主动获取子组件的数据和方法 
1.在父组件调用子组件时，定义一个ref
<child ref='zzj'></child>  
2.父组件中通过
this.$refs.zzj.属性
this.$refs.zzj.方法
主动获得子组件的数据和方法
*/
import apage from './apage.vue'
import bpage from './bpage.vue'
import child from './child.vue'
    export default{
        name:"parent",
        data(){
            return {
              title:"父组件title",
              msg:'父组件数据'
            }
        },
        methods:{
            dosth(){
                alert('父组件方法');
            },
            getChild(){
                alert(this.$refs.zzj.msg)
            }
        }
        ,
        components:{
            child,
            apage,
            bpage
        }
    }
</script>
<style scoped>
.title{
    font-size: 20px;
  font-weight: bolder;
   padding-bottom: 20px;
  color: red;
}
</style>
