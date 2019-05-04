<template>
    <div>
        <div class="columns">
            <div class="column box is-10 is-offset-1">
                <b-message title="Пробна сторінка" type="is-info">
                    На даній сторінці Ви можете спробувати усі функції нашого сервісу. Однак Ваші дані та Ваш файл
                    статистики не зберігатиметься на сервері. <router-link to="signup">Авторизуйтесь</router-link>
                    для того, щоб завантажений Вами файл зберігався на сервері та Ви могли користуватися сервісом з
                    будь-якого пристрою у будь-який час. <br>
                    Наразі на цій сторінці вже є завантажений файл статистики, аби Ви могли детальніше ознайомитися з
                    функціоналом нашого сервісу. Однак Ви можете завантажити і свій файл просто натиснувши на кнопку
                    "Завантажити новий файл статистики".
                </b-message>
                <b-field>
                    <b-upload v-model="files" required="true" accept="csv">
                        <a class="button is-link">
                            <span>Завантажити новий файл статистики</span>
                        </a>
                    </b-upload>
                    <div class="control" v-if="files && files.length">
                  <span class="file-name">
                    {{ files[0].name }}
                  </span>
                    </div>
                    <div class="control" v-if="files && files.length">
                        <button class="button is-link" @click="parse">Завантажити</button>
                    </div>
                </b-field>
                <hr>
                <h1 class="title">Статистика роботи Сонячної Електростанції:</h1>
                <p>Виробіток за весь час: {{this.stats.statistics.avgMonth}} kW/h</p>
                <p>Середній щомісячний виробіток: {{this.stats.statistics.avgMonth}} kW/h</p>
                <p>Середній щоденний виробіток: {{this.stats.statistics.avgDay}} kW/h</p>
                <p>Середній щогодинний виробіток: {{this.stats.statistics.avgHour}} kW/h</p>
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

                <button class="button is-info is-large is-rounded" v-on:click="fetchData()">Оновити статистику</button>

                <hr>
                <div class="charts">
                    <line-chart :chart-data="dataChart"></line-chart>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import LineChart from './LineChart.js'
    import BField from "buefy/src/components/field/Field";
    import BUpload from "buefy/src/components/upload/Upload";

    export default {
        components: {
            LineChart,
            BUpload,
            BField
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
                monthNames: ["Січень", "Лютий", "Березень", "Квітень",
                    "Травень", "Червень", "Липень", "Серпень", "Вересень",
                    "Жовтень", "Листопад", "Грудень"],
                request: {
                    before_date: undefined,
                    after_date: undefined,
                    period: 'hour'
                },
                dayNames: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"],
                dataChart: null,
                minDate: undefined,
                maxDate: new Date(),
                isFailed: false,
                files: []
            }
        },
        methods: {
            fetchData() {
                this.axios.get('/stats', {
                    params: this.request
                }).then(resp => {
                    this.stats = resp.data;
                    this.setGraphData()
                    console.log(resp.data)
                }).catch(err => {
                    console.log('fetching data returned error: ')
                    console.log(err)
                });
            },
            setGraphData() {
                this.dataChart = {
                    labels: this.stats.data.dates,
                    datasets: [
                        {
                            label: 'Періодичний виробіток (kW*h)',
                            borderWidth: 2,
                            borderColor: '#00908E',
                            pointBorderColor: '#007272',
                            pointBackgroundColor: '#1fcac8',
                            backgroundColor: '#00b5b1',
                            data: this.stats.data.amounts
                        }
                    ]
                }
            },
            upload: function (formData) {
                this.axios.post('upload', formData)
                    .then(data => {
                        console.log('uploaded');
                        console.log(data);
                    })
                location.reload()
            },
            process: function (formData) {
                this.upload(formData)
            },
            parse: function () {
                /*const formData = new FormData()
                formData.append("csv", this.files[0], this.files[0].name)
                this.process(formData)*/
                console.log(this.files);
            }
        }
    }
</script>

<style scoped>
    .datepicker-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>