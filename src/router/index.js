import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Services from '../views/Services.vue'
import Contact from '../views/Contact.vue'
import Weather from '../components/Weather.vue'
import Calculator from '../components/Calculator.vue'
import Emp_table from '../components/Emp_table.vue'
import Navbar from '../components/Navbar.vue'
import Addemp from '../components/Addemp.vue'
import Digital_clock from '../components/Digital_clock.vue'










const routes = [


  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component:About
  },
  {
    path: '/Projects',
    name: 'Projects',
    component:Projects
  },
  {
    path: '/Services',
    name: 'Services',
    component:Services
  },
  {
    path: '/Contact',
    name: 'Contact',
    component:Contact
  },
  {
    path: '/Weather',
    name: 'Weather',
    component:Weather
  },
  {
    path: '/Calculator',
    name: 'Calculator',
    component:Calculator
  },
  {
    path: '/Emp_table',
    name: 'Emp_table',
    component:Emp_table
  },
  {
    path: '/Navbar',
    name: 'Navbar',
    component:Navbar
  },
  {
    path: '/Addemp',
    name: 'Addemp',
    component:Addemp
  },
  {
    path: '/Digital_clock',
    name: 'Digital_clock',
    component:Digital_clock
  },

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
