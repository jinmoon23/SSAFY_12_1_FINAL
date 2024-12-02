import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LogInView from '@/views/LogInView.vue'
import SignUpView from '@/views/SignUpView.vue'
import UserSelectView from '@/views/UserSelectView.vue'
import LoadingView from '@/views/LoadingView.vue'
import ThemeListView from '@/views/ThemeListView.vue'
import ThemeItemView from '@/views/ThemeItemView.vue'
import StockItemView from '@/views/StockItemView.vue'
import DayStockChart from '@/components/stocks/DayStockChart.vue'
import WeekStockChart from '@/components/stocks/WeekStockChart.vue'
import MonthStockChart from '@/components/stocks/MonthStockChart.vue'
import SixMonthStockChart from '@/components/stocks/SixMonthStockChart.vue'
import YearStockChart from '@/components/stocks/YearStockChart.vue'
import CommunityView from '@/views/CommunityView.vue'
import CreateArticleView from '@/views/CreateArticleView.vue'
import ArticleDetailView from '@/views/ArticleDetailView.vue'
import ThemeLoadingView from '@/views/ThemeLoadingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'LogInView',
      component: LogInView,
    },
    {
      path: '/signup',
      name: 'SignUpView',
      component: SignUpView,
    },
    {
      path: '/userselect',
      name: 'UserSelectView',
      component: UserSelectView,
    },
    {
      path: '/loading',
      name: 'LoadingView',
      component: LoadingView,
    },
    {
      path: '/loading/:theme_id',
      name: 'ThemeLoadingView',
      component: ThemeLoadingView,
    },
    {
      path: '/themelist',
      name: 'ThemeListView',
      component: ThemeListView,
    },
    {
      path: '/themeitem/:theme_id',
      name: 'ThemeItemView',
      component: ThemeItemView,
    },
    {
      path: '/stockitem/:stock_id',
      name: 'StockItemView',
      component: StockItemView,
      children:[
        {
          path: '',
          redirect: to => {
            return { name: 'day', params: { stock_id: to.params.stock_id } }}
        },
        {
          path: 'day',
          name: 'day',
          component: DayStockChart,
        },
        {
          path: 'week',
          name: 'week',
          component: WeekStockChart,
        },
        {
          path: 'month',
          name: 'month',
          component: MonthStockChart,
        },
        {
          path: 'sixmonth',
          name: 'sixmonth',
          component: SixMonthStockChart,
        },
        {
          path: 'year',
          name: 'year',
          component: YearStockChart,
        },
      ]
    },
    {
      path: '/:stock_id/community',
      name: 'CommunityView',
      component: CommunityView,
    },
    {
      path: '/:stock_id/create',
      name: 'CreateArticleView',
      component: CreateArticleView,
    },
    {
      path : '/:stock_id/community/:article_id',
      name : 'ArticleDetailView',
      component : ArticleDetailView,
    }
  ],
})


export default router
