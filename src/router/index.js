import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/index'
import detailPage from '@/pages/detail'
import publishPage from '@/pages/detail/publish'
import countPage from '@/pages/detail/count'
import forecastPage from '@/pages/detail/forecast'
import analysisPage from '@/pages/detail/analysis'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      'path':'/',
      component:IndexPage
    },
    {
      'path':'/detail',
      component:detailPage,
      redirect:'/detail/count',
      children:[
        {
          path:'analysis',
          component:analysisPage
        },
        {
          path:'publish',
          component:publishPage
        },
        {
          path:'count',
          component:countPage
        },
        {
          path:'forecast',
          component:forecastPage
        }
      ]
    }
  ]
})
