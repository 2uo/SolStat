/* eslint-disable */
import {Line, mixins} from 'vue-chartjs'

const {reactiveProp, reactiveData} = mixins

export default {
    extends: Line,
    mixins: [mixins.reactiveProp],
    data: () => ({
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Початок періоду збору інформації'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Ват'
                    }
                }]
            }
        }
    }),

    mounted() {
        this.renderChart(this.chartData, this.options)
    }
}