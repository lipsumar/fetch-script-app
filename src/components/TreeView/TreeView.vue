<template>
  <div class="tree">
    <tree-item
      v-for="(item, name) in object"
      :key="name"
      :item="item"
      :name="name"
    ></tree-item>
    </div>
</template>

<script>

export default {
  props: {
    object: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      items: []
    }
  },
  created () {
    this.items = this.objectToItems(this.object)
  },
  methods: {
    objectToItems (obj) {
      const items = []
      if (obj instanceof Array) {

      } else {
        Object.keys(obj).forEach(key => {
          items.push({
            key
          })
        })
      }
    }
  }
}
</script>

<style>
.tree{
  margin-left:1em;
  font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace
}
.tree:first-child{
  margin-left:0;
}
</style>
