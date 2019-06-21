<template>
  <div class="vars-panel">
    <tree-view :object="vars"></tree-view>
  </div>
</template>

<script>
import TreeView from './TreeView/TreeView'
export default {
  props: ['vars'],
  created () {
    this.global = {
      oss: 117,
      budapest: 'cologne',
      EU: {
        be: 1,
        fr: 2,
        foo: 'bar',
        deep: {
          down: {
            we: ['go', 'hello']
          }
        }
      },
      still: 'here',
      list: [
        'hi',
        {foo: 'bar'}
      ]
    }
    window.foo = this.global
  },
  data () {
    return {
      global: {a: 'fe'}
    }
  },
  components: {
    TreeView
  }
}
</script>

<style>
.vars-panel{
  height:100%;
  background-color: #303030;
  color:white;
  padding: 0.6em 1em;
  overflow-y: auto;
}
</style>
