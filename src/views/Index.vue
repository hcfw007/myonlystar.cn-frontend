<template>
  <a-layout>
    <a-layout-header>
      <Navbar />
    </a-layout-header>
    <a-layout-content>
      <a-row>
        <a-col :span="24">
          <h1>个人简介</h1>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <p>一夕匕，月半，了一。</p>
          <p>一个普通的程序员，来自江苏，南京。</p>
          <p>爱好：游戏，足球，编程。</p>
          <p>擅长：写bug，看美剧。</p>
          <p>大部分事情无所谓，小部分事情认死理。</p>
          <p>生活方式可能与常人不同，虽然自己并不那么认为，但不太喜欢别人指指点点。</p>
          <p>爱情长跑11年，做好了跑一辈子的打算。</p>
          <p>丑照：不给看。</p>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <h1>近期博文</h1>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-list-item>
            <a-list-item-meta>
              <template #title>
                <a href="https://www.antdv.com/">test</a>
              </template>
            </a-list-item-meta>
          </a-list-item>
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
import { blogAjax } from '../axios/blog'

import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Index',
  components: {
    Navbar,
    Feet,
  },
  data: () => {
    return {
      blogList: [],
    }
  },
  created() {
    this.getBlogList()
  },
  methods: {
    async getBlogList() {
      const response = await blogAjax.listBlog()
      this.blogList = response.data ? response.data : []
    },
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
  padding: 50px
</style>