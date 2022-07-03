<template>
  <article-card v-for='(index,item) in article' :key="index" v-bind:title="item.title" v-bind:bodyText="item.bodyText"></article-card>
</template>

<script>
import ArticleCard from '@/components/common/ArticleCard'

export default {
  props:{
    article:{
      type:Array,
      default(){return [{title:'',bodyText:'这里没有内容！'}]}
    }
  },
  components: {
    ArticleCard
  },
}
</script>