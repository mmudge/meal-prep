<template>
  <v-app>
    <AppNav :appName="myAppName"/>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import AppNav from './components/AppNav.vue';
export default {
    name: 'App',
    components: {
        AppNav
    },
    data() {
        return {
            myAppName: 'Meal Preppin!'
        };
    }
};
</script>


<style>
</style>
