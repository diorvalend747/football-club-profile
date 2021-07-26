import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        sideBarOpen: false,
        areas: [],
        clubList: [],
        clubData: [],
        player: []
    },
    getters: {
        sideBarOpen: state => {
            return state.sideBarOpen
        }
    },
    mutations: {
        toggleSidebar (state) {
            state.sideBarOpen = !state.sideBarOpen
        },
        SET_AREA (state, areas) {
            state.areas = areas
        },
        SET_CLUB_LIST (state, clubList) {
            state.clubList = clubList
        },
        SET_CLUB_DATA (state, clubData) {
            state.clubData = clubData
        },
        SET_PLAYER (state, player) {
            state.player = player
        }
    },
    actions: {
        toggleSidebar(context) {
            context.commit('toggleSidebar')
        },
        getArea ({ commit }) {
            axios({
                url: 'https://api.football-data.org/v2/areas',
                headers: { 'X-Auth-Token': process.env.VUE_APP_API_KEY },
                method: 'GET'
            })
                .then(({ data }) => {
                    commit('SET_AREA', [...data.areas])
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        pickArea ({ commit },id) {
            axios({
                url: `https://api.football-data.org/v2/teams/?areas=${id}`,
                headers: { 'X-Auth-Token': process.env.VUE_APP_API_KEY },
                method: 'GET'
            })
                .then(({ data }) => {
                    commit('SET_CLUB_LIST', [...data.teams])
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        pickAreaDefault ({ commit }) {
            axios({
                url: `https://api.football-data.org/v2/teams/?areas=2072`,
                headers: { 'X-Auth-Token': process.env.VUE_APP_API_KEY },
                method: 'GET'
            })
                .then(({ data }) => {
                    commit('SET_CLUB_LIST', [...data.teams])
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        pickClub ({ commit }, id) {
            axios({
                url: `https://api.football-data.org/v2/teams/${id}`,
                headers: { 'X-Auth-Token': process.env.VUE_APP_API_KEY },
                method: 'GET'
            })
                .then(({ data }) => {
                    commit('SET_CLUB_DATA', data)
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        pickPlayer ({ commit }, id) {
            axios({
                url: `https://api.football-data.org/v2/players/${id}`,
                headers: { 'X-Auth-Token': process.env.VUE_APP_API_KEY },
                method: 'GET'
            })
                .then(({ data }) => {
                    commit('SET_PLAYER', data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
})
