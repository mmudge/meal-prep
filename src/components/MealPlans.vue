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
                <h3 class="display-1 white--text">
                  <strong>{{ type }}</strong>
                </h3>
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

        <v-card-actions v-if="['menu'].includes($route.name)">
          <v-btn @click="showRecipes(type)" outline block color="green">Select this plan</v-btn>
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
        return {
            recipes: []
        };
    },
    methods: {
        showRecipes(type) {
            const api = '90387923bafd2bf3ff07e13b8e272fd0';
            const appId = '516372f1';

            fetch(
                `https://api.edamam.com/search?q=${type}&app_id=${appId}&app_key=${api}&from=0&to=9`
            )
                .then(response => {
                    return response.json();
                })
                .then(res => {
                    this.recipes = res.hits;
                    console.log(this.recipes);
                })
                .catch(err => {
                    console.log('you got an error', err);
                });
        }
    }
};
</script>

<style scoped>
</style>
