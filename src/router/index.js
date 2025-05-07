import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import GeneralSupplies from '@/views/GeneralSupplies.vue';
import Services from '@/views/Services.vue';
import AboutUs from '@/views/AboutUs.vue';
import Projects from '@/views/Projects.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/supplies', name: 'GeneralSupplies', component: GeneralSupplies },
  { path: '/services', name: 'Services', component: Services },
  { path: '/about', name: 'AboutUs', component: AboutUs },
  { path: '/projects', name: 'Projects', component: Projects },

];


const router = createRouter({
  history: createWebHistory(),
  routes
});


export default router;