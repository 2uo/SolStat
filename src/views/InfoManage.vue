<template>
    <div class="columns">
        <div class="column box is-10 is-offset-1">
            <h1 class="title">Керування Інформацією</h1>
            <form>

                <label class="label">Змінити Ім'я</label>
                <div class="field">
                    <div class="control">
                        <input class="input" type="text" placeholder="Ім'я">
                    </div>
                </div>

                <label class="label">Змінити Прізвище</label>
                <div class="field">
                    <div class="control ">
                        <input class="input" type="text" placeholder="Прізвище">
                    </div>
                </div>

                <label class="label">Змінити Пароль</label>
                <div class="field">
                    <div class="control">
                        <input class="input" type="password" placeholder="Старий пароль">
                    </div>
                </div>

                <div class="field">
                    <div class="control">
                        <input class="input" type="password" placeholder="Новий пароль">
                    </div>
                </div>

                <div class="field">
                    <div class="control">
                        <input class="input" type="password" placeholder="Повторіть новий пароль">
                    </div>
                </div>

                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-link">Змінити данні</button>
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