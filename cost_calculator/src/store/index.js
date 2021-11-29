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
    }
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
              date: '21.09.2021',
              category: 'Food',
              price: 123,
            },
            {
              date: '20.09.2021',
              category: 'Food',
              price: 456,
            },
            {
              date: '19.09.2021',
              category: 'Food',
              price: 789,
            },
            {
              date: '17.09.2021',
              category: 'Food',
              price: 159,
            },
            {
                date: '16.09.2021',
                category: 'Food',
                price: 99,
              },
              {
                date: '15.09.2021',
                category: 'Cinema',
                price: 400,
              },
              {
                date: '14.09.2021',
                category: 'Food',
                price: 33,
              },
              {
                date: '13.09.2021',
                category: 'Food',
                price: 9999,
              },
              {
                date: '12.09.2021',
                category: 'Food',
                price: 1,
              },
              {
                date: '10.09.2021',
                category: 'Food',
                price: 30,
              },
              {
                date: '10.09.2021',
                category: 'Food',
                price: 44,
              },
              {
                date: '09.09.2021',
                category: 'Food',
                price: 190,
              },
              {
                date: '18.08.2021',
                category: 'Food',
                price: 33,
              },
              {
                date: '11.08.2021',
                category: 'Food',
                price: 150,
              },
              
          ])
        }, 2000)
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