<template>
  <ul id="nav-bar">
    <li v-for="(item, index) in items"
        :key="item.name"
        class="nav-item"
        :class="{picked: pickedIndex === index}"
        @click="$emit('update:pickedIndex', index)&&goTo(item, index)"
    >
      <icon :type="item.iconName" class="nav-icon"/>
      {{item.name}}
    </li>
  </ul>
</template>

<script>
  import Icon from '@comp/icon.vue'
  export default {
    name: "NavBar",
    components: {
      Icon,
    },
    props: {
      items: {
        required: true,
        type: Array,
      },
      pickedIndex: {
        default: 0,
        type: Number,
      }
    },
    methods: {
      goTo({iconName: name}, index){
        index !== this.pickedIndex && this.$router.push({
          name,
        })
      },
    },
  }
</script>

<style scoped lang="scss">
  #nav-bar{
    width: px(86);
    height: 100%;
    color: #fff;
    background-color: $blue;
    overflow: auto;
  }
  .nav-item{
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    height: px(109);

  }
  .picked{
    background-color: #005ecf;
  }
  .nav-icon{
    font-size: 1.5em;
    margin-bottom: px(6);
  }
</style>