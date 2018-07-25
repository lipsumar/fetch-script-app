<template>
  <div class="bracket-box">
    <div class="bracket-box__left"></div>
    <div class="bracket-box__right"></div>
    <slot/>
  </div>
</template>

<style lang="less">
@borderWidth:1px;
@borderColor:rgba(118,205,244, 0.8);

.bracket-box{
  position: relative;
  padding:1em;
}
.bracket-box__left,
.bracket-box__right{
  position: absolute;
  width:1em;
  border-top:@borderWidth solid @borderColor;
  border-bottom:@borderWidth solid @borderColor;
  top:0;
  bottom:0;
}

.bracket-box__left{
  border-left:@borderWidth solid @borderColor;
  left:0;
}
.bracket-box__right{
  border-right:@borderWidth solid @borderColor;
  right:0;
}

.bracket-box__left::after,
.bracket-box__right::after{
  content:'';
  display:block;
  width:@borderWidth*3;
  height:6px;
  background-color: #212121;
  position: absolute;
  top:50%;
  margin-top:-3px;
  border-top:@borderWidth solid @borderColor;
  border-bottom:@borderWidth solid @borderColor;
}

.bracket-box__left::after{
  left:-@borderWidth;
}
.bracket-box__right::after{
  right:-@borderWidth;
}
</style>
