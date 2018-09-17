<template>
    <nav class="navbar is-link is-fixed-top" role="navigation" aria-label="dropdown navigation">
        <div class="navbar-brand">
            <a class="navbar-item title" href="/">
                TBot
            </a>
        </div>

        <div class="navbar-menu">
            <div class="navbar-start" v-if="logged">
                <router-link to="/dash" class="navbar-item">Dashboard</router-link>
            </div>

            <div class="navbar-end">
                <router-link to="/login" v-if="!logged" class="navbar-item">Login</router-link>
                <a class="navbar-item" v-if="logged" @click="logout()">Logout, {{username}}</a>
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