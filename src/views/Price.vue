<template>
    <div class="box">
        <h1 class="title">Типи підписок:</h1><br>
        <div class="columns">
            <div class="column box is-3 is-offset-2">
                <strong class="title">Primary</strong>
                <hr>
                <div class="modal-description">
                    <p>Срок дії:
                        <span>
                            {{nowTime.getFullYear() + 1}}:{{correctMounth(nowTime.getMonth() + 6)}}:{{nowTime.getDate()}}
                        </span>
                    </p><br>
                    <p>Ціна:
                        <span>
                            {{price.primary}} $
                        </span>
                    </p><br>
                    <router-link to="/payment" class="button is-info is-medium">Замовити</router-link>
                </div>
            </div>

            <div class="column box is-3 is-offset-2">
                <strong class="title">Elite</strong>
                <hr>
                <div class="modal-description">
                    <p>Срок дії:
                        <span>
                            {{nowTime.getFullYear() + 1}}:{{correctMounth(nowTime.getMonth() + 1)}}:{{nowTime.getDate()}}
                        </span>
                    </p><br>
                    <p>Ціна:
                        <span>
                            {{price.elite}} $
                        </span>
                    </p><br>
                    <router-link to="/payment" class="button is-primary is-medium">Замовити</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
      data: function() {
          return {
              nowTime: new Date(),
              price: {
                  primary: 19.99,
                  elite: 29.99
              }
          }
      },
      methods: {
          correctMounth: function (data) {
              if (data > 12) {
                  return data - (12 * (Math.round(data / 12)))
              } else if (data < 1) {
                  return 'uncorrect data'
              } else {
                  return data
              }
          }
      }
  }
</script>

<style>
    .modal-description {
        font-size: 20px;
        font-weight: 600;
    }
    span {
        font-weight: 400 !important;
    }
</style>