<template>
    <div class="card">
        <header class="card-header">
            <div class="card-header-title">
                <p>{{name}}</p>
                &nbsp;&nbsp;
                <div class="field is-grouped is-grouped-multiline">
                    <div class="control">
                        <div class="tags has-addons">
                            <span class="tag is-dark">клас</span>
                            <span class="tag is-info">{{form}}</span>
                        </div>
                    </div>

                    <div class="control">
                        <div class="tags has-addons">
                            <span class="tag is-dark">рік</span>
                            <span class="tag is-success">{{year}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div class="card-content">
            <div class="content">
                <p class="is-size-5">Примітки до книжки</p>
                <p>Автор1, Автор2, Автор3</p>
            </div>
        </div>
        <footer class="card-footer">
            <a href="#" class="card-footer-item">Переглянути</a>
            <a href="#" class="card-footer-item">Редагувати</a>
        </footer>
    </div>
</template>

<script>
  export default {
    props: ['name', 'form', 'year'],
    computed: {}
  }
</script>