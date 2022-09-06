<template>

<Navigation/>

<main>
  <router-view></router-view>
</main>

</template>


<script>
import Navigation from './components/Navigation.vue';

export default {
    name: "App",
    components: { Navigation }
}

</script>



<style>
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oxygen:wght@300&display=swap');

  #app{
    font-family: 'Bebas Neue', cursive;
  }

</style>
