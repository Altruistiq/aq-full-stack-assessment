import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      name: 'Altruistiq',
    }
  },

  actions: {
    // get all countries
    async getChartData({}) {
      const resp = await fetch(`${import.meta.env.VITE_SERVER_URL}/chart-data`, {
        method: 'GET',
      })

      const json = await resp.json()
      return json
    },
  },

  mutations: {
  }
})

export default store