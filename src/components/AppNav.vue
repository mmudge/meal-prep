<template>
  <v-toolbar app color="brown darken-4" dark>
    <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
    <v-spacer class="hidden-md-and-up"></v-spacer>
    <v-toolbar-title>{{ appName }}</v-toolbar-title>
    <v-btn flat>Menu</v-btn>
    <v-spacer></v-spacer>
    <v-btn flat>SIGN IN</v-btn>
    <v-btn color="brown lighten-3">JOIN</v-btn>
  </v-toolbar>

  <!-- <div id="nav">
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>
  </div>-->
</template>

<script>
export default {
    name: 'AppNav',
    props: ['appName']
};
</script>

<style scoped>
</style>
