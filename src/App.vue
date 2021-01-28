<template>
  <a-config-provider :locale="locale">
    <router-view
      class="light"
    />
  </a-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import './assets/global.stylus'

export default defineComponent({
  name: 'App',
  data() {
    return {
      locale: zhCN,
    }
  },
})
</script>

<style lang="stylus">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  position: relative
  height: 100vh
  width: 100vw
</style>