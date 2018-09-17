<template>
    <div class="column is-2">
        <div class="card">
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <div class="field is-grouped is-multiline">
                            <div class="control" v-if="private && chat.username">
                                <div class="tags has-addons">
                                    <span class="tag is-dark">usr</span>
                                    <a class="tag is-link" :href="url">@{{chat.username}}</a>
                                </div>
                            </div>
                            <div class="control">
                                <div class="tags has-addons">
                                    <span class="tag is-dark">type</span>
                                    <span v-if="private" class="tag is-success">pm</span>
                                    <span v-else class="tag is-warning">grp</span>
                                </div>
                            </div>
                        </div>
                        <p class="title is-5">
                            {{chat.first_name || chat.title}}
                        </p>
                        <p class="subtitle is-6">{{chat.id}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: ['chat'],
    computed: {
      private() {
        return this.chat.type === 'private'
      },
      url() {
        return 'https://t.me/' + this.chat.username
      }
    }
  }
</script>