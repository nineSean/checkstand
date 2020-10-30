<template>
  <div id="home-page">
    <head-bar :avatar="avatar"
              :userName="userName"
              :isShowed.sync="isShowedNav"
    >
      {{navItems[pickedIndex].fullName}}
    </head-bar>
    <main>
      <nav-bar :items="navItems"
               :pickedIndex.sync="pickedIndex"/>
      <router-view class="main-content"></router-view>
    </main>
  </div>
</template>

<script>
  import HeadBar from "@comp/head-bar.vue"
  import NavBar from "@comp/nav-bar.vue"

  export default {
    name: "index.vue",
    components: {
      HeadBar,
      NavBar,
    },
    data() {
      return {
        avatar: require('@/assets/logo.png'),
        userName: '张三',
        isShowedNav: true,
        pickedIndex: 0,
        navItems: [
          {
            name: '收银',
            fullName: '快速收银',
            iconName: 'rmb',
          },
          {
            name: '订桌',
            fullName: '餐桌预定',
            iconName: 'table',
          },
          {
            name: '钱柜',
            fullName: '开/关钱柜',
            iconName: 'drawer',
          },
          {
            name: '充值',
            fullName: '快速充值',
            iconName: 'recharge',
          },
        ],
      }
    },
    created() {
      this.$request.get('/users', {
        params: {
          // x: 'x'
        },
      }).then(data => {
        console.log('index page data', data)
      })
    }
  }
</script>

<style scoped
       lang="scss">
  #home-page {
    width: 100vw;
    font-size: $fontSize;
    font-family: Microsoft YaHei, Arial, Helvetica, sans-serif;
    /*background-color: coral;*/
  }

  main {
    display: flex;
    height: calc(100vh - 1px - #{px(70)});
  }

  .main-content {
    flex-grow: 1;
  }
</style>