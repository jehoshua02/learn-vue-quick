import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyComponent from '@/components/MyComponent'
import ListComponent from '@/components/ListComponent'
import ComponentsComponent from '@/components/ComponentsComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/my-route',
      name: 'MyRoute',
      component: MyComponent
    },
    {
      path: '/list',
      name: 'ListRoute',
      component: ListComponent
    },
    {
      path: '/components',
      name: 'ComponentsRoute',
      component: ComponentsComponent
    }
  ]
})
