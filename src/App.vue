<template>
    <div id="app">
        <NavB/>
        <section class="hero is-info">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
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

  export default {
    components: {
      NavB
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
