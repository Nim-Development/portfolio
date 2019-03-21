import Vue from 'vue';
import VueRouter from 'vue-router';

import Portfolio from './views/Portfolio.vue';
import About from './views/About.vue';
import Project from './views/Project.vue';
import Contact from './views/Contact.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'portfolio',
            component: Portfolio
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/project/:id',
            name: 'project',
            component: Project
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        }
    ]
});

export default router;