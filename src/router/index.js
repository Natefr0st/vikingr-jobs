import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import JobsView from "@/views/jobs/JobsView";
import JobDetailsView from "@/views/jobs/JobDetailsView";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/jobs',
        name: 'jobs',
        component: JobsView
    },
    {
        path: '/jobs/:id',
        name: 'jobDetails',
        component: JobDetailsView,
        props: true,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
