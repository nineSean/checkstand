<template>
  <div id="header-bar">
    <div class="left-area">
      <icon type="nav"
            class="nav-icon"
            @click.native="$emit('update:isShowed', !isShowed)"/>
      <slot></slot>
    </div>
    <div class="right-area">
      <div class="home-button">
        <icon type="home"
              class="home-icon"/>
      </div>
      <div class="divide"></div>
      <img :src="avatar"
           class="avatar"
           alt="avatar">
      <div class="user-name">
        {{userName}}
      </div>
    </div>
  </div>
</template>

<script>
  import Icon from "@comp/icon.vue"

  export default {
    name: 'HeadBar',
    components: {
      Icon,
    },
    props: {
      avatar: String,
      userName: String,
      isShowed: {
        type: Boolean,
        default: true,
      },
    },
    methods: {
      toggle(){

      },
    },
  }
</script>

<style scoped
       lang="scss">
  #header-bar {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: px(70);
    border-bottom: 1px solid $borderColor;
    font-size: 1.5em;
  }

  .left-area, .right-area {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }

  .nav-icon {
    margin: 0 px(42) 0 px(25);
  }

  .home-button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: px(30);
    width: px(48);
    height: px(48);
    border: 1px solid $borderColor;
    border-radius: 50%;
    color: #888;
  }

  .divide {
    width: 0;
    height: px(36);
    border-right: 1px solid $borderColor;
  }

  .avatar {
    margin-left: px(30);
    width: px(48);
    height: px(48);
    border-radius: 50%;
    background-color: #ccc;
  }

  .user-name {
    margin: 0 px(30) 0 px(33);
  }
</style>
