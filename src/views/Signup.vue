<template>
    <div class="columns">
        <div class="column box is-4 is-offset-4">
            <h1 class="title">Реєстрація</h1>
            <form>
                <div class="field">
                    <div class="control">
                        <input class="input" type="text" placeholder="Ім'я">
                    </div>
                </div>

                <div class="field">
                    <div class="control ">
                        <input class="input" type="text" placeholder="Прізвище">
                    </div>
                </div>

                <div class="field">
                    <div class="control">
                        <input class="input" placeholder="Номер телефону">
                    </div>
                </div>

                <div class="field">
                    <div class="control">
                        <input class="input" placeholder="Електронна пошта">
                    </div>
                </div>

                <div class="field">
                    <div class="control">
                        <input class="input" type="password" placeholder="Пароль">
                    </div>
                </div>

                <div class="field">
                    <div class="control">
                        <input class="input" type="password" placeholder="Повторіть пароль">
                    </div>
                </div>

                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-link">Зареєструватися</button>
                    </div>
                    <div class="control">
                        <input class="button is-text" type="reset" value="Скинути">
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
  export default {}
</script>