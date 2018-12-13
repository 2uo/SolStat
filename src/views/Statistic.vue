<template>
    <div class="columns">
        <div class="column box is-10 is-offset-1">
            <h1 class="title">Статистика роботи SPP:</h1>
            <p>Виробіток за весь час: {{this.stats.statistics.total.toPrecision(6)}} kW/h</p>
            <hr>
            <p>Середній щомісячний виробіток: {{this.stats.statistics.avgMonth.toPrecision(5)}} kW/h</p>
            <p>Середній щоденний виробіток: {{this.stats.statistics.avgDay.toPrecision(4) }} kW/h</p>
            <p>Середній щогодинний виробіток: {{this.stats.statistics.avgHour.toPrecision(4) }} kW/h</p>
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
                                v-model="request.after_date"
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
                                v-model="request.before_date"
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
          statistics: {
            avgHour: '',
            avgDay: '',
            avgMonth: '',
            total: ''
          }
        },
        dataChart: null,
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
        }
      }
    },
    beforeMount() {
      this.axios.get('/stats', {
        params: {
          before_date: 'start',
          after_date: 'start',
          period: 'hour'
        }
      }).then(resp => {
        var dt = {
          first: '',
          last: ''
        };
        dt.first = resp.data.range.first_date.split(/[: T-]/).map(parseFloat);
        dt.last = resp.data.range.last_date.split(/[: T-]/).map(parseFloat);
        this.minDate = new Date(dt.first[0], dt.first[1] - 1, dt.first[2], dt.first[3] || 0, dt.first[4] || 0, dt.first[5] || 0, 0);
        this.maxDate = new Date(dt.last[0], dt.last[1] - 1, dt.last[2], dt.last[3] || 0, dt.last[4] || 0, dt.last[5] || 0, 0);
        this.request.after_date = new Date(dt.first[0], dt.first[1] - 1, dt.first[2] + 1, dt.first[3] || 0, dt.first[4] || 0, dt.first[5] || 0, 0);
        this.request.before_date = this.maxDate
        this.stats = resp.data;

        console.log(resp.data)

      }).catch(err => {
        console.log('Request error: ' + err)
      })
    },
    mounted() {
      this.resetData();
    },
    methods: {
      resetData() {
        this.axios.get('/stats', {
          params: this.request
        }).then(resp => {
          this.stats = resp.data;
          this.dataChart = {
            labels: this.stats.data.dates,
            datasets: [
              {
                label: 'Періодичний виробіток (kW/h)',
                borderWidth: 2,
                borderColor: '#00908E',
                pointBorderColor: '#007272',
                pointBackgroundColor: '#1fcac8',
                backgroundColor: '#00b5b1',
                data: this.stats.data.amounts
              }
            ]
          }
          console.log(resp.data)
        }).catch(err => {
          console.log('reseting data returned error: ')
          console.log(err)
        });
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