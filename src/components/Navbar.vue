<template>
    <nav class="navbar is-link is-fixed-top" role="navigation" aria-label="dropdown navigation">
        <div class="navbar-brand">
            <a class="navbar-item title" href="/">
                SLib
            </a>
        </div>

        <div class="navbar-menu">
            <div class="navbar-start" v-if="logged">
                <router-link to="/info" class="navbar-item">Панель інформації</router-link>
                <router-link to="/info-manage" class="navbar-item">Керування інформацією та оплата</router-link>
                <router-link to="/statistic" class="navbar-item">Статистика</router-link>
            </div>
            <div class="navbar-start" v-else>
                <router-link to="/description" class="navbar-item">Опис</router-link>
                <router-link to="/price" class="navbar-item">Прайс Лист</router-link>
            </div>

            <div class="navbar-end">
                <router-link to="/login" v-if="!logged" class="navbar-item">Вхід</router-link>
                <router-link to="/signup" v-if="!logged" class="navbar-item">Реєстрація</router-link>
                <a class="navbar-item" v-if="logged" @click="logout()">Вийти, {{username}}</a>
            </div>
        </div>
    </nav>
</template>

<script>
  import {AUTH_LOGOUT} from '@/store/actions/auth'
  export default {
    name: 'NavB',
    methods: {
      logout() {
        this.$store.dispatch(AUTH_LOGOUT).then(() => {
          this.$router.push('/login')
        })
      }
    },
    computed: {
      username() {
        return this.$store.getters.username
      },
      logged() {
        return this.$store.getters.isAuthenticated
      }
    }
  }
</script>