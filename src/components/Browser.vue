<template>
  <div class="browser">
    <div class="browser__main">
      <code-panel @vars="varsUpdated" :sessionId="sessionId"></code-panel>
    </div>
    <div class="browser__sidebar">
      <vars-panel :vars="vars"></vars-panel>
    </div>
  </div>
</template>

<script>
import CodePanel from '@/components/CodePanel'
import VarsPanel from '@/components/VarsPanel'
import fetchScriptApi from '@/api/fetchScriptApi'

export default {
  created () {
    fetchScriptApi.startSession()
      .then(sessionId => {
        this.sessionId = sessionId
      })
  },
  data () {
    return {
      vars: {},
      sessionId: null
    }
  },
  methods: {
    varsUpdated (vars) {
      this.vars = vars
    }
  },
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
