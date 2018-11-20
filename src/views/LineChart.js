import { Line, mixins } from 'vue-chartjs'
const { reactiveData, reactiveProp } = mixins

export default {
  extends: Line,
  mixins: [reactiveProp],
  data: () => ({
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),

  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}