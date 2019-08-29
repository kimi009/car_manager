import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/**
 * 元信息
 * meta
 * disAnimation 路由跳转是否需要动画
 */

const router = new Router({
  routes: [
    { path: '*', redirect: '/guide', hidden: true },
    {
      path: 'entry',
      component: () => import('@/views/entry'),
      children: [
        {
          path: '/home',
          meta: { showTab: true, requiresAuth: true },
          component: () => import('@/views/home/home')
        },
        {
          path: '/vehicles',
          meta: { showTab: true, requiresAuth: true },
          component: () => import('@/views/vehicles/vehicles')
        },
        {
          path: '/user',
          meta: { showTab: true, requiresAuth: true },
          component: () => import('@/views/user/user'),
          children: [
            {
              path: 'account',
              meta: { requiresAuth: true },
              component: () => import('@/views/user/account/account'),
              children: [
                {
                  path: 'cash',
                  meta: { requiresAuth: true },
                  component: () => import('@/views/user/account/waitingCash')
                }
              ]
            },
            {
              path: 'personal',
              meta: { requiresAuth: true },
              component: () => import('@/views/user/personal/personal'),
              children: [
                {
                  path:'invoice',
                  meta: { requiresAuth: true },
                  component: () => import('@/views/user/personal/invoice'),
                  children: [
                    {
                      path:'addinvoice',
                      meta: { requiresAuth: true },
                      component: () => import('@/views/user/personal/addinvoice'),
                    }
                  ]
                }
              ]
            },
            {
              path: 'bankCard',
              meta: { requiresAuth: true },
              component: () => import('@/views/user/bankCard/bankCard')
            },
            {
              path: 'modify',
              meta: { requiresAuth: true },
              component: () => import('@/views/user/bankCard/modify')
            },
            {
              path: 'car',
              meta: { requiresAuth: true },
              component: () => import('@/views/user/car/car'),
              children: [
                {
                  path: 'detail',
                  meta: { requiresAuth: true },
                  component: () => import('@/views/user/car/carDetail')
                },
                {
                  path: 'upload',
                  meta: { requiresAuth: true },
                  component: () => import('@/views/user/car/uploadCertificate')
                }
              ]
            },
            {
              path: 'lease',
              meta: { requiresAuth: true },
              component: () => import('@/views/user/lease/lease'),
              children: [
                {
                  path: 'detail',
                  meta: { requiresAuth: true },
                  component: () => import('@/views/user/lease/leaseDetail')
                }
              ]
            }
          ]
        },
        {
          path: '/sign',
          meta: { showTab: true, requiresAuth: true },
          component: () => import('@/views/signContract/index'),
          children: [
            {
              path: 'process',
              meta: { showTab: true, requiresAuth: true, keepAlive: true },
              component: () => import('@/views/signContract/signProcess')
            },
            {
              path: 'failed',
              meta: { showTab: true, requiresAuth: true },
              component: () => import('@/views/signContract/auditFailed')
            },
            {
              path: 'submitted',
              meta: { showTab: true, requiresAuth: true },
              component: () => import('@/views/signContract/leaseSubmitted')
            },
            {
              path: 'certificate',
              meta: { showTab: true, requiresAuth: true },
              component: () =>
                import('@/views/signContract/certificate/certificate')
            }
          ]
        }
      ]
    },
    {
      path: '/more',
      component: () => import('@/views/home/more')
    },
    {
      path: '/stationList',
      component: () => import('@/views/station/stationList')
    },
    {
      path: '/stationDetail',
      component: () => import('@/views/station/stationDetail')
    },
    {
      path: '/login',
      component: () => import('@/views/login/login')
    },
    {
      path: '/guide',
      meta: { requiresAuth: true },
      component: () => import('@/views/guide/guide')
    },
    {
      path: '/rent',
      meta: { requiresAuth: true },
      component: () => import('@/views/rentNoSign')
    },
    {
      path: '/rent/list',
      meta: { requiresAuth: true },
      component: () => import('@/views/rentNoSign/inComeList')
    },
    {
      path: '/lease/list',
      meta: { requiresAuth: true },
      component: () => import('@/views/rentNoSign/leaseList')
    },
    {
      path: '/payment',
      meta: { requiresAuth: true },
      component: () => import('@/views/payment')
    },
    {
      path: '/succeed',
      component: () => import('@/views/payment/succeed')
    },
    {
      path: '/preview',
      component: () => import('@/views/commonPage')
    },
    {
      path: '/safe',
      meta: { showTab: false, requiresAuth: true },
      component: () => import('@/views/safe/safe')
    },
    {
      path: '/newsDetail',
      component: () => import('@/views/news/newsDetail')
    },
    {
      path: '/about',
      component: () => import('@/views/about')
    },
    {
      path: '/contact',
      component: () => import('@/views/contact')
    },
    {
      path: '/integral',
      meta: { showTab: false, requiresAuth: true },
      component: () => import('@/views/integral')
    },
    {
      path: '/order',
      meta: { showTab: false, requiresAuth: true },
      component: () => import('@/views/order')
    }
  ]
})

// 根据具体的跳转类型更改跳转属性值，执行不同的动画
const nextDirection = direction => {
  let el = document.getElementById('app')
  if (el) el.setAttribute('transition-direction', direction)
}

router['_push'] = router['push']
router['_replace'] = router['replace']

// 重写路由跳转方法，设置跳转类型后跳转
router.forward = router['push'] = target => {
  nextDirection('forward')
  setTimeout(() => {
    router['_push'](target)
  })
}
router.replace = target => {
  nextDirection('forward')
  setTimeout(() => {
    router['_replace'](target)
  })
}

// 重写路由返回方法，设置跳转类型后跳转到上一页
router.back = target => {
  nextDirection('back')
  router.isBack = true
  if (target) {
    setTimeout(() => {
      router['_push'](target)
    })
  }
  history.go(-1)
}

export default router
