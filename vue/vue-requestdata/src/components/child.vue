<template>
 <div id="child">
     <div>{{title}}</div>
     <button @click="dosth()">点击使用父组件方法</button>
 </div>
</template>
<script>
    export default{
        name:"child",
        data(){
            return {

            }
        },
        props:['title','dosth']
    }
</script>
<style scoped>

</style>