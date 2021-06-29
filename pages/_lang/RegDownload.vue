<template>
  <div>
    <div class="p-1">
      <div class="flex items-center justify-between">
        <p class="fs44 cl000000">注册</p>
      </div>
      <div class="mt-2">
        <div class="flex items-center justify-between fs24">
          <span class="cl02AD8F">手机</span>
        </div>
        <van-field
          class="mt01 bkF5F6FA input-label input-label-Login font-semibold fs28 rounded-sm"
          v-model="regParams.phone"
          placeholder="请输入手机号"
        >
        </van-field>

        <div class="flex items-center justify-between fs24 mt-2 cl02AD8F">
          <span>验证码</span>
        </div>
        <van-field
          v-model="regParams.code"
          class="mt01 bkF5F6FA input-label input-label-w2 font-semibold fs28"
          center
          type="text"
          placeholder="请输入验证码"
        >
          <template #button>
            <span @click="getCode">
              {{time == 60 ? '获取验证码' : `${time}秒`}}
            </span>
          </template>
        </van-field>

        <div class="flex items-center justify-between fs24 mt-2 cl02AD8F">
          <span>密码</span>
        </div>
        <van-field
          v-model="regParams.password"
          class="mt01 bkF5F6FA input-label input-label-w2 font-semibold fs28"
          center
          :type="isShowRegParamsPassword ? 'text' : 'password'"
          placeholder="请输入登录密码"
        >
          <template #button>
            <img
              @click="isShowRegParamsPassword = !isShowRegParamsPassword"
              class="wh036"
              src="~/assets/svg/icon_display.svg"
              alt=""
            >
          </template>
        </van-field>

        <div class="flex items-center justify-between fs24 mt-2 cl02AD8F">
          <span>确认密码</span>
        </div>
        <van-field
          v-model="password"
          class="mt01 bkF5F6FA input-label input-label-w2 font-semibold fs28"
          center
          :type="isShowPassword ? 'text' : 'password'"
          placeholder="请再次输入登录密码"
        >
          <template #button>
            <img
              @click="isShowPassword = !isShowPassword"
              class="wh036"
              src="~/assets/svg/icon_display.svg"
              alt=""
            >
          </template>
        </van-field>

        <div class="flex items-center justify-between fs24 mt-2 cl02AD8F">
          <span>推荐人ID (必填)</span>
        </div>
        <van-field
          class="mt01 bkF5F6FA input-label input-label-Login font-semibold fs28 rounded-sm"
          v-model="regParams.referralCode"
          placeholder="请输入推荐人ID"
        >
        </van-field>
        <div class="flex items-center justify-between fs24 mt-2 cl02AD8F">
          <span>支付初始密码：123456</span>
        </div>

        <!-- <van-checkbox
          class="mt-2"
          v-model="checked"
          checked-color="#02AD8F"
        >
          <div class="cl02AD8F fs24">
            我已同意并阅读<span class="cl02AD8F">奇迹TGC服务条款</span>
          </div>
        </van-checkbox> -->
      </div>
    </div>
    <div class="w-full my-1 py-2">
      <div
        @click="reg"
        class="bk02AD8F rounded-sm clffffff fs32 text-center py-1 mx-1"
      >
        注册
      </div>
      <nuxt-link :to="`/download`">
        <div class="bk02AD8F rounded-sm clffffff fs32 text-center py-1 mx-1 mt-1">
          下载APP
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
// import { mapState, mapMutations } from 'vuex'
import qs from "qs";
import axios from 'axios'
export default {
  layout: "RegDownload",
  data () {
    return {
      password: "",
      isShowPassword: false,
      isShowRegParamsPassword: false,
      checked: false,
      getMnemonicData: "",
      regParams: {
        "code": "",// "手机号"
        "phone": "",// "手机号"
        "password": "",// "登录密码"
        // "mnemonic": "",// "助记词"
        "referralCode": this.$route.query.referralCode,// "邀请码"
      },
      time: 60,
      timer: null
    }
  },
  computed: {
    // ...mapState(['locale'])
  },
  created () {
    // this.getoldMnemonic()
  },
  mounted () {
    this.$nextTick(() => {
    })
  },
  methods: {
    // 注册时获取助记词
    getoldMnemonic () {
      this.$api.user.getMnemonic().then(res => {
        if (res.type == "success") {
          this.regParams.mnemonic = res.data
        }
      })
    },
    // 获取短信验证码
    getCode () {
      if (!this.regParams.phone) {
        return this.$Toast("对不起，手机号不能为空")
      }
      let params = {
        // 短信类型：reg(注册)|withdraw(提币)|changePwd(修改密码)|forgetPwd(忘记密码)
        type: "reg",
        // 手机号
        phone: this.regParams.phone,
      }
      params = qs.stringify(params)
      axios.post(`https://nbex.jcpt.club/api/user/getCode`,params)
      .then(res=>{
        if (res.data.type == "success") {
          this.$Toast("获取验证码成功")
          this.timer = setInterval(() => {
            if (this.time <= 1) {
              clearInterval(this.timer)
              this.time = 60
              return
            }
            this.time--
          }, 1000)
        }else{
          this.$Toast(res.data.message)
        }
      })
    },
    reg () {
      if (!this.regParams.phone) {
        return this.$Toast("对不起，手机号不能为空")
      }
      if (!this.regParams.password) {
        return this.$Toast("对不起，登录密码不能为空")
      }
      if (!this.regParams.referralCode) {
        return this.$Toast("对不起，邀请码不能为空")
      }
      if (this.password != this.regParams.password) {
        return this.$Toast("两次密码输入不一致，请重新输入")
      }
      this.regParams.password = this.$md5(this.regParams.password)
      this.regParams = qs.stringify(this.regParams)
      axios.post(`https://nbex.jcpt.club/api/user/reg`,this.regParams)
      .then(res=>{
        if (res.data.type == "success") {
          this.$Toast("注册成功，跳转登录")
          this.$commonFn.toUrl('Public/Login')
        } else {
          this.$Toast(res.data.message)
          this.regParams.phone = ""
          this.regParams.password = ""
        }
      })
    },
  },
}
</script>
<style lang="scss" scoped>
@import "./main.css";
</style>