<template>
  <div class="text-scroller">
    <div v-for="(line,i) in displayedLines" :key="i">{{line}}</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  created () {
    axios.get('/static/log.txt').then(resp => {
      this.lines = resp.data.split('\n')
      this.start()
    })
  },
  data () {
    return {
      lines: [],
      startIndex: 0,
      endIndex: 1
    }
  },
  computed: {
    displayedLines () {
      return this.lines.slice(this.startIndex, this.endIndex)
    }
  },
  methods: {
    start () {
      this.tick()
    },
    tick () {
      if (this.endIndex + 1 >= this.lines.length) {
        this.startIndex = 0
        this.endIndex = 1
      } else {
        this.endIndex++
      }

      const delta = this.endIndex - this.startIndex
      if (delta > 10) {
        this.startIndex++
      }

      setTimeout(this.tick.bind(this), 200 + Math.random() * 300)
    }
  }
}
</script>

<style>
.text-scroller{
  word-wrap: break-word;
}
</style>
