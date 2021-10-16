import {createRouter, createWebHistory} from 'vue-router'
import Home from './views/Home'
import CharacterDetails from './views/CharacterDetails'
import Play from './views/Play'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/character/:name',
    component: CharacterDetails,
    props: true
  },
  {
    path: '/play',
    component: Play
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;