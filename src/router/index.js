import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Roadmap from '../views/Roadmap.vue'
// import Roadmap from '../views/Roadmap.vue'
// import Team from '../views/Team.vue'
// import Tokenomics from '../views/Tokenomics.vue'
// import Whitepaper from '../views/Whitepaper.vue'

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
  // {
  //   path: '/roadmap',
  //   name: 'Roadmap',
    
  //   component: Roadmap
  //   },
 
  // {
  //   path: '/team',
  //   name: 'Team',
    
  //   component: Team  
  //   },
  // {
  //   path: '/tokenomics',
  //   name: 'Tokenomics',
    
  //   component: Tokenomics
  //   },
  // {
  //   path: '/Whitepaper',
  //   name: 'Whitepaper', 
    
  //   component: Whitepaper
  //   }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
