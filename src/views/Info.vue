<template>
    <div class="columns">
        <div class="column box is-8 is-offset-2 container has-text-left">
            <h1 class="title">Інформація про споживача:</h1>
            <p class="name"><strong>Ім'я: </strong> {{user.name}}</p>
            <p class="surname"><strong>Прізвище: </strong> {{user.surname}}</p>
            <p class="phone"><strong>Номер телефону: </strong> {{user.phone}}</p>
            <p class="email"><strong>Електронна пошта: </strong> {{user.email}}</p>
            <p class="registration"><strong>Дата реєтрації: </strong> {{user.created_at}}</p>
        </div>
    </div>
</template>

<script>
    import BField from "buefy/src/components/field/Field";

    export default {
        components: {
            BField
        },
        data() {
            return {
                user: {}
            }
        },
        beforeMount() {
            this.axios.get('info')
                .then(resp => {
                    var created_at
                    this.user = resp.data.user
                    created_at = new Date(this.user.created_at)
                    this.user.created_at = created_at.getDay() + '.' + created_at.getMonth() + '.' + created_at.getFullYear();
                })
        }
    }
</script>

<style>

</style>