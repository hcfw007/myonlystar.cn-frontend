<template>
  <a-layout-footer>
    <a-row>
      <a-col :span="4">
        Contact: <a href="mailTo: brotherstyx@gmail.com">brotherstyx@gmail.com</a>
      </a-col>
      <a-col :span="4">
        Github: <a href="https://github.com/hcfw007">hcfw007</a>
      </a-col>
    </a-row>
  </a-layout-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Feet',
})
</script>