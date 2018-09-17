<template>
    <div>
        <div class="columns">
            <div class="column is-2">
                <div class="card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">
                                    Send message
                                </p>
                                <hr/>
                                <form @submit.prevent="sendMsg">
                                    <b-field>
                                        <b-input v-model="msg.chat_id" type="number" placeholder="chat_id"></b-input>
                                    </b-field>
                                    <b-field>
                                        <b-input type="textarea" v-model="msg.text" placeholder="text"></b-input>
                                    </b-field>
                                    <button class="button is-link is-block">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-2 is-offset-3">
                <div class="card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">
                                    {{bot.first_name}}
                                <hr/>
                                <a class="subtitle is-6" :href="bot_url">@{{bot.username}}</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="columns">
          <Chat v-for="chat in chats" :chat="chat"></Chat>
        </div>
    </div>
</template>

<script>
  import BField from "buefy/src/components/field/Field";
  import BInput from "buefy/src/components/input/Input";
  import Chat from "@/components/Chat"

  export default {
    components: {
      BInput,
      BField,
      Chat
    },
    data() {
      return {
        msg: {},
        bot: {},
        chats: []
      }
    },
    methods: {
      sendMsg() {
        this.axios.post('send_msg', this.msg)
      }
    },
    computed: {
      bot_url() {
        return 'https://t.me/' + this.bot.username
      }
    },
    beforeMount() {
      var that = this
      this.axios.get('get_me')
        .then(resp => {
          that.bot = resp.data
        })
      this.axios.get('get_chats')
        .then(resp => {
          that.chats = resp.data.chats
        })
    }
  }
</script>
