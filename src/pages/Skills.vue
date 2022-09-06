<template>

    <h1>My skills</h1>
    <div class="container_xl" v-for="s of skills" :key="s.id">
        <div class="card">
            
                <div class="container">
                    <p class="lvl">{{s.level}}</p>
                    <h3 class="name">{{s.name}}</h3>
                </div>
           <p class="effect">{{s.effect}}</p>
        </div>
        
    </div>
</template>
    
<script>
        import axios from 'axios';

        export default {
            name: 'MySkills',
            data:()=>({
                skills: [],
                new_skill:''
                
            }),
            methods:{
                getSkills() {
                    axios.get('http://localhost:3000/skills')
                    .then(response => this.skills = response.data)

                    }
            },
            mounted(){
                    this.getSkills();
            }
        }
        
    
    </script>
    
    <style scoped>
      .container{
        display: flex;
        justify-content: space-evenly;
      }
      .card{
        margin-top: 1rem;
        margin-bottom: 1rem;
        border: thin 1px black;
        border-radius: 1rem;
        box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 1px 7px 13px 1px rgba(0,0,0,0);
      }
      .card:hover{
        
        box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 1px 7px 13px 1px rgba(0,0,0,0);
    }
      .name{
        color: blue;
      }
      .lvl{
        background-color: red;
        display: inline-block;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        text-align: center;
        
      }
      .effect{
        color: green;
        
        
        
      }
     

    </style>