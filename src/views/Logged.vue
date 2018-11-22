<template>
    <div class="container box has-text-center subtitle">
        <p>
            Ви наразі зареєстровані та авторизовані! <br><br>
            Якщо Ви хочете зареєструвати новий акаунт, то ви можете
            <a @click="logout()">вийти з цього акаунту та зареєструвати новий,</a>
            або <router-link to="/">перейти на головну сторінку</router-link> та продовжити роботу з сервісом.
        </p>
    </div>
</template>

<script>
    import {AUTH_LOGOUT} from '@/store/actions/auth'

    export default {
        name: 'logged',
        methods: {
            logout() {
                this.$store.dispatch(AUTH_LOGOUT).then(() => {
                    this.$router.push('/signup')
                })
            }
        },
    }
</script>

<style>
    a {
        display: inline-block;
    }
</style>
