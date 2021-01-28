<template>
  <a-layout>
    <a-layout-header>
      <Navbar />
    </a-layout-header>
    <a-layout-content>
      <a-row>
        <a-col :span="24">
          现在还空空如也
        </a-col>
      </a-row>
    </a-layout-content>
    <a-layout-footer>
      <Feet />
    </a-layout-footer>
  </a-layout>
</template>

<script lang="ts">
import Navbar from '../components/Navbar.vue'
import Feet from '../components/Feet.vue'

import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Index',
  components: {
    Navbar,
    Feet,
  },
})
</script>

<style lang="stylus">
header.ant-layout-header
  background: var(--sub-background)
  color: var(--sub-color)

main.ant-layout-content
  background-color: var(--main-background)
  color: var(--main-color)
</style>