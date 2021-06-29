<template>
  <div class="download relative h-screen">
    <div class="absolute bottom-0 clffffff w-full pb-6 space-y-2">
      <a
        class="block"
        :href="getSysInfoData.androidDownload"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          class="w-2/3 mx-auto"
          src="~/assets/image/home/Android_download.png"
          alt=""
        >
      </a>
      <a
        class="block"
        :href="getSysInfoData.iosDownload"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          class="w-2/3 mx-auto"
          src="~/assets/image/home/ios_download.png"
          alt=""
        >
      </a>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  layout: "download",
  data () {
    return {
      getSysInfoData: {
        androidVersion: "",
        iosDownload: "",
        androidDownload: "",
      }
    }
  },
  created () {
    this.getSysInfo()
  },
  methods: {
    getSysInfo () {
      let data = {};
      axios.post(`https://nbex.jcpt.club/api/main/getSysInfo`,data)
      .then(res=>{
        if (res.data.type == "success") {
          this.getSysInfoData = res.data.data
        }else{
          this.$Toast(res.data.message)
        }
      })
    }
  },
}
</script>
<style lang="scss" scoped>
@import "./main.css";
</style>