<template>
  <span>
    <v-navigation-drawer app v-model="drawer" class="brown lighten-2" dark disable-resize-watcher>
      <v-list>
        <template v-for="(item, index) in navDropItems">
          <v-list-tile :key="index">
            <v-list-tile-content>{{item.title}}</v-list-tile-content>
          </v-list-tile>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app color="brown darken-4" dark>
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <v-btn dark flat to="/">
        <v-toolbar-title>{{ appName }}</v-toolbar-title>
      </v-btn>

      <v-btn to="/menu" flat class="hidden-sm-and-down">Menu</v-btn>
      <v-spacer></v-spacer>
      <div class="hidden-sm-and-down" v-if="!isAuthenticated">
        <v-btn to="/sign" flat class="hidden-sm-and-down">SIGN IN</v-btn>
        <v-btn to="/join" color="brown lighten-3 hidden-sm-and-down">JOIN</v-btn>
      </div>
      <div v-else>
        <v-btn flat to="/about">Profile</v-btn>
        <v-btn dark outline color="white" @click="logout">Logout</v-btn>
      </div>
    </v-toolbar>
  </span>

  <!-- <div id="nav">
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>
  </div>-->
</template>

<script>
export default {
    name: 'AppNav',
    props: ['appName'],
    data() {
        return {
            drawer: false,
            navDropItems: [
                { title: 'Menu' },
                { title: 'Profile' },
                { title: 'Sign In' },
                { title: 'Join' }
            ]
        };
    },
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('userSignOut');
        }
    }
};
</script>

<style scoped>
a {
    color: white;
    text-decoration: none;
}
</style>
