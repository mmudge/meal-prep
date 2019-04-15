<template>
  <v-layout>
    <v-flex class="mx-1">
      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75 "
          height="300px"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline white--text">{{ type }}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ food }}</h3>
            <v-subheader>{{ primaryMacro }}</v-subheader>
            <div>{{ details }}</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
    name: 'MealPlans',
    props: ['type', 'details', 'primaryMacro', 'food'],
    data() {
        return {};
    }
};
</script>

<style scoped>
</style>
