<template>
  <div>
    <h1><span>Fetch script UI</span></h1>

    <div class="layout-center">
      <div>
        <div class="outer-box">

          <div>
            <box-header title="Authentication"></box-header>

            <div class="window-row">
              <div class="window-block window-block--padded window-block--bg window-block--center">
                <div class="corner corner--full corner--top-right"></div>
                <div class="corner corner--full corner--top-left"></div>
                <div class="corner corner--full corner--bottom-left"></div>
                <div class="corner corner--full corner--bottom-right"></div>

                <div class="field field--centered" style="padding-bottom:2em">
                  <label for="">Token</label>
                  <input type="text" v-model="token" @keyup.enter="submit">
                </div>

              </div>

              <div class="window-block window-block--padded window-block--cut" style="font-size:8px;color:rgba(118,205,244, 0.6);">
                <div style="height:100%;overflow:hidden">
                  <text-scroller></text-scroller>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="screen-right" style="padding-top:40px">
      <div class="window-block window-block--bg window-block--no-border window-block--padded" style="width:15vw;height:100%">
        <div class="window-block window-block--bg window-block--no-border window-block--padded">
          <div class="corner corner--border corner--top-right"></div>
          <div class="corner corner--border corner--top-left"></div>
          <div class="corner corner--border corner--bottom-left"></div>
          <div class="corner corner--border corner--bottom-right"></div>
          <div>Spline reticulation</div>
          <graph :data="Array(40).fill(0).map(i => Math.random()*30)"></graph>
        </div>
      </div>
    </div>
    <div class="corner corner--border corner--bottom-right" style="bottom:10px;right:10px"></div>
    <div class="corner corner--border corner--bottom-left" style="bottom:10px;left:10px"></div>
  </div>

</template>

<script>
import TextScroller from '@/components/TextScroller'
import BoxHeader from '@/components/BoxHeader'
import BracketBox from '@/components/BracketBox'
import Graph from '@/components/graph'
import tokenManager from '@/api/tokenManager'
export default {
  data () {
    return {
      token: ''
    }
  },
  methods: {
    submit () {
      tokenManager.setToken(this.token)
      this.$router.push('/')
    }
  },
  components: {
    TextScroller,
    BoxHeader,
    BracketBox,
    Graph
  }
}
</script>

<style>
h1{
  margin:20px 0 40px;
  position: relative;
  font-size:25px;
  margin:20px;
}
h1::before{
  content:'';
  position: absolute;
  display:block;
  left:20%;
  right:0;
  bottom:0.25em;
  border-top:5px dashed rgba(118,205,244, 0.8);
  transform: skew(-22deg);
}

.screen-right{
  position: absolute;
  bottom:1em;
  right:1em;
  top:1em;
}

.grid{
  display:grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 2fr;
}

.layout-center{
  display: flex;
  justify-content: center;
  align-items: center;
  height:80vh;
}
.outer-box{
  width:600px;
}
.box-header{
  display: flex;
  padding-bottom:30px;
  font-family: Aldrich, sans-serif;
}
.box-header__main{
  text-transform: uppercase;
  border-top:2px solid currentColor;
  border-left:10px solid currentColor;
  border-top-left-radius: 17px;
  padding-left:1em;
  padding-top:6px;
  font-weight: 600;
  position: relative;
  height: 1.3em;
  width:180px;
}

.box-header__main-bottom{
  border-bottom:2px dashed currentColor;
  border-right:2px dashed currentColor;
  position:absolute;
  top:4px;
  width: 93%;
  transform: skew(-22deg);
  height:2em;
}
.box-header__main-bottom-text{
  position:absolute;
  width: 100%;
  transform: skew(-12deg);
}

.box-header__middle{
  border-top:2px dashed currentColor;
  height: 2px;
  flex:1;
  transform: skew(-22deg)
}

.box-header__end{
  border-top:2px solid currentColor;
  height: 2px;
  flex:1;
  display: flex;
  justify-content: flex-end;
  position: relative;
}
.box-header__end .corner{
  top:2px !important;
  right:0 !important;
}

.window-row{
  display:grid;
  grid-gap:10px;
  grid-template-columns: 2fr 1fr;
  height:300px;
}

.window-block{
  border:1px solid rgba(118,205,244, 0.4);
  position: relative;
  min-width: 0;
  min-height: 0;
}
.window-block--center{
  display:flex;
  justify-content: center;
  align-items: center;
}
.window-block--padded{
  padding:10px;
}
.window-block--bg{
  background-color:rgba(118,205,244, 0.05);
}
.window-block--no-border{
  border-color:transparent;
}
.window-block--cut::after{
  position: absolute;
  top:-10px;
  right:-10px;
  content:'';
  display:block;
  border-bottom:1px solid rgba(118,205,244, 0.4);
  width:20px;
  height:20px;
  background-color: #212121;
  transform: rotate(45deg);
}
.corner{
  width:8px;
  height:8px;
  position: absolute;
}
.corner--flat{
  height:4px;
}
.corner--full{
  background-color: rgba(118,205,244, 1);
}
.corner--top-right{
  top:-1px;
  right:-1px;
}
.corner--top-right.corner--border{
  border-top:1px solid currentColor;
  border-right:1px solid currentColor;
}
.corner--top-left{
  top:-1px;
  left:-1px;
}
.corner--top-left.corner--border{
  border-top:1px solid currentColor;
  border-left:1px solid currentColor;
}
.corner--bottom-right{
  bottom:-1px;
  right:-1px;
}
.corner--bottom-right.corner--border{
  border-bottom:1px solid currentColor;
  border-right:1px solid currentColor;
}
.corner--bottom-left{
  bottom:-1px;
  left:-1px;
}
.corner--bottom-left.corner--border{
  border-bottom:1px solid currentColor;
  border-left:1px solid currentColor;
}

.field--centered, .field--centered input{
  text-align: center;
}

label{
  display:block;
  text-transform: uppercase;
}
input{
  background-color: transparent;
  border:none;
  border-bottom:1px solid currentColor;
  padding:5px;
  outline:none;
}

</style>
