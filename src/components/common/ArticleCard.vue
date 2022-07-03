<template>
  <el-card class="box-card" shadow="hover">
    <template #header v-if="title != ''">
      <div class="card-header">
        <span>{{ title }}</span>
      </div>
    </template>
    <div>
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
      default: '测试数据？\n测试数据！\n测试数据！\n测试数据！\n测试数据！\n测试数据！\n测试数据！\n测试数据！\n测试数据！测试数据？\n测试数据！\n测试数据！\n测试数据！\n测试数据！\n测试数据！\n测试数据！\n测试数据！\n测试数据！测试数据？\n测试数据！\n测试数据！\n测试数据！\n测试数据！\n测试数据！\n测试数据！\n测试数据！\n测试数据！测试数据？\n测试数据！\n测试数据！\n测试数据！\n测试数据！\n测试数据！\n测试数据！\n测试数据！\n测试数据！'
    }
  },
  methods: {
  }
}
</script>

<style>
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  line-height: 18pt;
  text-overflow: ellipsis;
}

.box-card {
  max-height: 500px;
}
</style>