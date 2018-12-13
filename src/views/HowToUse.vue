<template>
    <div class="box">
        <div class="signin">
            <h2 class="title">Реєстрація, вхід</h2>
            <p>
                Аби зареєструватись на нашому сервісі Вам необхідно всього лише перейти на
                <router-link to="/signup">сторінку реєстрації</router-link> і заповнити просту форму, яка складається
                із 6 полів:
                <br>
                <img src="Images/signup.png" alt="sign up page">
                <br>
                Якщо Ви наразі вже зареєстровані, то для входу Вам потрібно авторизуватися на сервісі. Це Ви можете
                зробити на <router-link to="/login">сторінці авторизації</router-link>:
                <br>
                <img src="Images/login.png" alt="log in page">
            </p>
        </div>
        <hr>
        <div class="upload" id="upload">
            <h2 class="title">Завантаження файлу</h2>
            <p>
                Перед початком роботи зі статистикою Вам необхідно завантажити файл зі статистикою роботи
                Вашої сонячної електростанції. Цей файл Ви можете завантажити з інвертора на Вашій SPS,
                після чого на сторінці <router-link to="/info" v-if="logged">Панель інформації</router-link>
                <router-link to="/login" v-else>Панель інформації (Авторизуйтесь для переходу на цю сторінку)</router-link>
                завантажте цей файл на сервіс:
                <br>
                <img src="Images/upload.png" alt="">
                <br>
                <span class="is-red">*Важливо: </span> виведення статистики не працюватиме, якщо Ви не завантажите
                файл статистики!
            </p>
        </div>
        <hr>
        <div class="stats">
            <h2 class="title">Робота зі статистикою</h2>
            <p>
                Після того, як Ви <a href="#upload" class="is-link">завантажили файл статистики</a>, Ви можете
                приступати до найцікавішої частини роботи: перегляд статистики роботи Вашої сонячної електростанції.
                Для цього перейдіть на сторінку <router-link to="/statistic" v-if="logged">статистики</router-link>
                <router-link to="/login" v-else>статистики (Авторизуйтесь для переходу на цю сторінку)</router-link>.
                <br>

            </p>
        </div>
        <hr>
    </div>
</template>

<script>
    export default {
        name: 'howtouse',
        computed: {
            logged() {
                return this.$store.getters.isAuthenticated
            }
        }
    }
</script>

<style>
    .info-panel {
        display: inline;
    }

    .is-red {
        color: red;
    }
</style>