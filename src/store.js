import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';
import router from '@/router';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        recipes: [],
        api: '',
        appKey: '',
        user: null,
        isAuthenticated: false,
        userRecipes: []
    },
    mutations: {
        setRecipes(state, payload) {
            return (state.recipes = payload);
            // console.log('state recipes', state.recipes);
        },
        setType(state, payload) {
            this.type = payload;
        },
        setUser(state, payload) {
            state.user = payload;
        },
        setIsAuthenticated(state, payload) {
            state.isAuthenticated = payload;
        },
        setUserRecipes(state, payload) {
            state.userRecipes = payload;
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
        },
        userJoin({ commit }, { email, password }) {
            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(user => {
                    commit('setUser', user);
                    commit('setIsAuthenticated', true);
                    router.push('/about');
                })
                .catch(() => {
                    commit('setUser', null);
                    commit('setIsAuthenticated', false);
                    router.push('/');
                });
        },
        userLogin({ commit }, { email, password }) {
            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(user => {
                    commit('setUser', user);
                    commit('setIsAuthenticated', true);
                    router.push('/about');
                })
                .catch(() => {
                    commit('setUser', null);
                    commit('setIsAuthenticated', false);
                    router.push('/');
                });
        },
        userSignOut({ commit }) {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    commit('setUser', null);
                    commit('setIsAuthenticated', false);
                    router.push('/');
                })
                .catch(() => {
                    commit('setUser', null);
                    commit('setIsAuthenticated', false);
                    router.push('/');
                });
        },
        addRecipe({ state }, payload) {
            firebase
                .database()
                .ref('users')
                .child(state.user.user.uid)
                .push(payload.recipe.label);
        },
        getUserRecipes({ state, commit }) {
            return firebase
                .database()
                .ref('users/' + state.user.user.uid)
                .once('value', snapshot => {
                    commit('setUserRecipes', snapshot.val());
                });
        }
    },
    getters: {
        isAuthenticated(state) {
            return state.user !== null && state.user !== undefined;
        }
    }
});
