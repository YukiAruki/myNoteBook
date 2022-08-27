<template>
  <el-container>
    <el-aside width="250px" class="leftAside">
      <nav-menu></nav-menu>
    </el-aside>
    <el-main>
      <slot></slot>
    </el-main>
  </el-container>
</template>

<script>
import NavMenu from '@/components/common/NavMenu'

export default {
  name:'main-container',
  components:{
    NavMenu,
  },
  data(){
    return {
      title:'myBlog'
    }
  }
}
</script>

<style scoped>
  .leftAside{
    background-color: aliceblue;
  }
</style>