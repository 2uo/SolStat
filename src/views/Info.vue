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
            <form action="/api/upload" enctype="multipart/form-data">
                <input type="file" name="file">
                <input type="submit" value="Надіслати">
            </form>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style>
    .container {
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
    }
</style>