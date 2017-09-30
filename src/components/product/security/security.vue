<template>
  <transition name="slide">
    <scroll ref="scroll" class="description-wrapper">
      <div class="description-content">
        <split></split>
        <div class="panel border-bottom-1px">
          <h4 class="border-bottom-1px">还款保障</h4>
          <div class="text">
            <p>
              <i class="red-dot"></i>资产小额分散，回款直接进入用户海口银行存管账户，还款来源有充分保障；<br>
              <i class="red-dot"></i>微银理财专注于小额分散消费金融，在项目过程中对基础资产做实时监控，其资产违约率远低于其他行业的坏账率； <br><i class="red-dot"></i>如分散债权发生问题，由浙江禅文投资管理有限公司缴纳的风险备付金先行兑付。
            </p>
          </div>
        </div>
        <split></split>
        <div class="panel border-bottom-1px">
          <h4 class="border-bottom-1px">风控保障</h4>
          <div class="content">
            <div class="box">
              <div class="s-title"><img @load="loadImage" src="~common/image/security/title1.png" alt=""></div>
              <div class="s-text">
                <p>为响应国家相关监管政策，最大限度保障用户资金安全，微银理财与海口联合农商银行签订资金银行存管合作协议。资金由银行存管，能够有效杜绝资金池，避免平台挪用客户资金，交易更加合规、安全。</p>
              </div>
              <div class="content-box">
                <img @load="loadImage" src="~common/image/security/content1.png">
              </div>
            </div>
            <div class="box">
              <div class="s-title"><img @load="loadImage" src="~common/image/security/title2.png" alt=""></div>
              <div class="s-text">
                <p>实施多维度风控措施，使用征信大数据对借贷人信用严格把关，多层级审核借贷人的资产规模与负债结构，借贷过程全程实时监控，确保借贷人有稳定可信的还款能力，保障还款来源。</p>
              </div>
              <div class="content-box">
                <img @load="loadImage" src="~common/image/security/content2.png">
              </div>
            </div>
            <div class="box">
              <div class="s-title"><img @load="loadImage" src="~common/image/security/title3.png" alt=""></div>
              <div class="content-box">
                <img @load="loadImage" src="~common/image/security/content3.png">
              </div>
            </div>
            <div class="box">
              <div class="s-title" style="padding-top: 48px;"><img @load="loadImage" src="~common/image/security/title4.png" alt=""></div>
              <div class="s-text">
                <p>采用阿里巴巴企业级金融cloud服务器，专业高效美国Norton专业安全认证，个人信息不泄露。服务器RSA技术加密，保障网络传输数据安全。多项行业安全认证，信息安全更可靠。</p>
              </div>
              <div class="content-box" style="padding-bottom: 80px">
                <img @load="loadImage" src="~common/image/security/content4.png">
              </div>
            </div>
          </div>
        </div>
      </div>
    </scroll>
  </transition>
</template>
<script type="text/ecmascript-6">
  import Split from 'components/split/split'
  import Scroll from 'base/scroll/scroll'

  export default {
    methods: {
      loadImage() {
        if (!this.checkloaded) {
          this.checkloaded = true
          setTimeout(() => {
            this.$refs.scroll.refresh()
          }, 20)
        }
        this.checkloaded = false
      }
    },
    mounted() {
      setTimeout(() => {
        this.$refs.scroll.refresh()
      }, 20)
    },
    components: {
      Split,
      Scroll
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .description-wrapper
    position: absolute
    z-index: 100
    top: 44px
    left: 0
    bottom: 0
    right: 0
    background: $color-background
    &.slide-enter-active, &.slide-leave-active
      transition all .3s
    &.slide-enter, &.slide-leave-to
      transform translate3d(100%, 0, 0)
  .panel
    padding 0 15px
    border-bottom-1px($color-border)
    background $color-background-w
    h4
      height 54px
      font-size $font-size-large
      color $color-text
      line-height 54px
      border-bottom-1px($color-border)
    .text
      padding 15px 0
      line-height 22px
      font-size $font-size-medium
      color $color-text-n
      .red-dot
        display: inline-block
        vertical-align: middle
        width 4px
        height 4px
        background $color-theme
        border-radius 4px
        margin-right 5px
    .content
      .box
        .s-title
          padding 32px 0 16px
          img
            display block
            margin auto
            width 224px
            height 36px
        .s-text
          font-size $font-size-medium
          color $color-text-n
          line-height 22px
        .content-box
          padding-top 20px
          img
            display block
            margin auto
            width 345px


</style>
