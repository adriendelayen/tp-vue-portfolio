import { createRouter, createWebHistory} from "vue-router";
import Experiences from "@/pages/Experiences";
import Interests from "@/pages/Interests";
import Profil from "@/pages/Profil";
import School from "@/pages/School";
import Skills from "@/pages/Skills";

const router = createRouter({
    routes: [
        {path: '/experiences', name: 'experiences', component: Experiences},
        {path: '/interests', name: 'interests', component: Interests},
        {path: '/profil', name: 'profil', component: Profil},
        {path: '/School', name: 'school', component: School},
        {path: '/Skills', name: 'skills', component: Skills},
    ],
    history: createWebHistory(),
});

export default router;