<template >
    <div>
        
        bpage组件
        <div>{{bmsg}}</div>
    </div>
</template>

<script>
/* 非父子组件传值 
1.新建一个文件，引入并实例化vue，再暴露出去 model/vuezjtransdata.js（总线）
2.分别在组件引入总线实例
3.在一个组件通过vuetrans.$emit('chuan',this.msg)广播数据
4.在另一个组件通过vuetrans.$on('chuan',function(data){})接受并处理数据
*/
import vuetrans from '../../model/vuezjtransdata.js'
export default {
    name:'bpage',
     data() {
        return {
            bmsg:'bpages的数据'
        }
    },
    mounted() {
        let that = this;  //保存this指针，指向当前vue实例，或者将funtion换为箭头函数则不会出现指针问题
       vuetrans.$on('chuan',function(data){
          that.bmsg=data;       //这里面的this指针指向vuetrans
       })  
    },
}
</script>
<style scoped>

</style>
