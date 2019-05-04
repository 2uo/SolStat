<template>
    <div class="container box has-text-left">
        <p class="is-size-5">
            <b-message title="Увага" type="is-warning">
                Данна сторінка слугує, як збірник посилань на джерела, з яких було взято інформацію для оформлення
                наукової роботи "Сервіс для зберігання та відображення статистики роботи сонячної електростанції". <br>
                Якщо Ви зайшли на сервіс для роботи зі статистикою Вашої електростанції - просимо Вас
                <router-link to="/login">авторизуватись на сервісі</router-link> та почати роботу з ним.
            </b-message>
            <h1 class="title">Посилання на джерела:</h1>
            <a href="https://docs.google.com/document/d/1BUaI651HrMgJqTYBSOQ4Rd-c7Pkty8WflyMZgQ4KSrE/edit?usp=sharing">
                Посилання на наукову роботу МАН (посилання на файл, який зберігається на Google Drive з доступом read-only)
            </a>
            <hr>
            <p class="subtitle">Дослідження про рівень розвитку населення в сфері користування комп'ютерними
                технологіями:</p>
            <a href="https://er.ru/news/162855/">Дослідження рівню розвитку користування сучасними технологіями 
                міністерством освіти і науки РФ</a>
            <a href="https://vc.ru/flood/23258-computer-skill-distributon">Класифікація населення Якобом Нільсоном
            за критеріями вміння працювати з сучасними технологіями</a>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'links'
    }
</script>
