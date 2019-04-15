<template>
  <v-container fluid fill-height class="home-hero">
    <v-layout justify-center align-center column pa-5>
      <v-flex class="display-3 font-weight-black white--text text-xs-center">HEALTHY MEALS</v-flex>
      <v-flex class="display-3 font-weight-black white--text text-xs-center mb-3">FOR YOUR TABLE</v-flex>
      <v-flex
        class="display-1 font-weight-bold white--text text-xs-center"
      >Finally be a foodie at home with fresh, chef-prepared meals delivered daily to your door.</v-flex>
      <v-btn fab class="mt-5 brown darken-4">
        <v-icon large color="white">expand_more</v-icon>
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    name: 'HomePage'
};
</script>

<style scoped>
.home-hero {
    background: url('https://source.unsplash.com/random') no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>
