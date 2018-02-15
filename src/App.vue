<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import VHeader from 'components/v-header/v-header'
  import { ERR_OK } from 'api/config'
  import { urlParse } from 'common/js/util'

  export default {
    data () {
      return {
        seller: {
          id: (() => {
            let queryParam = urlParse()
            return queryParam.id
          })()
        }
      }
    },
    created () {
      this.$http.get('/api/seller?id' + this.seller.id).then((response) => {
        response = response.body
        if (response.errno === ERR_OK) {
          // this.seller = response.data
          this.seller = Object.assign({}, this.seller, response.data)
          // console.log(this.seller.id)
        }
      })
    },
    components: {
      VHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import 'common/stylus/mixin.styl'

  #app
    .tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      // border-bottom: 1px solid rgba(7, 17, 27 .1)
      border-1px(rgba(7, 17, 27, .1))
      .tab-item
        flex: 1
        text-align: center
        & > a
          display: block
          font-size: 14px
          text-decoration: none
          color: rgb(77, 85, 93)
          &.active
            color: rgb(240, 20, 20)
</style>
