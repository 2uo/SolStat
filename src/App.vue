<template>
    <div id="app">
        <NavB/>
        <section class="hero is-info">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title is-size-1">
                        {{$route.name}}
                    </h1>
                </div>
            </div>
        </section>
        <section class="section">
            <router-view/>
        </section>
    </div>
</template>

<script>
    import NavB from '@/components/Navbar'
    import Auth from '@/store/modules/auth'

    export default {
        data: function () {
            return {
                authToken: ''
            }
        },
        components: {
            NavB
        },
        beforeMount() {
            this.axios.defaults.headers.common['Authorization'] = localStorage.getItem('user-token')
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
        a {
            font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }

    i {
        color: hsl(217, 71%, 53%);
    }
</style>
