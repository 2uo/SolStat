<template>
    <div class="columns">
        <div class="column box is-8 is-offset-2 container has-text-left">
            <h1 class="title">Інформація про споживача:</h1>
            <p class="name"><strong>Ім'я: </strong> {{user.name}}</p>
            <p class="surname"><strong>Прізвище: </strong> {{user.surname}}</p>
            <p class="phone"><strong>Номер телефону: </strong> {{user.phone}}</p>
            <p class="email"><strong>Електронна пошта: </strong> {{user.email}}</p>
            <p class="registration"><strong>Дата реєтрації: </strong> {{user.created_at}}</p>
            <hr>
            <b-field>
                <b-upload v-model="files" required="true" accept="csv">
                    <a class="button is-link">
                        <span>Завантажити файл статистики</span>
                    </a>
                </b-upload>
                <div class="control" v-if="files && files.length">
                  <span class="file-name">
                    {{ files[0].name }}
                  </span>
                </div>
                <div class="control" v-if="files && files.length">
                    <button class="button is-link" @click="submit">Submit</button>
                </div>
            </b-field>
        </div>
    </div>
</template>

<script>
    import BField from "buefy/src/components/field/Field";
    import BUpload from "buefy/src/components/upload/Upload";

    export default {
        components: {
            BUpload,
            BField
        },
        data() {
            return {
                files: [],
                user: {}
            }
        },
        methods: {
            upload: function (formData) {
                this.axios.post('upload', formData)
            },
            process: function (formData) {
                this.upload(formData)
            },
            submit: function () {
                const formData = new FormData()
                formData.append("csv", this.files[0], this.files[0].name)
                this.process(formData)
            }
        },
        beforeMount() {
            this.axios.get('info')
                .then(resp => {
                    var created_at
                    this.user = resp.data.user
                    created_at = new Date(this.user.created_at)
                    this.user.created_at = created_at.getDay() + '.' + created_at.getMonth() + '.' + created_at.getFullYear();
                })
        }
    }
</script>

<style>

</style>