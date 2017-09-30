<template>
  <div class="trade-detail-wrapper">
    <split></split>
    <div class="head">
      <div class="title border-bottom-1px">
        <p>用户</p>
        <p>投资金额(元)</p>
        <p>购买时间</p>
      </div>
    </div>
    <scroll ref="list"
            :data="tradeList"
            :pullup="pullup"
            @scrollEnd="loadMore"
            class="list-wrapper">
      <ul class="list">
        <li v-for="item in tradeList" class="border-bottom-1px">
          <p>{{item.cellphone.substring(0,3) + '****' + item.cellphone.substring(7)}}</p>
          <p>{{item.principal}}</p>
          <p>{{item.orderTime}}</p>
        </li>
        <div class="loading-wrapper" v-show="hasMore">
          <loading title=""></loading>
        </div>
      </ul>
      <div v-show="!hasMore && !tradeList.length" class="no-result-wrapper">
        <no-result title="暂无投资记录"></no-result>
      </div>
    </scroll>
  </div>
</template>
<script type="text/ecmascript-6">
  import Split from 'components/split/split'
  import Scroll from 'base/scroll/scroll'
  import Loading from 'base/loading/loading'
  import NoResult from 'base/no-result/no-result'
  import {getTradeDetail} from 'api/product'
  import {ERR_OK} from 'api/config'

//  const perpage = 15

  export default {
    props: {
      tag: {
        type: String,
        default: ''
      },
      productId: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        page: 1,
        pullup: true,
        hasMore: true,
        tradeList: []
      }
    },
    created() {
      this._getTradeDetail()
    },
    methods: {
      refresh() {
        this.$refs.list.refresh()
      },
      _getTradeDetail() {
        let data = {
          page: this.page,
          productId: this.productId
        }
        getTradeDetail(this.tag, data).then((res) => {
          if (res.code === ERR_OK) {
            this.tradeList = res.data.productTradeDetails
            this._checkMore(res.data)
          }
        })
      },
      loadMore() {
        if (!this.hasMore) {
          return
        }
        this.page++
        getTradeDetail(this.tag, {
          page: this.page,
          productId: this.productId
        }).then((res) => {
          if (res.code === ERR_OK) {
            this.tradeList = this.tradeList.concat(res.data.productTradeDetails)
            this._checkMore(res.data)
          }
        })
      },
      _checkMore(data) {
        const list = data.productTradeDetails
//        if (!list.length || (data.curnum + (data.curpage - 1) * perpage) >= data.totalnum) {
//          this.hasMore = false
//        }
        if (!list.length || data.pages === 1) {
          this.hasMore = false
        }
      }
    },
    components: {
      Split,
      Scroll,
      Loading,
      NoResult
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .trade-detail-wrapper
    position absolute
    top 0
    left 0
    bottom 0
    right 0
    background $color-background-w
    .head
      position relative
      z-index 101
      padding 0 15px
      background $color-background-w
      .title
        border-bottom-1px($color-border)
        display flex
        justify-content space-between
        align-items center
        height 50px
        font-size $font-size-medium-x
        color $color-text-n
        p
          flex 0 0 auto
          text-align center
          &:first-child
            width 100px
          &:last-child
            width 84px
    .list-wrapper
      position absolute
      top 60px
      left 0
      bottom 0
      right 0
      width 100%
      .list
        overflow: hidden
        padding 0 15px
        .loading-wrapper
          padding 10px 0
        li
          display flex
          justify-content space-between
          align-items center
          height 52px
          border-bottom-1px($color-border)
          color $color-text-n
          p
            flex 0 0 auto
            text-align center
            font-size 15px
            &:first-child
              width 100px
            &:last-child
              width 84px
              font-size 13px
              text-align left
      .no-result-wrapper
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>
