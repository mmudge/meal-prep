<template>
  <div>
    <v-container fluid>
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
    <MealRecipes/>
  </div>
</template>

<script>
import MealPlans from '../components/MealPlans.vue';
import MealRecipes from '../components/MealRecipes.vue';
export default {
    name: 'Menu',
    components: {
        MealPlans,
        MealRecipes
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
                    type: 'Paleo',
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

<style>
</style>
