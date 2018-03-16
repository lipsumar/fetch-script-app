<template>
  <div class="code-step">
    <textarea class="code-step__code"
      v-model="code"
      @keyup.alt.enter="submit"
      autocomplete="off"
      autocorrect="off"
      autocapitalize="off"
      spellcheck="false"
      :rows="code.split('\n').length+1"
    ></textarea>
    <loader v-if="loading"></loader>
    <div class="code-step__result" v-if="out && out.length > 0">
      <div v-for="(o,i) in out" :key="i">

        <div class="code-step-result">
          <div class="code-step-result__arrow">
            &gt;
          </div>
          <div class="code-step-result__content">
            <div v-if="typeof o === 'string'"> <!-- nl2br -->
              <div v-for="(oo,ii) in o.split('\n')" :key="ii">{{oo}}</div>
            </div>
            <template v-else>{{o}}</template>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fetchScriptApi from '@/api/fetchScriptApi'
export default {
  props: ['value', 'sessionId'],
  data () {
    return {
      loading: false,
      out: null
    }
  },
  computed: {
    code: {
      get () {
        return this.value.code
      },
      set (code) {
        const newStep = Object.assign(this.value, {code})
        this.$emit('input', newStep)
      }
    }
  },
  methods: {
    submit () {
      this.loading = true
      fetchScriptApi.execute(this.code, this.sessionId)
        .then(resp => {
          this.loading = false
          this.out = resp.data.out
          this.$emit('vars', resp.data.vars)
        })
        .catch(err => {
          this.loading = false
          throw err
        })
    }
  }
}
</script>

<style>
.code-step, .code-step textarea{
  font-family: 'Roboto Mono',"SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;
}
.code-step__code{
  padding: 0.8em;
  background-color: #131313;
  color:slategrey;
  font-weight: 600;
  font-size:1.1em;
  width:100%;
  resize:none;
  border:none;
  outline:none;
  display: block
}
.code-step__result{
  padding:0.8em;
  color:slategrey;
}

.code-step-result{
  display: flex;
}
.code-step-result__arrow{
  width:25px;
}
</style>
