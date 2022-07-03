<!-- 这是适配个人网站的左侧烂 -->
<template>
  <div>
    <div :style="{ backgroundColor: backgroudColor, color
    :textColor}" class="infoContainer">
      <el-avatar shape="square" :size="80" :src="squareUrl"/>
      <p>{{msg}}</p>
    </div>
    <el-menu default-active="2" class="el-menu-vertical" :text-color="textColor" :background-color="backgroudColor"
      :active-text-color="activeTextColor" :collapse="false" :router="true">
      <el-menu-item v-for="item in menu" @click="changePage(item.name)" :index="item.path" :key="item.path"
        class="el-menu-item-vertical">
        <el-icon :name="item.name">
          <CoffeeCup />
        </el-icon>
        <span>{{ item.label }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style scoped>
.el-menu-vertical {
  height: 100vh;
  width: 100%;
  min-height: 400px;
  border: none;
}

.el-menu-item-vertical {
  font-size: 16px;
}

.infoContainer{
  padding: 30px 0 10px 20px;
  font-size:14px;
}

</style>

<script>
export default {
  data() {
    return {
      squareUrl:'#', // get获取网络接口图标
      msg:'一句个人签名(*´∀`)',
      menu: [
        {
          path: "/",
          name: "Home",
          label: "首页",
          icon: "CoffeeCup",
        },
        {
          path: "/notebook",
          name: "Notebook",
          label: "学习笔记",
          icon: "Key",
        },
        {
          path: "/text",
          name: "Text",
          label: "生活随笔",
          icon: "ColdDrink",
        },
        {
          path: "/painting",
          name: "Painting",
          label: "随便画画",
          icon: "s-home",
        },
        {
          path: "/about",
          name: "About",
          label: "关于",
          icon: "MoonNight",
        },
      ],
    };
  },
  // watch:{
  //   menu:{
  //     immediate: true,
  //     handler(news){
  //       for(let item in news){
  //         let curContainer = document.getElementsByName(item.name);
  //         let curIcon = document.createElement(item.icon);
  //         curContainer.appendChild(curIcon);
  //       }
  //     }
  //   }
  // },
  methods: {
    changePage(data) {
      this.$store.commit("changePage", data);
    },
  },
  computed: {
    textColor() {
      return '#fff';
    },
    backgroudColor() {
      return '#641e16';
    },
    activeTextColor() {
      return 'palevioletred';
    },
  },
  // mounted: {
  //   一个后端接口请求
  //   请求后存入menu
  // }
};
</script>