<template>
  <div>
   <article-area v-bind:article="article"></article-area>
  </div>
</template>

<script>
import ArticleArea from '@/components/common/ArticleArea'

export default {
  name:'HomeView',
  components: {
    ArticleArea
  },
   data() {
    return {
      article: [{
        title: '第一条测试数据！',
        bodyText:'这是一条测试数据\r在写博文时会使用textarea存入数据库，其换行的标识为反斜杠r，为了保持原有的文章格式，采用pre标签进行输出\r如果多次换行就会变成：\r\r这个样子'
      }]
    }
  }
};
</script>