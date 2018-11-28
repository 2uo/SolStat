<template>
    <div class="columns">
        <div class="column box is-10 is-offset-1">
            <h1 class="title">Статистика роботи SPP:</h1>
            <p>Виробіток за весь час: {{this.arrayInfo(this.stats.month[0]).sum}} kW/h</p>
            <hr>
            <p>Середній щомісячний виробіток: {{this.arrayInfo(this.stats.month[0]).average}} kW/h</p>
            <p>Середній щоденний виробіток: {{this.arrayInfo(this.stats.day[0]).average}} kW/h</p>
            <p>Середній щогодинний виробіток: {{this.arrayInfo(this.stats.hour[0]).average}} kW/h</p>
            <b-field label="Оберіть частоту запису данних">
                <b-select placeholder="Формат" v-model="dataFormat">
                    <option value="month">Місяць</option>
                    <option value="day">День</option>
                    <option value="hour">Годину</option>
                </b-select>
            </b-field>
            <button class="button" v-on:click="resetData()">Reset rata</button>
            <hr>
            <div class="charts">
                <line-chart :chart-data="dataChart"></line-chart>
            </div>
        </div>
        <b-field>

        </b-field>
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
                dataChart: {
                    labels: [],
                    datasets: [
                        {
                            label: 'Щомісячний виробіток (kW/h)',
                            borderWidth: 2,
                            borderColor: '#00908E',
                            pointBorderColor: '#007272',
                            pointBackgroundColor: '#1fcac8',
                            backgroundColor: '#00b5b1',
                            data: []
                        }
                    ]
                },
                date: 0,
                dataFormat: 'month'
            }
        },
        beforeMount() {
            this.axios.get('/stats')
                .then(resp => {
                    this.stats = resp.data;
                    for (var i = 0; i < resp.data.month[1].length; i++) {
                        this.stats.month[1][i] = this.stats.month[1][i].slice(0, 10);
                    }
                    for (i = 0; i < resp.data.day[1].length; i++) {
                        this.stats.day[1][i] = this.stats.day[1][i].slice(0, 10);
                    }
                    for (i = 0; i < resp.data.hour[1].length; i++) {
                        this.stats.hour[1][i] = this.stats.hour[1][i].slice(0, 16);
                    }
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

            },
            resetData() {
                this.stats.month[0] = this.stats.month[0].map(a => a += 100)
                this.dataChart.labels = this.stats.month[1]
                this.dataChart.datasets[0].data = this.stats.month[0]
                this.$children[1].renderChart(this.dataChart)
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