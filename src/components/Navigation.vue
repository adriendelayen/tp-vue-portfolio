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
            <li>
                <router-link :to="{name: 'contact'}">Contact</router-link>
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
    
    nav {
  background-color: rgb(0, 149, 255);
  height: 70px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 95%);
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  width: 80%;
  margin: auto;
}

li {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

a:link, a:visited, li {
  color: var(--main-lighter);
  font-size: 1.1em;
  text-decoration: none;
  font-family: var(--title-font);
}

a:hover {
 text-decoration: underline;
}

    </style>