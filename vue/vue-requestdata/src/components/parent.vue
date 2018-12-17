<template>
   <div id="parent">
    <child :title='title' :dosth='dosth'></child>   
    </div> 
</template>
<script>
import child from './child.vue'
    export default{
        name:"parent",
        data(){
            return {
              title:"父组件title"
            }
        },
        methods:{
            dosth(){
                alert('父组件方法');
            }
        }
        ,
        components:{
            child
        }
    }
</script>
<style scoped>

</style>
