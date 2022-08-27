<template>
  <div>
    <div>
    <el-input v-model="title" :rows="1" type="text" placeholder="文章标题（选填）" style="margin-bottom:10px;"/>
    <el-button>发布博文</el-button>
    </div>
    <div class="mdouterbox">
      <div class="mdbox">
        <el-input v-model="md" :rows="20" type="textarea" placeholder="使用markdown撰写博文" />
      </div>
      <div v-html="content" class="showarea"></div>
    </div>
  </div>
</template>

<script>
import { marked } from 'marked'

export default {
  data() {
    return {
      md: '',
      content: '',
      title: ''
    }
  },
  watch: {
    md: {
      handler(newVal) {
        this.content = marked(newVal)
      },
    }
  }
}
</script>

<style>
.mdouterbox {
  display: flex;
  justify-content: space-between;
}

.mdbox {
  width: 500px;
}

.showarea {
  width: 600px;
  height: 100vh;
  background-color: #f7f7f7;
  border-radius: 10px;
  padding: 10px;
}
</style>