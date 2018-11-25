/* eslint-disable */
<template>
    <div class="container box has-text-left">
        <h1 class="title is-size-1">Головна сторінка</h1>
        <p class="is-size-4">Опис проекту і загальна інформація</p>
        <hr/>
        <p class="is-size-5">
            Проект SolStat - український стартап, напрямлений на полегшення роботи з Вашою сонячною електростанцією
            шляхом зручного виведення статистики її роботи на будь-який зручний для Вас гаджет у будь-який момент.
            Данні прораховуються надзвичайно швидко, а завдяки гарно оптимізованій системі Вам не доведеться довго
            чекати на результати, на відміну від наших конкурентів. Вся статистика виводиться в максимально зручному
            для аналізування вигляді. А зручні інтерактивні графіки доповнюють цю картину. <br> <br>
            Аби розпочати роботу з нами вже найближчим часом - просто перейдіть на
            <router-link to="/logged" v-if="logged">сторінку реєстрації</router-link>
            <router-link to="/signup" v-else>сторінку реєстрації</router-link>
            і заповніть коротку анкету, відповівши на
            декілька дуже простих запитань. Наші менеджери звяжуться з Вами і Ви зможете приступити до роботи з нами
            одразу після
            <router-link to="/price" v-if="logged">внесення оплати</router-link>
            <router-link to="/login" v-else>внесення оплати</router-link>
            за користування нашим продуктом.
        </p>
        <hr>
        <iframe width="560"
                height="315"
                src="https://www.youtube.com/embed/1NLbHkyCpvc"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
        >
            Нажаль, Ваш браузер не підтримує вбудовані фрейми.
        </iframe>
    </div>
</template>

<script>
    export default {
        name: 'home',
        computed: {
            logged() {
                return this.$store.getters.isAuthenticated
            }
        }
    }
</script>
