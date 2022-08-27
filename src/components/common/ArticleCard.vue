<template>
  <el-card class="box-card" shadow="hover">
    <template #header v-if="title != ''">
      <div class="card-header">
        <span>{{ title }}</span>
      </div>
    </template>
    <div class="body-card">
      <pre>{{ bodyText }}</pre>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    bodyText: {
      type: String,
      default:"[未获取到博文]\n奇怪！这里应该是有内容的啊(´ﾟДﾟ`)"
    }
  },
  methods: {
  }
}
</script>

<style>
.box-card {
  max-height: 500px;
  width:600px;
}

.body-card{
  line-height: 18pt;
  max-height: 450px;
  width:600px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>