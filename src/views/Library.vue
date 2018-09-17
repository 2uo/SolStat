<template>
    <div class="has-text-left">
        <h1 class="title">Бібліотека</h1>
        <div class="columns">
            <div class="column is-3" v-for="book in books">
                <book :name="book.name"
                      :form="book.form"
                      :year="book.year"
                />
            </div>
        </div>
    </div>
</template>

<script>
  import Book from '@/components/Book'

  export default {
    components: {Book},
    data() {
      return {
        books: [
          {
            name: "Book1",
            form: "11ph/m",
            year: "1998"
          },
          {
            name: "Book2",
            form: "9b/ch",
            year: "1978"
          },
          {
            name: "Book43",
            form: "8ph/m",
            year: "2012"
          }
        ]
      }
    },
    methods: {},
    computed: {},
  }
</script>
