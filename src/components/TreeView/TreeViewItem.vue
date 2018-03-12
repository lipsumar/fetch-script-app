<template>
  <div class="tree-item">
    <template v-if="typeof value==='object'">
      <span v-if="name" class="tree-item__name">{{name}}:</span>
      <template v-if="value instanceof Array">[</template>
      <template v-else-if="typeof value === 'object'">{</template>
    </template>

    <template v-if="open">
      <div v-if="value instanceof Array" class="tree-item__child">
        <template v-for="(item_, i) in value">
          <tree-item
            :key="i"
            :item="item_"
            :name="null"
            :append="i !== value.length-1 ? ',' : ''"
          ></tree-item>
        </template>
        {{append}}
      </div>
      <div v-else-if="typeof value === 'object'" class="tree-item__child">
        <tree-item
          v-for="(item_, name_) in value"
          :key="name_"
          :item="item_"
          :name="name_"
        ></tree-item>
        {{append}}
      </div>
      <span v-else>
        <span v-if="name" class="tree-item__name">{{name}}:</span>
        <span :class="{'tree-item__value--string':typeof value==='string', 'tree-item__value--number':typeof value==='number'}">
          {{value}}
        </span>
        {{append}}
      </span>
    </template>
    <span v-else>
      <span v-if="typeof value === 'object'" @click="open = !open">+</span>

      <template v-else>
        <span v-if="name" class="tree-item__name">{{name}}:</span>
        <span :class="{'tree-item__value--string':typeof value==='string', 'tree-item__value--number':typeof value==='number'}">
          {{value}}
        </span>
      </template>

    </span>

    <template v-if="value instanceof Array">]</template>
    <template v-else-if="typeof value === 'object'">}</template>

  </div>
</template>

<script>

export default {
  props: ['name', 'item', 'append'],
  data () {
    return {
      open: false
    }
  },
  computed: {
    value () {
      if (typeof this.item === 'string') {
        return `"${this.item}"`
      } else if (typeof this.item === 'number') {
        return this.item
      } else {
        return this.item
      }
    }
  }
}
</script>

<style>
.tree-item__name{
  font-weight: 600;
}
.tree-item__value--string{
  color: #bbd178;
}

.tree-item__value--number{
  color: #e77c5b;
}
.tree-item__child{
  margin-left: 1em;
}

</style>
