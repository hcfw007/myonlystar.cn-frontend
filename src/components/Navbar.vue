<template>
  <a-layout-header>
    <div class="content-container nav-content-container">
      <a-row>
        <a-col :span="12">
          <div class="website-title-block">
            <span class="website-title"><a href="/">MyOnlyStar.CN</a></span>
            <span class="website-subtitle">一个普通的程序员</span>
          </div>
        </a-col>
        <a-col :span="12">
          <div class="nav-menu-container">
            <div class="nav-menu-title clickable">
              Blog
            </div>
            <div class="nav-menu-title clickable">
              About
            </div>
          </div>
        </a-col>
      </a-row>
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
.nav-content-container
  .website-title
    font-size: 28px

  .website-subtitle
    margin-left:20px
    font-size: 14px
    color: var(--faint-color)

  .nav-menu-container
    display: flex
    justify-content: flex-end

    .nav-menu-title
      padding: 0 15px
</style>