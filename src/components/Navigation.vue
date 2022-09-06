<template>

<nav>
        <ul>
            <li>
                <router-link :to="{name: 'profil'}">Profil</router-link>
            </li>
            <li>
                <router-link :to="{name: 'experiences'}">Experiences</router-link>
            </li>
            <li>
                <router-link :to="{name: 'interests'}">Interests</router-link>
            </li>
            <li>
                <router-link :to="{name: 'school'}">School</router-link>
            </li>
            <li>
                <router-link :to="{name: 'skills'}">Skills</router-link>
            </li>
        </ul>
</nav>
    
    </template>
    
    <script>
        export default {
            name: 'MyNavbar'
        }
    
    </script>
    
    <style scoped>
    
    </style>