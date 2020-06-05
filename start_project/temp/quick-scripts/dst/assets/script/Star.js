
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Star.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2be9fujahZOjIZ8+KE+5rQi', 'Star');
// script/Star.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    //星星和主角之间距离小于这个数  就会完成收集
    pickRadius: 0
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  getPlayerDistance: function getPlayerDistance() {
    // 根据 player 节点位置判断距离
    var playerPos = this.game.player.getPosition(); // 根据两点位置计算两点之间距离

    var dist = this.node.position.sub(playerPos).mag();
    console.log("距离 = " + dist);
    return dist;
  },
  onPicked: function onPicked() {
    // 当星星被收集时，调用 Game 脚本中的接口，生成一个新的星星
    this.game.spawnNewStar();
    this.game.gainScore(); // 然后销毁当前星星节点

    this.node.destroy();
  },
  start: function start() {},
  update: function update(dt) {
    // 每帧判断和主角之间的距离是否小于收集距离
    if (this.getPlayerDistance() < this.pickRadius) {
      // 调用收集行为
      this.onPicked();
      return;
    }
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxTdGFyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicGlja1JhZGl1cyIsImdldFBsYXllckRpc3RhbmNlIiwicGxheWVyUG9zIiwiZ2FtZSIsInBsYXllciIsImdldFBvc2l0aW9uIiwiZGlzdCIsIm5vZGUiLCJwb3NpdGlvbiIsInN1YiIsIm1hZyIsImNvbnNvbGUiLCJsb2ciLCJvblBpY2tlZCIsInNwYXduTmV3U3RhciIsImdhaW5TY29yZSIsImRlc3Ryb3kiLCJzdGFydCIsInVwZGF0ZSIsImR0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDSjtBQUNBQyxJQUFBQSxVQUFVLEVBQUM7QUFGUCxHQUhQO0FBUUw7QUFFQTtBQUNBQyxFQUFBQSxpQkFBaUIsRUFBRSw2QkFBWTtBQUMzQjtBQUNBLFFBQUlDLFNBQVMsR0FBRyxLQUFLQyxJQUFMLENBQVVDLE1BQVYsQ0FBaUJDLFdBQWpCLEVBQWhCLENBRjJCLENBRzNCOztBQUNBLFFBQUlDLElBQUksR0FBRyxLQUFLQyxJQUFMLENBQVVDLFFBQVYsQ0FBbUJDLEdBQW5CLENBQXVCUCxTQUF2QixFQUFrQ1EsR0FBbEMsRUFBWDtBQUNBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFVTixJQUF0QjtBQUNBLFdBQU9BLElBQVA7QUFDSCxHQWxCSTtBQW9CTE8sRUFBQUEsUUFBUSxFQUFFLG9CQUFXO0FBQ2pCO0FBQ0EsU0FBS1YsSUFBTCxDQUFVVyxZQUFWO0FBRUEsU0FBS1gsSUFBTCxDQUFVWSxTQUFWLEdBSmlCLENBS2pCOztBQUNBLFNBQUtSLElBQUwsQ0FBVVMsT0FBVjtBQUVILEdBNUJJO0FBOEJMQyxFQUFBQSxLQTlCSyxtQkE4QkksQ0FFUixDQWhDSTtBQWtDTEMsRUFBQUEsTUFsQ0ssa0JBa0NHQyxFQWxDSCxFQWtDTztBQUNQO0FBQ0EsUUFBSSxLQUFLbEIsaUJBQUwsS0FBMkIsS0FBS0QsVUFBcEMsRUFBZ0Q7QUFDN0M7QUFDQSxXQUFLYSxRQUFMO0FBRUE7QUFDSDtBQUNKO0FBMUNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAvL+aYn+aYn+WSjOS4u+inkuS5i+mXtOi3neemu+Wwj+S6jui/meS4quaVsCAg5bCx5Lya5a6M5oiQ5pS26ZuGXG4gICAgICAgICAgICBwaWNrUmFkaXVzOjAsXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9LFxuICAgIGdldFBsYXllckRpc3RhbmNlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIOagueaNriBwbGF5ZXIg6IqC54K55L2N572u5Yik5pat6Led56a7XG4gICAgICAgIHZhciBwbGF5ZXJQb3MgPSB0aGlzLmdhbWUucGxheWVyLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIC8vIOagueaNruS4pOeCueS9jee9ruiuoeeul+S4pOeCueS5i+mXtOi3neemu1xuICAgICAgICB2YXIgZGlzdCA9IHRoaXMubm9kZS5wb3NpdGlvbi5zdWIocGxheWVyUG9zKS5tYWcoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCLot53nprsgPSBcIiArIGRpc3QpO1xuICAgICAgICByZXR1cm4gZGlzdDtcbiAgICB9LFxuXG4gICAgb25QaWNrZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyDlvZPmmJ/mmJ/ooqvmlLbpm4bml7bvvIzosIPnlKggR2FtZSDohJrmnKzkuK3nmoTmjqXlj6PvvIznlJ/miJDkuIDkuKrmlrDnmoTmmJ/mmJ9cbiAgICAgICAgdGhpcy5nYW1lLnNwYXduTmV3U3RhcigpO1xuXG4gICAgICAgIHRoaXMuZ2FtZS5nYWluU2NvcmUoKTtcbiAgICAgICAgLy8g54S25ZCO6ZSA5q+B5b2T5YmN5pif5pif6IqC54K5XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIFxuICAgIH0sXG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9LFxuXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICAgLy8g5q+P5bin5Yik5pat5ZKM5Li76KeS5LmL6Ze055qE6Led56a75piv5ZCm5bCP5LqO5pS26ZuG6Led56a7XG4gICAgICAgICBpZiAodGhpcy5nZXRQbGF5ZXJEaXN0YW5jZSgpIDwgdGhpcy5waWNrUmFkaXVzKSB7XG4gICAgICAgICAgICAvLyDosIPnlKjmlLbpm4booYzkuLpcbiAgICAgICAgICAgIHRoaXMub25QaWNrZWQoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfSxcbn0pO1xuIl19