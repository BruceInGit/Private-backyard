<template >
    <div >
        <div class="title">非父子组件传值</div>
        apage组件
        <button @click="emitdata()">给bpage传数据</button>
    </div>
</template>

<script>
import vuetrans from '../../model/vuezjtransdata.js'
export default {
    name:'apage',
    data() {
        return {
            msg:'apages的数据'
        }
    },
    methods: {
        emitdata(){
            vuetrans.$emit('chuan',this.msg)
        }
    },
       
    
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