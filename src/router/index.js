import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import JobsView from "@/views/jobs/JobsView";
import JobDetailsView from "@/views/jobs/JobDetailsView";
import NotFound from "@/views/NotFound";

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
    },
    // Redirect
    {
        path: "/all-jobs",
        redirect: "/jobs"
    },
    // Catchall 404
    {
        path: "/:catchAll(.*)",
        name: "notFound",
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
