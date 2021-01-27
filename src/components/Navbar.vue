<template>
  <a-layout-header class="nav">
    <div class="website-title-block">
      <span class="website-title">MyOnlyStar.CN</span>
      <span class="website-subtitle">想到啥做啥 请勿抱有太多期待</span>
    </div>
  </a-layout-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Navbar',
})
</script>

<style lang="stylus">
.nav.ant-layout-header
    background: var(--sub-background)
    color: var(--sub-color)

  .website-title
    font-size: 28px

  .website-subtitle
    margin-left:20px
    font-size: 14px
    color: var(--faint-color)
</style>