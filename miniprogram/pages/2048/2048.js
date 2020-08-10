import Core from '../../lib/core.js'
import { handleTouchEvent } from '../../lib/touch.js'
const core = new Core()
core.init()

Page({
  data:{
    state:core.getMap()
  },
  // upCallback, rightCallback, downCallback, leftCallback
  touchMove:function(e){
    handleTouchEvent(e,core.topMoving,core.rightMoving,core.bottomMoving,core.leftMoving)
  }
})