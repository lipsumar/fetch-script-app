<template>
  <div class="tree-item">
    <template v-if="typeof value==='object'">
      <span v-if="name" class="tree-item__name">{{name}}:</span>
      <span v-if="(value instanceof Array)" @click="close()" class="cursor-pointer">[</span>
      <span v-else-if="typeof value === 'object'" @click="close()" class="cursor-pointer">{</span>
    </template>

    <template v-if="open">
      <div v-if="(value instanceof Array)" class="tree-item__child">
        <template v-for="(item_, i) in value.slice(0, arrayTo)">
          <tree-item
            :key="i"
            :item="item_"
            :name="null"
          ></tree-item>
        </template>
        <div v-if="value.length > arrayTo" @click="arrayTo += 5" class="cursor-pointer">+ {{value.length - arrayTo}}</div>
      </div>
      <div v-else-if="typeof value === 'object'" class="tree-item__child">
        <tree-item
          v-for="(item_, name_) in value"
          :key="name_"
          :item="item_"
          :name="name_"
        ></tree-item>
      </div>
      <span v-else>
        <span v-if="name" class="tree-item__name">{{name}}:</span>
        <span :class="{'tree-item__value--string':typeof value==='string', 'tree-item__value--number':typeof value==='number'}">
          {{value}}
        </span>

      </span>
    </template>
    <span v-else>
      <span v-if="typeof value === 'object'" @click="open = true" class="cursor-pointer">+</span>

      <template v-else>
        <span v-if="name" class="tree-item__name">{{name}}:</span>
        <span :class="{'tree-item__value--string':typeof value==='string', 'tree-item__value--number':typeof value==='number'}">
          {{value}}
        </span>
      </template>

    </span>

    <template v-if="(value instanceof Array)">]</template>
    <template v-else-if="typeof value === 'object'">}</template>
  </div>
</template>

<script>
const arrayToInit = 5
export default {
  props: ['name', 'item'],
  data () {
    return {
      open: false,
      arrayTo: arrayToInit
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
  },
  methods: {
    close () {
      this.open = false
      this.arrayTo = arrayToInit
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

.cursor-pointer{
  cursor:pointer
}
</style>
