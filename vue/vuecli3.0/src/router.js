import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home.vue'
import requestdata from './components/requestdata.vue'
import storage from './components/storage.vue'
import parent from './components/transdata/parent.vue'
import routelist from './components/routeMatch/routelist.vue'
import detail from './components/routeMatch/detail.vue'
Vue.use(Router)
export default new Router({
      routes:[ 
        {
            path: '/home',
            component: Home
        },
        {
            path:'/',
            redirect:'/home'
        },
        {
            path: '/requestdata',
            component: requestdata
        },
        {
            path: '/storage',
            component: storage
        },
        {
            path: '/parent',
            component: parent
        },
        {
            path:'/routelist',
            component:routelist
        },
        {
            path:'/routelist/detail/:id',
            component:detail
        }
     ]
})

/*
vue路由配置：


	1.安装 

	npm install vue-router  --save   / cnpm install vue-router  --save


    2、引入并 Vue.use(VueRouter)   (router.js)
         import Vue from 'vue'
 
		import VueRouter from 'vue-router'

		Vue.use(VueRouter)

	
	3、配置路由

		

		1、创建组件 引入组件 router.js


		2、定义路由  实例化

			routes = [
			  { path: '/foo', component: Foo },
			  { path: '/bar', component: Bar },
			  { path: '*', redirect: '/home' }   
			]

    
            4、挂载 main.js中引入router.js
    
              import router from './router.js'      
            new Vue({
              el: '#app',
              router，
              render: h => h(App)
            })
    
    
            
            5 、根组件的模板里面放上这句话   
            <router-view></router-view>         
    
    
    
    
            6、路由跳转
            <router-link to="/requestdata">Go to Foo</router-link>
             <router-link to="/storage">storage</router-link>

*/