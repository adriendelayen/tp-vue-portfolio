<template>

    <h1>Mon profil</h1>
    <div class="alignProfile">
        <div class="cardProfile" v-if="profile">
            <ul>
                <li>Nom : {{profile.firstname}}</li>
                <li>Prénom : {{profile.lastname}}</li>
                <li>Numéro de téléphone{{profile.phone}}</li>
                <li>Poste occupé : {{profile.job}}</li>
                <li>Numéro de rue : {{profile.address.number}}</li>
            </ul>
            <div class="image">
                <img src="../assets/licensed-image.jpg" alt="ma photo">
            </div>
        </div>
    </div>
       <!--<div v-for="(value, key) of profile" :key="value">
            <p>{{value}} {{key}}</p> pour parcourir un objet on a besoin d'une clé et d'une valeur
                
        </div> -->
        
    </template>
        
    <script>
        import axios from 'axios';
        export default {
            name: 'MyProfil',
            data(){
                return{
                    profile:undefined
                }
            },
            methods:{
            getProfil(){
                console.log("in get profile")
            axios.get('http://localhost:3000/profile')
            .then(response => {
                this.profile = response.data
                console.log(this.profile);
            })
            }
        },
        mounted(){
                this.getProfil();
         }
    }
        
        </script>
        
        <style scoped>
            .alignProfile{
                display:flex;
            }
            .cardProfile{
                border: solid black 2px;
                margin:auto;
                display: flex;
                justify-content: center;
                padding: 20px;
                width: 500px;
                border-radius:30px;
                
            }
            ul{
                list-style: none;
                padding-left:5px;
            }
            img{
                width: 200px;
                height: 200px;
                padding-left: 5px;
                font-size:1.3rem;
                
                margin-right:5px;
            }
            .image{
                margin-left:50px;
            }
        </style>