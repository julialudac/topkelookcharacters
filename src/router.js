import {createRouter, createWebHistory} from 'vue-router'
import Home from './views/Home'
import CharacterDetails from './views/CharacterDetails'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/character/:name',
    component: CharacterDetails,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;