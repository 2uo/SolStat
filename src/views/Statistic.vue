<template>
    <div class="columns">
        <div class="column box is-10 is-offset-1">
            <h1 class="title">Статистика роботи SPP:</h1>
            <p>Виробіток за весь час: {{this.stats.statistic.allTime}} kW/h</p>
            <hr>
            <p>Середній щомісячний виробіток: {{this.stats.statistic.month}} kW/h</p>
            <p>Середній щоденний виробіток: {{this.stats.statistic.day}} kW/h</p>
            <p>Середній щогодинний виробіток: {{this.stats.statistic.hour}} kW/h</p>
            <hr>
            <div class="columns">
                <div class="column datepicker-container">
                    <b-field label="Оберіть початкову дату">
                        <b-datepicker
                                placeholder="Клікніть для вибору"
                                :min-date="minDate"
                                :max-date="maxDate"
                                :month-names="monthNames"
                                :day-names="dayNames"
                                v-model="request.before_date"
                                inline>
                        </b-datepicker>
                    </b-field>
                </div>

                <div class="column datepicker-container">
                    <b-field label="Оберіть кінцеву дату">
                        <b-datepicker
                                placeholder="Клікніть для вибору"
                                :min-date="minDate"
                                :max-date="maxDate"
                                :month-names="monthNames"
                                :day-names="dayNames"
                                v-model="request.after_date"
                                inline>
                        </b-datepicker>
                    </b-field>
                </div>
            </div>

            <div class="columns">
                <div class="column datepicker-container">
                    <b-field label="Оберіть формат данних">
                        <b-select placeholder="Формат"
                                  v-model="request.period"
                                  icon="calendar-today">
                            <option value="hour">Години</option>
                            <option value="day">Дні</option>
                            <option value="month">Місяці</option>
                        </b-select>
                    </b-field>
                </div>
            </div>

            <button class="button is-info is-large is-rounded" v-on:click="resetData()">Оновити статистику</button>

            <hr>
            <div class="charts">
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
        data() {
            return {
                stats: {
                    data: [],
                    range: [],
                    statistic: {
                        avgHour: '',
                        avgDay: '',
                        avgMonth: '',
                        allTime: ''
                    }
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
                minDate: undefined,
                maxDate: new Date(),
                monthNames: ["Січень", "Лютий", "Березень", "Квітень",
                    "Травень", "Червень", "Липень", "Серпень", "Вересень",
                    "Жовтень", "Листопад", "Грудень"],
                dayNames: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"],
                request: {
                    before_date: undefined,
                    after_date: undefined,
                    period: 'hour'
                },
                firstDayOfWeek: '1'
            }
        },
        beforeMount() {
            this.axios.get('/stats', {
                before_date: 'start',
                after_date: 'start',
                period: 'hour'
            }).then(resp => {
                this.stats = resp.data;
            }).catch(err => {
                console.log(err)
            })
        },
        methods: {
            resetData() {
                this.axios.get('/stats', this.request).then(resp => {
                    this.stats = resp.data;

                    this.dataChart.labels = this.stats.data[0]
                    this.dataChart.datasets[0].data = this.stats.data[1]
                });

                this.$children[1].renderChart(this.dataChart)
            }
        }
    }
</script>

<style>
    .datepicker-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>