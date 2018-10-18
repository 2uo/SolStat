<template>
    <div class="columns">
        <div class="column box is-4 is-offset-4">
            <h1 class="title">Вхід</h1>
            <form @submit.prevent="signup">
                <b-field :type="failed">
                    <b-input v-model="user.name"
                             placeholder="Ім'я"
                             icon="account"
                             title="Іван"
                    />
                </b-field>
                <b-field :type="failed">
                    <b-input v-model="user.surname"
                             placeholder="Прізвище"
                             icon="account-outline"
                             title="Іванов"
                    />
                </b-field>
                <b-field :type="failed">
                    <b-input v-model="user.username"
                             placeholder="Нікнейм"
                             icon="ticket-account"
                             title="_NickName_ Буде використаний як логін."
                    />
                </b-field>
                <b-field :type="failed">
                    <b-input v-model="user.phone"
                             placeholder="Номер телефону"
                             icon="phone"
                             title="093-12-34-567"
                    />
                </b-field>
                <b-field :type="failed">
                    <b-input v-model="user.email"
                             placeholder="Електронна пошта"
                             icon="at"
                             title="example@mail.com"
                    />
                </b-field>
                <b-field :type="failed">
                    <b-input v-model="user.password"
                             type="password"
                             password-reveal
                             placeholder="Пароль"
                             icon="lock"
                             title="Можуть бути застосовані будь-які символи: A-Z, a-z, А-Я, а-я, 0-9, .,-/\!@#$%&*()+="
                    />
                </b-field>
                <b-field :type="failed">
                    <b-input type="password"
                             password-reveal
                             placeholder="Пароль ще раз"
                             icon="lock"
                             title="Повторіть Ваш пароль"
                    />
                </b-field>
                <p class="description"><span>*</span>Натискаючи "Зареєструватись" ви погоджуєтесь з
                <router-link to="/privacy-policy">нашою політикою конфіденційності</router-link></p>
                <b-field>
                    <button class="button is-block is-link" type="submit">Зареєструватись</button>
                    <input class="button is-block is-text" type="reset" value="Скинути">
                </b-field>
            </form>
        </div>
    </div>
</template>

<script>
  import BInput from "buefy/src/components/input/Input";
  import BField from "buefy/src/components/field/Field";
  import {AUTH_REQUEST} from '@/store/actions/auth'

  export default {
    components: {
      BField,
      BInput
    },
    name: 'Signup',
    data() {
      return {
        user: {},
        failed: ""
      }
    },
    methods: {
      signup: function () {
        var that = this
        this.axios({url: 'register', data: this.user, method: 'POST'})
          .then(resp => {
            console.log("registered")
            that.failed = ""
          })
          .catch(err => {
            that.failed = "is-danger"
          })
      },
    }
  }
</script>

<style>
    .description {
        font-size: 12px;
    }
</style>