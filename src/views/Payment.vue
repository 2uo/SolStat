<template>
    <div class="box">
        <div class="container">
            <b-field label="Введіть Ваші реквізити:">
                <b-input placeholder="1234-5678-9012-3456"></b-input>
            </b-field>
            <label>
                <strong>Оберіть <router-link to="/price">тип підписки</router-link>:</strong>
            </label>
            <b-field>
                <b-select placeholder="Тип підписки">
                    <option value="primary">Primary (19.99$)</option>
                    <option value="elite">Elite (29.99$)</option>
                </b-select>
            </b-field>
            <button class="button is-link">Оплатити</button>
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