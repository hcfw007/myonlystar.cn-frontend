<template>
  <a-layout>
    <a-layout-header>
      <Navbar />
    </a-layout-header>
    <a-layout-content>
      <a-row>
        <a-col :span="24">
          <h1 class="blog-title">
            {{ blogDetail.title }}
          </h1>
          <h5>{{ new Date(blogDetail.date).toDateString() }}</h5>
        </a-col>
      </a-row>
      <a-row>
        <a-col
          :span="24"
          class="blog-content"
        >
          {{ blogDetail.content }}
        </a-col>
      </a-row>
    </a-layout-content>
    <a-layout-footer>
      <Feet />
    </a-layout-footer>
  </a-layout>
</template>

<script lang="ts">
import Navbar from '../../components/Navbar.vue'
import Feet from '../../components/Feet.vue'
import { blogAjax } from '../../axios/blog'

import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BlogDetail',
  components: {
    Navbar,
    Feet,
  },
  data: () => {
    return {
      blogDetail: {},
    }
  },
  created() {
    this.getBlogDetail()
  },
  methods: {
    async getBlogDetail() {
      const id = this.$route.params.id
      const data = (await blogAjax.getBlogById({ id })).data.data
      console.log(id, data)
      this.blogDetail = data || {}
    },
  },
})
</script>

<style lang="stylus">
.blog-title
  font-size: 26px

.blog-content
  font-size: 20px
</style>