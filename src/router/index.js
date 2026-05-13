import { createRouter, createWebHashHistory } from 'vue-router'
import AboutMeView from '@/views/AboutMeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ContactView from '@/views/ContactView.vue'
import PlansView from '@/views/PlansView.vue'

const router = createRouter({
  history: createWebHashHistory('/myPortfolio/'),
  routes: [
    {
      path: '/',
      name: 'AboutMe',
      component: AboutMeView,
    },
    {
      path: '/projects',
      name: 'Projects',
      component: ProjectsView,
    },
    {
      path: '/plans',
      name: 'Plans',
      component: PlansView,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView,
    },
  ],
})

export default router
