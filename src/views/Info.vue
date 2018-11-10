<template>
    <div class="columns">
        <div class="column box is-8 is-offset-2 container">
            <h1 class="title">Інформація про споживача:</h1>
            <p class="name"><strong>Ім'я: </strong> Олексій</p>
            <p class="surname"><strong>Прізвище: </strong> Лещук</p>
            <p class="phone"><strong>Номер телефону: </strong> 063-675-85-67</p>
            <p class="email"><strong>Електронна пошта: </strong> imperator.1903.petrushka@gmail.com</p>
            <p class="registration"><strong>Дата реєтрації: </strong> 20.09.2018</p>
            <br>
            <p class="name"><strong>Тип підписки: </strong> Elite</p>
            <p class="name"><strong>Дія підписки: </strong> до 05.02.2019, 18:42</p>
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
        files: []
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
        formData.append("adif", this.files[0], this.files[0].name)
        this.process(formData)
      }
    }
  }
</script>

<style>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>