<template>
  <div>
    <h1>Welcome to Altruistiq!</h1>
  </div>
</template>

<script>
export default {
  name: 'App',

  async created() {
    // get chart data
    const chartData = await this.$store.dispatch('getChartData')
    console.log('chartData', chartData)
  },

  methods: {
  }
}
</script>

<style scoped>
</style>
