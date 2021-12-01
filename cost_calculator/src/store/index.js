import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentsList: [],
    categoryList: []
  },

  mutations: {
    setPaymentsListData (state, payload) {
      state.paymentsList = payload
    },
    addPaymentListData (state, data) {
      state.paymentsList.push(data)
    },
    setCategories (state, payload) {
      if (!Array.isArray(payload)) {
        payload = [payload]
      }
      state.categoryList.push(...payload)
    },
    addCategories (state, payload) {
      state.categoryList.push(payload)
    },
    savePaymentListEl (state, payload) {
      state.paymentsList.splice(payload.index, 1, {date: payload.date, category: payload.category, price: payload.price})
    },
    dellPaymentListData (state, payload) {
      state.paymentsList.splice(payload, 1)
    },
  },

  getters: {
    getPaymentsList: state => state.paymentsList,
    getPaymentsListFullPrice: state => {
      return state.paymentsList
      .reduce((res, cur) => res + cur.price, 0)
    },
    getCategoryList: state => state.categoryList
  },

  actions: {
    fetchData ({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {
              date: '21.9.2021',
              category: 'Food',
              price: 100,
            },
            {
              date: '20.9.2021',
              category: 'Transport',
              price: 100,
            },
            {
              date: '19.9.2021',
              category: 'Education',
              price: 100,
            },
            {
              date: '18.9.2021',
              category: 'Entertaiment',
              price: 100,
            },
          ])
        }, 1000)
      })
      .then(res => {
        commit('setPaymentsListData',res)

      })
    },
    loadCategories ({ commit }) {
      return new Promise((resolve) => {
        setTimeout (() => {
          resolve(['Food', 'Transport', 'Education', 'Entertaiment'])
        }, 2000)
      })
      .then(res => {
        commit('setCategories', res)
      })
    }
  } 
})