<template>
  <div class="h-full">
    <div class="head flex items-center h-full xl:w-1200 px-4 xl:px-0 mx-auto">
      <nuxt-link
        :to="`/${locale}`"
        class="pc_show base_width router-link-exact-active router-link-active"
      >
        <!-- <img
          style="height: 40px;"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMMAAABLCAYAAADNnDMfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRBRjNCRUNDOUY0RjExRUI5Nzg3RUQ1RTkxRUZFOEIzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjRBRjNCRUNEOUY0RjExRUI5Nzg3RUQ1RTkxRUZFOEIzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEFGM0JFQ0E5RjRGMTFFQjk3ODdFRDVFOTFFRkU4QjMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEFGM0JFQ0I5RjRGMTFFQjk3ODdFRDVFOTFFRkU4QjMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6qkqv4AAAL8ElEQVR42uxdC5RW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"
          alt=""
        > -->
        <span class="clffffff font-bold fs30">隆亿跨度</span>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import intializePwa from '~/plugins/pwa'
import * as jsCokie from 'js-cookie'
export default {
  data () {
    return {
      showInstallPrompt: null,
      LoingToken: '',
      exchangerateDialogVisible: false,
      currentExchangeRate: "CNY - ￥",
      exchangerate: ['CNY - ￥', 'USD - $', 'EUR - €', 'RUB - ₽', 'VND - ₫', 'TRY - ₺', 'ARS - ARS$']
    }
  },
  computed: {
    ...mapState(['locale', 'token', 'UserInfo']),
  },
  async mounted () {
    // if(!this.$store.state.publicToken){
    //   this.$store.dispatch('SignToken');
    // }
    this.LoingToken = this.token;
    this.showInstallPrompt = await intializePwa()
    // 关闭浏览器窗口的时候清空浏览器缓存在localStorage的数据
    window.addEventListener('beforeunload', (e) => this.beforeunloadFn())
    window.addEventListener('unload', (e) => this.unloadFn())
  },
  destroyed () {
    window.removeEventListener('beforeunload', e => this.beforeunloadFn());
    window.removeEventListener('unload', e => this.unloadFn());
  },
  methods: {
    unloadFn () {
      this._gap_time = new Date().getTime() - this._beforeUnload_time
      if (this._gap_time <= 5) {
        jsCokie.set('publicToken', '')
        jsCokie.set('token', '')
        var storage = window.localStorage
        storage.clear()
      }
    },
    beforeunloadFn () {
      this._beforeUnload_time = new Date().getTime()
    },
    walletTolink (item) {
      this.$router.push({ path: item })
      this.$store.commit('SET_MENU', 'wallet')
    },
    orderTolink (item) {
      this.$router.push({ path: item })
      this.$store.commit('SET_MENU', 'order')
    },
    userTolink (item) {
      if (item == '/user/logout') {
        this.$api.User.LoingOut().then((res) => {
          if (res.isSuccess) {
            this.$store.commit('SET_TOKEN', '')
            this.$message({
              message: '退出成功',
              center: true,
              type: 'success',
            })
            setTimeout(() => {
              this.$router.push(`/${this.locale}/Login`)
            }, 200)
          }
        })
        return false
      }
      this.$router.push({ path: item })
      this.$store.commit('SET_MENU', 'user')
    },
    SelectLangType (item) {
      if (this.locale !== item) {
        const link = this.$route.path.replace(
          `/${this.$store.state.locale}`,
          ''
        )
        this.$store.commit('SET_LANG', item)
        let hashValue = this.$route.hash
        this.$nextTick(() => {
          this.$router.replace(`${this.$i18n.getPath(link)}${hashValue}`)
        })
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.dropdown-menu.el-dropdown-menu {
  background-color: #1d2538;
  border: none;
  border-radius: 0;
  padding: 0;
  width: 146px;
  /deep/.el-dropdown-menu__item {
    padding: 4px 10px;
    color: #fff;
  }
  /deep/.el-dropdown-menu__item:not(.is-disabled):hover,
  /deep/.el-dropdown-menu__item:focus {
    background-color: #4a5160;
    color: #02ad8f;
  }
  /deep/.popper__arrow {
    display: none;
  }
}
.border-cl010920 {
  border-color: #010920;
}
.exchangerate {
  /deep/.el-dialog__header {
    padding: 0;
  }
}
</style>