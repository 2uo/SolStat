<template>
    <div class="columns">
        <div class="column box is-10 is-offset-1 container">
            <h1 class="title">Статистика роботи SPP:</h1>
            <p>Критерій #1</p>
            <p>Критерій #2</p>
            <p>Критерій #3</p>
            <p>Критерій #4</p>
            <div class="chart">
                <line-chart :chart-data="dataChart"></line-chart>
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
        data () {
            return {
                dataChart: {
                    labels: ['Данні 1', 'Данні 2', 'Данні 3', 'Данні 4', 'Данні 5', 'Данні 6', 'Данні 7'],
                    datasets: [
                        {
                            label: 'Лінія залежності',
                            borderWidth: 2,
                            borderColor: '#00908E',
                            pointBorderColor: '#007272',
                            pointBackgroundColor: '#1fcac8',
                            backgroundColor: '#00b5b1',
                            data: [20, 50, 5, 30, 78, 3, 30]
                        }
                    ]
                }
            }
        }
    }
</script>

<style>
    .container {
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
    }
</style>