<template>
  <div class="graph" :style="`height:${tallest}px`">
    <div class="graph__bar"
      v-for="(bar,i) in bars"
      :key="i"
      :style="`height:${bar}px`"></div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  computed: {
    bars () {
      return this.data
    },
    tallest () {
      return Math.max(this.data)
    }
  }
}
</script>

<style>
.graph{
  display:flex;
  align-items: flex-end;
}
.graph__bar{
  flex:1;
  background-color: currentColor;
  border-right:1px solid #212121;
}
</style>
