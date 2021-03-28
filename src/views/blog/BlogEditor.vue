<template>
  <a-layout>
    <a-layout-header>
      <Navbar />
    </a-layout-header>
    <a-layout-content>
      <a-row>
        <a-col :span="12">
          <a-input
            v-model:value="blogDetail.title"
            placeholder="Blog title"
          />
        </a-col>
        <a-col :span="12">
          <a-date-picker
            show-time
            placeholder="Select Time"
            @ok="onDateConfirm"
          />
        </a-col>
      </a-row>
      <a-row>
        <a-col
          :span="24"
          class="blog-content"
        />
        <div id="editor">
          <mavon-editor
            v-model="blogDetail.content"
            style="height: 100%"
          />
        </div>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-button
            type="primary"
            :loading="savingBlog"
            @click="saveBlog"
          >
            保存
          </a-button>
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
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import { notification } from 'ant-design-vue'

import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BlogEditor',
  components: {
    Navbar,
    Feet,
    mavonEditor: mavonEditor.mavonEditor,
  },
  data() {
    return {
      blogId: '',
      blogDetail: {
        title: '',
        content: '',
        tags: [],
        date: null,
      },
      savingBlog: false,
    }
  },
  async created() {
    const id = this.$route.params.id
    if (id) {
      this.blogId = id
      const blogDetail = (await blogAjax.getBlogById({ id })).data.data
      if (blogDetail) {
        this.blogDetail = blogDetail
      }
    }
  },
  methods: {
    async saveBlog() {
      if (this.id) {
        console.log('blog edit to be implemented')
        return
      }
      this.savingBlog
      const response = (await blogAjax.postBlog({
        title: this.blogDetail.title,
        content: this.blogDetail.content,
        tags: this.blogDetail.tags,
        date: this.blogDetail.date,
      })).data
      if (response.result === 'success') {
        const id = response.data._id
        this.$router.push(`/pages/blog/${id}`)
      } else {
        notification.error({
          message: 'Post blog failed',
          description:
          'Reason to be filled.',
        })
      }
    },
    onDateConfirm(date) {
      this.blogDetail.date = date.valueOf()
    },
  },
})
</script>