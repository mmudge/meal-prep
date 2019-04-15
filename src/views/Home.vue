<template>
  <div class="home">
    <HomePage/>
    <HomeDetails/>
    <v-container>
      <v-layout>
        <v-flex class="display-2 text-xs-center my-5">Available Meal Plans</v-flex>
      </v-layout>
      <v-layout xs12 sm6 offset-sm3>
        <div v-for="meal in mealPlanOptions" :key="meal.type">
          <MealPlans
            :type="meal.type"
            :food="meal.food"
            :details="meal.details"
            :primaryMacro="meal.primaryMacro"
          />
        </div>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from '../components/HomePage.vue';
import HomeDetails from '../components/HomeDetails.vue';
import MealPlans from '../components/MealPlans.vue';

export default {
    name: 'home',
    components: {
        HomePage,
        HomeDetails,
        MealPlans
    },
    data() {
        return {
            mealPlanOptions: [
                {
                    type: 'Keto',
                    food: 'Avocado',
                    details:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris felis, varius rutrum massa a, dignissim ornare dui. Cras eget velit eu dui tristique lobortis sit amet vel tellus.',
                    primaryMacro: 'Fats'
                },
                {
                    type: 'Vegan',
                    food: 'Veggies',
                    details:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris felis, varius rutrum massa a, dignissim ornare dui. Cras eget velit eu dui tristique lobortis sit amet vel tellus.',
                    primaryMacro: 'Carbs'
                },
                {
                    type: 'Body Builder',
                    food: 'Chicken',
                    details:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris felis, varius rutrum massa a, dignissim ornare dui. Cras eget velit eu dui tristique lobortis sit amet vel tellus.',
                    primaryMacro: 'Protein'
                }
            ]
        };
    }
};
</script>

<style scoped>
.home {
    height: 100vh;
}
</style>

