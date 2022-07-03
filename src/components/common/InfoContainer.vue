<template>
  <div>
    <el-avatar shape="square" :size="90" :src="squareUrl"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      squareUrl:'#' // get获取网络接口图标
    }
  },
  computed:{
  },
  methods:{
  }
};
</script>