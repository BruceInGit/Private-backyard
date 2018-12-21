<template>
 <div id="child">
     <div>{{title}}</div>
     <button @click="dosth()">传值使用父组件方法</button>
     <button @click='getParent'>主动获得父组件属性和方法</button>
 </div>
</template>
<script>
/*  父组件给子组件传值
1. 父组件调用子组件时，将要传的东西，绑定动态属性
<child :title='title' :dosth='dosth'></child>   //可绑定数据，方法，父组件本身
2.子组件接受
props：['titkle','dosth']
或者
props:{
    'title':string,
    'dosth':function
}
3.直接在子组件中使用


 */


/*  子组件中主动获得父组件的数据和方法
直接在子组件中通过

this.$parent.数据
this.$parent.方法
获得父组件的数据和方法

*/
    export default{
        name:"child",
        data(){
            return {
              msg: "子组件的数据"
            }
        },
        methods: {
            getParent(){
                alert(this.$parent.msg)
            }
        },
        props:['title','dosth']
    }
</script>
<style scoped>

</style>