<template>
    <div class="columns">
        <div class="column box is-2 is-offset-5">
            <h1 class="title">Вхід</h1>
            <form @submit.prevent="login">
                <b-field :type="failed">
                    <b-input v-model="user.username"
                             placeholder="логін"
                             icon="account"
                    />
                </b-field>
                <b-field :type="failed">
                    <b-input v-model="user.password"
                             type="password"
                             password-reveal
                             placeholder="пароль"
                             icon="lock"
                    />
                </b-field>
                <b-field>
                    <button class="button is-block is-info" type="submit">Ввійти</button>
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
    name: 'Login',
    data() {
      return {
        user: {}
      }
    },
    methods: {
      login: function () {
        this.$store.dispatch(AUTH_REQUEST, this.user).then(() => {
          this.$router.push('/')
        })
      },
    },
    computed: {
      failed() {
        if (this.$store.state.auth.status === "error") {
          return "is-danger"
        } else {
          return ""
        }
      }
    }
  }
</script>

<style scoped lang="scss">
</style>
