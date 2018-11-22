<template>
    <div class="columns">
        <div class="column box is-10 is-offset-1">
            <h1 class="title">Статистика роботи SPP:</h1>
            <p>Виробіток за весь час: {{this.arrayInfo(this.stats.month[0]).sum}} kW/h</p>
            <hr>
            <p>Середній щомісячний виробіток: {{this.arrayInfo(this.stats.month[0]).average}}</p>
            <p>Середній щоденний виробіток: {{this.arrayInfo(this.stats.day[0]).average}}</p>
            <p>Середній щогодинний виробіток: {{this.arrayInfo(this.stats.hour[0]).average}}</p>
            <hr>
            <div class="charts">
                <line-chart :chart-data="monthChart"></line-chart>
                <line-chart :chart-data="dayChart"></line-chart>
                <line-chart :chart-data="hourChart"></line-chart>
            </div>
        </div>
    </div>
</template>

<script>
    import LineChart from './LineChart.js'

    export default {
        components: {
            LineChart
        },
        data() {
            return {
                stats: {
                    month: [
                        [], []
                    ],
                    day: [
                        [], []
                    ],
                    hour: [
                        [], []
                    ]

                },
                date: 0
            }
        },
        computed: {
            monthChart() {
                return {
                    labels: this.stats.month[1],
                    datasets: [
                        {
                            label: 'Щомісячний виробіток (kW/h)',
                            borderWidth: 2,
                            borderColor: '#00908E',
                            pointBorderColor: '#007272',
                            pointBackgroundColor: '#1fcac8',
                            backgroundColor: '#00b5b1',
                            data: this.stats.month[0]
                        }
                    ]
                }
            },
            dayChart() {
                return {
                    labels: this.stats.day[1],
                    datasets: [
                        {
                            label: 'Щоденний виробіток (kW/h)',
                            borderWidth: 2,
                            borderColor: '#00908E',
                            pointBorderColor: '#007272',
                            pointBackgroundColor: '#1fcac8',
                            backgroundColor: '#00b5b1',
                            data: this.stats.day[0]
                        }
                    ]
                }
            },
            hourChart() {
                return {
                    labels: this.stats.hour[1],
                    datasets: [
                        {
                            label: 'Щогодинний виробіток (kW/h)',
                            borderWidth: 2,
                            borderColor: '#00908E',
                            pointBorderColor: '#007272',
                            pointBackgroundColor: '#1fcac8',
                            backgroundColor: '#00b5b1',
                            data: this.stats.hour[0]
                        }
                    ]
                }
            }
        },
        beforeMount() {
            this.axios.get('/stats')
                .then(resp => {
                    console.log(resp.data)
                    this.stats = resp.data
                })
        },
        methods: {
            //returns the sum of the array elements and their average value
            arrayInfo(array) {
                let sum = 0;
                let average = 0;

                for (var i = 0; i < array.length; i++) {
                    sum += array[i];

                }

                sum = Math.floor(sum * 100) / 100;
                average = Math.floor((sum / array.length) * 100) / 100;

                return {
                    sum: sum,
                    average: average
                };

            }
        }
    }
</script>

<style>
    #line-chart {
        width: 70vw;
        height: 70vh;
    }
</style>