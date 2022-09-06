<template>

<h1>Mes experiences</h1>
<div class="container">
    <div class="card" v-for="x of xp" :key="x.id">
        <h2>{{x.job_name}}</h2>
        <ul>
            <li>{{x.start_year}} - {{x.end_year}}</li>
            <li>{{x.company}}, {{x.city}}</li>
            <li>{{x.description}}</li>
        </ul>
    </div>
</div>

<div class="container">
    <div class="traitun"></div>
    <div class="traitdeux"></div>
    <div class="traittrois"></div>
</div>


<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,32L24,69.3C48,107,96,181,144,202.7C192,224,240,192,288,165.3C336,139,384,117,432,112C480,107,528,117,576,138.7C624,160,672,192,720,176C768,160,816,96,864,96C912,96,960,160,1008,197.3C1056,235,1104,245,1152,261.3C1200,277,1248,299,1296,288C1344,277,1392,235,1416,213.3L1440,192L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>

</template>

<script>
    import axios from 'axios';
    export default {
        name: 'MyExperiences',
        data(){
            return{
                xp: []
            }
        }, 
        methods: {
            loadXp(){
                axios.get('http://localhost:3000/experience')
                    .then(response => this.xp = response.data)
            }

        },
        mounted(){
            this.loadXp()
        }
    }

</script>

<style scoped>

.container{
    display: flex;
}

.card{
    width: 400px;
    border: solid black 2px;
    border-radius: 30px;
    margin-left: 20px;
    margin-right: 20px;
    padding: 10px;
}


svg{
    position: fixed;
    bottom: 0;
}

.traitun{
    background-color: rgb(0, 0, 0);
    width: 2px;
    height: 400px;
    margin-left: 185px;
}
.traitdeux{
    background-color: rgb(0, 0, 0);
    width: 2px;
    height: 400px;
    margin-left: 372px;
}
.traittrois{
    background-color: rgb(0, 0, 0);
    width: 2px;
    height: 400px;
    margin-left: 395px;
}

</style>