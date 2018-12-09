<template>
    <div class="columns">
        <div class="column box is-4 is-offset-4">
            <h1 class="title">Реєстрація</h1>
            <form @submit.prevent="signup">
                <b-field :type="failed.name">
                    <b-input v-model="user.name"
                             placeholder="Ім'я"
                             icon="account"
                             title="Іван"
                    />
                </b-field>
                <b-field :type="failed.surname">
                    <b-input v-model="user.surname"
                             placeholder="Прізвище"
                             icon="account-outline"
                             title="Іванов"
                    />
                </b-field>
                <b-field :type="failed.username">
                    <b-input v-model="user.username"
                             placeholder="Нікнейм"
                             icon="ticket-account"
                             title="_NickName_ Буде використаний як логін."
                    />
                </b-field>
                <b-field :type="failed.phone">
                    <b-input v-model="user.phone"
                             type="tel"
                             placeholder="Номер телефону"
                             icon="phone"
                             title="093-12-34-567"
                    />
                </b-field>
                <b-field :type="failed.email">
                    <b-input v-model="user.email"
                             placeholder="Електронна пошта"
                             icon="at"
                             title="example@mail.com"
                    />
                </b-field>
                <b-field :type="failed.password">
                    <b-input v-model="user.password"
                             type="password"
                             password-reveal
                             placeholder="Пароль"
                             icon="lock"
                             title="Можуть бути застосовані будь-які символи: A-Z, a-z, А-Я, а-я, 0-9, .,-/\!@#$%&*()+="
                    />
                </b-field>
                <b-field :type="failed.passwordReveal">
                    <b-input v-model="user.passwordReveal"
                             type="password"
                             password-reveal
                             placeholder="Пароль ще раз"
                             icon="lock"
                             title="Повторіть Ваш пароль"
                    />
                </b-field>
                <b-message title="Помилка реєстрації!" type="is-danger" has-icon :active.sync="isActive">
                    <ul>
                        <li v-for="error in err"
                            v-bind:key="error.field">
                            <b>{{error.field}}:</b> {{error.message}}
                        </li>
                    </ul>
                </b-message>
                <p class="description"><span>*</span>Натискаючи "Зареєструватись" ви погоджуєтесь з
                    <router-link to="/privacy-policy">нашою політикою конфіденційності</router-link>
                </p>
                <b-field>
                    <button class="button is-block is-link" type="submit">Зареєструватись</button>
                    <input class="button is-block is-text" type="reset" value="Скинути">
                </b-field>
            </form>
        </div>
    </div>
</template>

<script>
    import BInput from "buefy/src/components/input/Input";
    import BField from "buefy/src/components/field/Field";
    import {AUTH_REQUEST} from '@/store/actions/auth'

    export default {
        components: {
            BField,
            BInput
        },
        name: 'Signup',
        data() {
            return {
                user: {
                    name: '',
                    surname: '',
                    nickname: '',
                    phone: '',
                    email: '',
                    password: '',
                    passwordReveal: ''
                },
                failed: {
                    name: '',
                    surname: '',
                    nickname: '',
                    phone: '',
                    email: '',
                    password: '',
                    passwordReveal: ''
                },
                isActive: false,
                err: ''
            }
        },
        methods: {
            signup: function () {
                var that = this,
                    errors = []
                this.failed  = {name: '',
                    surname: '',
                    nickname: '',
                    phone: '',
                    email: '',
                    password: '',
                    passwordReveal: ''
                }
                this.isActive = false;
                this.axios({url: 'register', data: this.user, method: 'POST'})
                    .then(resp => {
                        if (that.success || this.user.password === this.user.passwordReveal) {
                            this.$store.dispatch(AUTH_REQUEST, this.user).then(() => {
                                this.$router.push('/')
                            })
                            console.log('Success sign up!');
                        } else {
                            if (that.user.passwordReveal !== this.user.password) {
                                this.failed.passwordReveal = 'is-danger';
                                errors.push({
                                    field: 'password reveal',
                                    message: 'passwords are not the same'
                                })
                            }

                            console.log('Failed sign up. Server response: ')
                            console.log(resp);

                            that.isActive = true;

                            for (var i = 0; i < resp.data.errors.length; i++) {
                                errors.push(resp.data.errors[i]);
                                this.failed[resp.data.errors[i].field] = 'is-danger'
                            }

                            this.err = errors;

                            console.log('Failes sign up. Errors: ');
                            console.log(this.err)
                        }
                    })
            },
        }
    }
</script>

<style>
    .description {
        font-size: 12px;
    }
</style>