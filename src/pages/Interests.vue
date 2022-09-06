<template>

    <div class="card">
        <h1>Mes intérêts :</h1>
        <div class="container">
            <div class="cont" v-for="i of interests" :key="i">
                <li>{{i}}</li>
            </div>
        </div>
    </div>
        
    </template>
        
        <script>
            import axios from 'axios';
            export default {
                name: 'MyInterests',
                data(){
                    return{
                        interests: []
                    }
                }, 
                methods: {
                    loadInterests(){
                        axios.get('http://localhost:3000/interests')
                            .then(response => this.interests = response.data)
                    }
        
                },
                mounted(){
                    this.loadInterests()
                }
            }
        
        </script>
        
        <style scoped>
            .card{
            margin: auto;
            padding: 10px;
            width: 20em;
            text-align: center;
            font-size: 20px;
            border: solid 2px black;
            border-radius: 30px;
            background-color: #F7F8FA;
            }
    
            h1{
                margin: 0;
                padding: 8px;
                border-bottom: black 2px solid;
            }
    
            .cont{
                padding: 10px;
            }
    
            li{
                padding: 5px;
                list-style: none;
                background-color: #F3F0F7;
            }
        </style>