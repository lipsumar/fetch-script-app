<template>
  <div class="code-panel">
    <div v-for="(step, i) in codeSteps" :key="i" class="code-panel__step">
      <code-step
        v-model="step.data"
        :sessionId="sessionId"
        @vars="vars => $emit('vars',vars)"
      ></code-step>
    </div>

    <div class="code-panel__add-step" @click="addStep">
      +
    </div>
  </div>
</template>

<script>
import CodeStep from '@/components/CodeStep/CodeStep'
export default {
  props: ['sessionId'],
  created () {
    this.addStep()
  },
  data () {
    return {
      codeSteps: []
    }
  },
  methods: {
    addStep () {
      this.codeSteps.push({data: {code: ''}})
    }
  },
  components: {
    CodeStep
  }
}
</script>

<style>
.code-panel{
  height:100%;
  background-color:#212121;
  overflow-y: auto;
}
.code-panel__step{
  margin-top:0.8em;
}
.code-panel__step:first-child{
  margin-top: 0;
}
.code-panel__add-step{
  padding: 1rem;
  background-color:#1b1b1b;
  margin:0.5em;
  text-align: center;
  color:slategrey;
  font-size:40px;
  font-weight: bold;
  cursor: pointer;
}
</style>
