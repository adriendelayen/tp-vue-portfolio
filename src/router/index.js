import { createRouter, createWebHistory} from "vue-router";
import Experiences from "@/pages/Experiences";
import Interests from "@/pages/Interests";
import Profil from "@/pages/Profil";
import School from "@/pages/School";
import Skills from "@/pages/Skills";
import Contact from "@/pages/Contact"

const router = createRouter({
    routes: [
        {path: '/experiences', name: 'experiences', component: Experiences},
        {path: '/interests', name: 'interests', component: Interests},
        {path: '/profil', name: 'profil', component: Profil},
        {path: '/school', name: 'school', component: School},
        {path: '/skills', name: 'skills', component: Skills},
        {path: '/contact', name: 'contact', component: Contact},
    ],
    history: createWebHistory(),
});

export default router;