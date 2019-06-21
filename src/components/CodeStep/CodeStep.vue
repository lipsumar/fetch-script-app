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
    <div v-if="errors && errors.length">
      <div class="code-step__error" v-for="error in errors" :key="error">{{error}}</div>
    </div>
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
            <template v-else>
              <template v-if="o.rows && o.columns">
                <datatable :data="o.rows" :columns="o.columns.map(c => ({title:c,field:c,sortable:true}))" :total="o.rows.length" :query="{}"></datatable>
              </template>
              <div v-else style="white-space:pre">{{o}}</div>
            </template>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['value', 'sessionId'],
  data () {
    return {
      loading: false,
      out: null,
      errors: []
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
      this.$fetchScriptApi.execute(this.code, this.sessionId)
        .then(resp => {
          this.loading = false
          this.out = resp.data.out
          this.errors = resp.data.errors
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

<style lang="less">
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
  color:#76cdf4;
}
.code-step__error{
  padding:0.8em;
  color:red;
}

.code-step-result{
  display: flex;
}
.code-step-result__arrow{
  width:25px;
  flex-shrink: 0;
}

.code-step-result__content [name="Datatable"]{

  [name="HeaderSettings"]{
    display:none
  }

  table > tbody > tr {
    background-color: transparent
  }
  table > thead > tr > th,
  table > tbody > tr > td{
    border-color:#76cdf4;
    border-width:1px;
  }
  table{
    border:1px solid #76cdf4;
  }
}
</style>
