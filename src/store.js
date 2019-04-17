import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        recipes: [],
        api: '',
        appKey: ''
    },
    mutations: {
        setRecipes(state, payload) {
            return (state.recipes = payload);
            // console.log('state recipes', state.recipes);
        },
        setType(state, payload) {
            this.type = payload;
        }
    },
    actions: {
        getRecipes({ state, commit }, type) {
            const proxy = 'https://cors-anywhere.herokuapp.com/';

            const api = '90387923bafd2bf3ff07e13b8e272fd0';
            const appId = '516372f1';

            fetch(
                `${proxy}https://api.edamam.com/search?q=${type}&app_id=${appId}&app_key=${api}&from=0&to=9`
            )
                .then(response => {
                    return response.json();
                })
                .then(res => {
                    commit('setRecipes', res.hits);
                    // return (state.recipes = res.data.hits);
                })
                .catch(err => {
                    commit('setRecipes', []);
                    // console.log('you got an error', err);
                });
        }
    }
});
