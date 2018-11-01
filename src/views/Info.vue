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

            <section>
                <b-field>
                    <b-upload v-model="dropFiles"
                              multiple
                              drag-drop>
                        <section class="section">
                            <div class="content has-text-centered">
                                <p>
                                    <b-icon
                                            icon="upload"
                                            size="is-large">
                                    </b-icon>
                                </p>
                                <p>Drop your files here or click to upload</p>
                            </div>
                        </section>
                    </b-upload>
                </b-field>

                <div class="tags">
            <span v-for="(file, index) in dropFiles"
                  :key="index"
                  class="tag is-primary" >
                {{file.name}}
                <button class="delete is-small"
                        type="button"
                        @click="deleteDropFile(index)">
                </button>
            </span>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                dropFiles: []
            }
        },
        methods: {
            deleteDropFile(index) {
                this.dropFiles.splice(index, 1)
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