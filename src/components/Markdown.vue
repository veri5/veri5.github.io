<template>
  <div class="markdown" v-html="md_content"></div>
</template>

<script>
import { marked } from 'marked'

export default {
  name:"Markdown",
  props: {
    filepath: {
      type: String,
    }
  },
  data(){
    return {
      md_content: ''
    }
  },
  async created(){
    const module = await import(`@/assets/${this.filepath}`)
    this.md_content =  marked(module.default)
  },
}
</script>