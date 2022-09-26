<template>
  <el-card class="box-card" shadow="hover" v-for='item in article' :key="item.aid" v-bind:title="item.title"
    v-bind:content="item.content">
    <template #header v-if="title != ''">
      <div class="card-header">
        <span>{{ item.title }}</span>
      </div>
    </template>
    <div class="body-card">{{ item.content }}</div>
  </el-card>
</template>

<script>
export default {
  props: {
    article: {
      type: Array,
      default() { return [{ title: '', content: '这里没有内容！' }] }
    }
  },
}
</script>

<style>
.box-card {
  max-height: 500px;
  width: 600px;
  margin-bottom: 20px;
}

.body-card {
  line-height: 18pt;
  max-height: 450px;
  width: 550px;
  overflow: hidden;
  text-overflow: ellipsis;
}

</style>