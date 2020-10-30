<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="`#icon${type}`"></use>
  </svg>
</template>

<script>
  export default {
    name: "Icon",
    props: {
      type: {
        required: true,
        type: String,
        validator: function (value) {
          // The value must match one of these strings
          return ['minus', 'home', 'emptybox', 'plus', 'nav', 'recharge', 'rmb', 'delete', 'table', 'drawer',].indexOf(value) !== -1
        }
      },
    },
  }
</script>

<style scoped lang="scss">
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>