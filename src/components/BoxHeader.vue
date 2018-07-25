<template>
  <div class="box-header">
    <div class="box-header__main">
      <div class="box-header__main-bottom" v-if="title"></div>
      <div class="box-header__main-bottom-text" v-if="title">{{title}}</div>
    </div>
    <div class="box-header__middle"></div>
    <div class="box-header__end">
      <div class="corner corner--flat corner--border corner--top-right"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>
