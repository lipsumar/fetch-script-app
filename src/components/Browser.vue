<template>
  <div class="browser">
    <div class="browser__main">
      <code-panel></code-panel>
    </div>
    <div class="browser__sidebar">
      <vars-panel></vars-panel>
    </div>
  </div>
</template>

<script>
import CodePanel from '@/components/CodePanel'
import VarsPanel from '@/components/VarsPanel'

export default {
  components: {
    CodePanel,
    VarsPanel
  }
}
</script>

<style>
.browser{
  display:flex;
  width:100%;
  height:100vh;
}
.browser__main{
  width: 70%;
}
.browser__sidebar{
  width:30%;
}

</style>
