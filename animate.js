function aniamte(dom , option , num , callback) {
  var num = num || 10;

  clearInterval(dom.timer);

  dom.timer =setInterval( function() {
    var bool = true;

    for(var k in option) {
      var target = parseInt(option[k]);
      var current = parseInt(getComputedStyle(dom,null)[k]);

      // 定义步长
      var speed = (target - current) / num;
      // 设置步长 当步长大于0向上取整，当步长小于0，向下取整。
      speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

      // 如果当前属性的值不等于目标的值
      if(current != target) {
        bool = false;
      }

      // 设置元素的属性
      dom.style[k] = current + speed + "px";
    }

    if(bool) {
      clearInterval(dom.timer);
      if(callback) {
        callback();
      }
    }
  },50)
}