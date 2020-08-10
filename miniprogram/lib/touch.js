export function handleTouchEvent(event, upCallback, rightCallback, downCallback, leftCallback) {
  var startX;
  var startY;
  switch (event.type){
      case "touchstart":
          startX = event.touches[0].pageX;
          startY = event.touches[0].pageY;
          break;
      case "touchend":
          var spanX = event.changedTouches[0].pageX - startX;
          var spanY = event.changedTouches[0].pageY - startY;

          console.log(spanX)

          if(Math.abs(spanX) > Math.abs(spanY)){      //认定为水平方向滑动
              if(spanX > 30){         //向右
                  if(rightCallback)
                      rightCallback();
              } else if(spanX < -30){ //向左
                  if(leftCallback)
                      leftCallback();
              }
          } else {                                    //认定为垂直方向滑动
              if(spanY > 30){         //向下
                  if(downCallback)
                      downCallback();
              } else if (spanY < -30) {//向上
                  if(upCallback)
                      upCallback();
              }
          }

          break;
      case "touchmove":
          //阻止默认行为
          // event.preventDefault();
          // 
          break;
  }
}