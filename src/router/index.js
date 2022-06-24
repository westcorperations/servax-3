import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Roadmap from '../views/Roadmap.vue'
// import Roadmap from '../views/Roadmap.vue'
import Team from '../views/Team.vue'
import Tokenomics from '../views/Tokenomics.vue'
import Whitepaper from '../views/Whitepaper.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Roadmap',
    name: 'Roadmap',
     
    component: Roadmap 

  },
  
 
  {
    path: '/Team',
    name: 'Team',
    
    component: Team  
    },
  {
    path: '/Tokenomics',
    name: 'Tokenomics',
    
    component: Tokenomics
    },
  {
    path: '/Whitepaper',
    name: 'Whitepaper', 
    
    component: Whitepaper
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
