
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/migration/use_v2.0.x_cc.Toggle_event');
require('./assets/script/Game');
require('./assets/script/Player');
require('./assets/script/Star');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '137ceS79M5FMqTmsIQhPUAB', 'Player');
// script/Player.js

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
    // foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
    //主角跳跃高度
    jumpHeight: 0,
    jumpDuration: 0,
    maxMoveSpeed: 0,
    accel: 0
  },
  setJumpAction: function setJumpAction() {
    //上升
    var jumpUp = cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight)).easing(cc.easeCubicActionOut());
    var jumpDown = cc.moveBy(this.jumpDuration, cc.v2(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());
    return cc.repeatForever(cc.sequence(jumpUp, jumpDown));
  },
  onKeyDown: function onKeyDown(event) {
    // set a flag when key pressed
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = true;
        break;

      case cc.macro.KEY.d:
        this.accRight = true;
        break;
    }
  },
  onKeyUp: function onKeyUp(event) {
    // unset a flag when key released
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = false;
        break;

      case cc.macro.KEY.d:
        this.accRight = false;
        break;
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.jumpAction = this.setJumpAction();
    this.node.runAction(this.jumpAction); // 加速度方向开关

    this.accLeft = false;
    this.accRight = false; // 主角当前水平方向速度

    this.xSpeed = 0; // 初始化键盘输入监听

    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  onDestroy: function onDestroy() {
    // 取消键盘输入监听
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  start: function start() {},
  update: function update(dt) {
    if (this.accLeft) {
      this.xSpeed -= this.accel * dt;
    } else if (this.accRight) {
      this.xSpeed += this.accel * dt;
    } // 限制主角的速度不能超过最大值


    if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
      // if speed reach limit, use max speed with current direction
      this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
    } // 根据当前速度更新主角的位置


    this.node.x += this.xSpeed * dt;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxQbGF5ZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJqdW1wSGVpZ2h0IiwianVtcER1cmF0aW9uIiwibWF4TW92ZVNwZWVkIiwiYWNjZWwiLCJzZXRKdW1wQWN0aW9uIiwianVtcFVwIiwibW92ZUJ5IiwidjIiLCJlYXNpbmciLCJlYXNlQ3ViaWNBY3Rpb25PdXQiLCJqdW1wRG93biIsImVhc2VDdWJpY0FjdGlvbkluIiwicmVwZWF0Rm9yZXZlciIsInNlcXVlbmNlIiwib25LZXlEb3duIiwiZXZlbnQiLCJrZXlDb2RlIiwibWFjcm8iLCJLRVkiLCJhIiwiYWNjTGVmdCIsImQiLCJhY2NSaWdodCIsIm9uS2V5VXAiLCJvbkxvYWQiLCJqdW1wQWN0aW9uIiwibm9kZSIsInJ1bkFjdGlvbiIsInhTcGVlZCIsInN5c3RlbUV2ZW50Iiwib24iLCJTeXN0ZW1FdmVudCIsIkV2ZW50VHlwZSIsIktFWV9ET1dOIiwiS0VZX1VQIiwib25EZXN0cm95Iiwib2ZmIiwic3RhcnQiLCJ1cGRhdGUiLCJkdCIsIk1hdGgiLCJhYnMiLCJ4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQyxJQUFBQSxVQUFVLEVBQUMsQ0FqQkg7QUFrQlJDLElBQUFBLFlBQVksRUFBQyxDQWxCTDtBQW1CUkMsSUFBQUEsWUFBWSxFQUFDLENBbkJMO0FBb0JSQyxJQUFBQSxLQUFLLEVBQUM7QUFwQkUsR0FIUDtBQXlCTEMsRUFBQUEsYUFBYSxFQUFDLHlCQUFVO0FB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a0I7QUFDZCxXQUFLUSxNQUFMLElBQWUsS0FBS3pCLEtBQUwsR0FBYW9DLEVBQTVCO0FBQ0gsS0FGRCxNQUVPLElBQUksS0FBS2pCLFFBQVQsRUFBbUI7QUFDdEIsV0FBS00sTUFBTCxJQUFlLEtBQUt6QixLQUFMLEdBQWFvQyxFQUE1QjtBQUNILEtBTE8sQ0FNUjs7O0FBQ0EsUUFBS0MsSUFBSSxDQUFDQyxHQUFMLENBQVMsS0FBS2IsTUFBZCxJQUF3QixLQUFLMUIsWUFBbEMsRUFBaUQ7QUFDN0M7QUFDQSxXQUFLMEIsTUFBTCxHQUFjLEtBQUsxQixZQUFMLEdBQW9CLEtBQUswQixNQUF6QixHQUFrQ1ksSUFBSSxDQUFDQyxHQUFMLENBQVMsS0FBS2IsTUFBZCxDQUFoRDtBQUNILEtBVk8sQ0FZUjs7O0FBQ0EsU0FBS0YsSUFBTCxDQUFVZ0IsQ0FBVixJQUFlLEtBQUtkLE1BQUwsR0FBY1csRUFBN0I7QUFDSDtBQWhHSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gYmFyOiB7XG4gICAgICAgIC8vICAgICBnZXQgKCkge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XG4gICAgICAgIC8vICAgICB9LFxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9LFxuICAgICAgICAvL+S4u+inkui3s+i3g+mrmOW6plxuICAgICAgICBqdW1wSGVpZ2h0OjAsXG4gICAgICAgIGp1bXBEdXJhdGlvbjowLFxuICAgICAgICBtYXhNb3ZlU3BlZWQ6MCxcbiAgICAgICAgYWNjZWw6MCxcbiAgICB9LFxuICAgIHNldEp1bXBBY3Rpb246ZnVuY3Rpb24oKXtcbiAgICAgICAgLy/kuIrljYdcbiAgICAgICAgdmFyIGp1bXBVcCA9IGNjLm1vdmVCeSh0aGlzLmp1bXBEdXJhdGlvbixjYy52MigwLHRoaXMuanVtcEhlaWdodCkpLmVhc2luZyhjYy5lYXNlQ3ViaWNBY3Rpb25PdXQoKSk7XG4gICAgICAgIHZhciBqdW1wRG93biA9IGNjLm1vdmVCeSh0aGlzLmp1bXBEdXJhdGlvbixjYy52MigwLC10aGlzLmp1bXBIZWlnaHQpKS5lYXNpbmcoY2MuZWFzZUN1YmljQWN0aW9uSW4oKSk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gY2MucmVwZWF0Rm9yZXZlcihjYy5zZXF1ZW5jZShqdW1wVXAsanVtcERvd24pKTtcbiAgICB9LFxuICAgIG9uS2V5RG93biAoZXZlbnQpIHtcbiAgICAgICAgLy8gc2V0IGEgZmxhZyB3aGVuIGtleSBwcmVzc2VkXG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxuICAgICAgICAgICAgICAgIHRoaXMuYWNjTGVmdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxuICAgICAgICAgICAgICAgIHRoaXMuYWNjUmlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uS2V5VXAgKGV2ZW50KSB7XG4gICAgICAgIC8vIHVuc2V0IGEgZmxhZyB3aGVuIGtleSByZWxlYXNlZFxuICAgICAgICBzd2l0Y2goZXZlbnQua2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcbiAgICAgICAgICAgICAgICB0aGlzLmFjY0xlZnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XG4gICAgICAgICAgICAgICAgdGhpcy5hY2NSaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIHRoaXMuanVtcEFjdGlvbiA9IHRoaXMuc2V0SnVtcEFjdGlvbigpO1xuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKHRoaXMuanVtcEFjdGlvbik7XG5cbiAgICAgICAgLy8g5Yqg6YCf5bqm5pa55ZCR5byA5YWzXG4gICAgICAgIHRoaXMuYWNjTGVmdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFjY1JpZ2h0ID0gZmFsc2U7XG4gICAgICAgIC8vIOS4u+inkuW9k+WJjeawtOW5s+aWueWQkemAn+W6plxuICAgICAgICB0aGlzLnhTcGVlZCA9IDA7XG5cbiAgICAgICAgLy8g5Yid5aeL5YyW6ZSu55uY6L6T5YWl55uR5ZCsXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpOyBcbiAgICB9LFxuXG4gICAgb25EZXN0cm95ICgpIHtcbiAgICAgICAgLy8g5Y+W5raI6ZSu55uY6L6T5YWl55uR5ZCsXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH0sXG5cbiAgICB1cGRhdGUgKGR0KSB7XG4gICAgICAgIGlmICh0aGlzLmFjY0xlZnQpIHtcbiAgICAgICAgICAgIHRoaXMueFNwZWVkIC09IHRoaXMuYWNjZWwgKiBkdDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFjY1JpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLnhTcGVlZCArPSB0aGlzLmFjY2VsICogZHQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8g6ZmQ5Yi25Li76KeS55qE6YCf5bqm5LiN6IO96LaF6L+H5pyA5aSn5YC8XG4gICAgICAgIGlmICggTWF0aC5hYnModGhpcy54U3BlZWQpID4gdGhpcy5tYXhNb3ZlU3BlZWQgKSB7XG4gICAgICAgICAgICAvLyBpZiBzcGVlZCByZWFjaCBsaW1pdCwgdXNlIG1heCBzcGVlZCB3aXRoIGN1cnJlbnQgZGlyZWN0aW9uXG4gICAgICAgICAgICB0aGlzLnhTcGVlZCA9IHRoaXMubWF4TW92ZVNwZWVkICogdGhpcy54U3BlZWQgLyBNYXRoLmFicyh0aGlzLnhTcGVlZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmoLnmja7lvZPliY3pgJ/luqbmm7TmlrDkuLvop5LnmoTkvY3nva5cbiAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy54U3BlZWQgKiBkdDtcbiAgICB9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b411fr0Y9ZF963VcgXxGp/i', 'Game');
// script/Game.js

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
    // 这个属性引用了星星预制资源
    starPrefab: {
      "default": null,
      type: cc.Prefab
    },
    // 星星产生后消失时间的随机范围
    maxStarDuration: 0,
    minStarDuration: 0,
    // 地面节点，用于确定星星生成的高度
    ground: {
      "default": null,
      type: cc.Node
    },
    // player 节点，用于获取主角弹跳的高度，和控制主角行动开关
    player: {
      "default": null,
      type: cc.Node
    },
    // score label 的引用
    scoreDisplay: {
      "default": null,
      type: cc.Label
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    // 获取地平面的 y 轴坐标
    this.groundY = this.ground.y + this.ground.height / 2; // 生成一个新的星星

    this.spawnNewStar();
    this.score = 0;
  },
  spawnNewStar: function spawnNewStar() {
    // 使用给定的模板在场景中生成一个新节点
    var newStar = cc.instantiate(this.starPrefab); // 将新增的节点添加到 Canvas 节点下面

    this.node.addChild(newStar); // 为星星设置一个随机位置

    newStar.setPosition(this.getNewStarPosition()); // 在星星组件上暂存 Game 对象的引用

    newStar.getComponent('Star').game = this;
  },
  getNewStarPosition: function getNewStarPosition() {
    var randX = 0; // 根据地平面位置和主角跳跃高度，随机得到一个星星的 y 坐标

    var randY = this.groundY + Math.random() * this.player.getComponent('Player').jumpHeight + 50; // 根据屏幕宽度，随机得到一个星星 x 坐标

    var maxX = this.node.width / 2;
    randX = (Math.random() - 0.5) * 2 * maxX; // 返回星星坐标

    return cc.v2(randX, randY);
  },
  start: function start() {},
  update: function update(dt) {},
  gainScore: function gainScore() {
    this.score += 1; // 更新 scoreDisplay Label 的文字

    this.scoreDisplay.string = 'Score: ' + this.score;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhclByZWZhYiIsInR5cGUiLCJQcmVmYWIiLCJtYXhTdGFyRHVyYXRpb24iLCJtaW5TdGFyRHVyYXRpb24iLCJncm91bmQiLCJOb2RlIiwicGxheWVyIiwic2NvcmVEaXNwbGF5IiwiTGFiZWwiLCJvbkxvYWQiLCJncm91bmRZIiwieSIsImhlaWdodCIsInNwYXduTmV3U3RhciIsInNjb3JlIiwibmV3U3RhciIsImluc3RhbnRpYXRlIiwibm9kZSIsImFkZENoaWxkIiwic2V0UG9zaXRpb24iLCJnZXROZXdTdGFyUG9zaXRpb24iLCJnZXRDb21wb25lbnQiLCJnYW1lIiwicmFuZFgiLCJyYW5kWSIsIk1hdGgiLCJyYW5kb20iLCJqdW1wSGVpZ2h0IiwibWF4WCIsIndpZHRoIiwidjIiLCJzdGFydCIsInVwZGF0ZSIsImR0IiwiZ2FpblNjb3JlIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDWDtBQUNHQyxJQUFBQSxVQUFVLEVBQUU7QUFDUixpQkFBUyxJQUREO0FBRVJDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZELEtBRko7QUFNUjtBQUNBQyxJQUFBQSxlQUFlLEVBQUUsQ0FQVDtBQVFSQyxJQUFBQSxlQUFlLEVBQUUsQ0FSVDtBQVNSO0FBQ0FDLElBQUFBLE1BQU0sRUFBRTtBQUNKLGlCQUFTLElBREw7QUFFSkosTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNVO0FBRkwsS0FWQTtBQWNSO0FBQ0FDLElBQUFBLE1BQU0sRUFBRTtBQUNKLGlCQUFTLElBREw7QUFFSk4sTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNVO0FBRkwsS0FmQTtBQW9CTjtBQUNGRSxJQUFBQSxZQUFZLEVBQUU7QUFDZCxpQkFBUyxJQURLO0FBRWRQLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDYTtBQUZLO0FBckJOLEdBSFA7QUE4Qkw7QUFFQUMsRUFBQUEsTUFoQ0ssb0JBZ0NLO0FBRU47QUFDQSxTQUFLQyxPQUFMLEdBQWUsS0FBS04sTUFBTCxDQUFZTyxDQUFaLEdBQWdCLEtBQUtQLE1BQUwsQ0FBWVEsTUFBWixHQUFtQixDQUFsRCxDQUhNLENBSU47O0FBQ0EsU0FBS0MsWUFBTDtBQUVBLFNBQUtDLEtBQUwsR0FBYSxDQUFiO0FBRUgsR0F6Q0k7QUEyQ0xELEVBQUFBLFlBQVksRUFBRSx3QkFBVztBQUNyQjtBQUNBLFFBQUlFLE9BQU8sR0FBR3BCLEVBQUUsQ0FBQ3FCLFdBQUgsQ0FBZSxLQUFLakIsVUFBcEIsQ0FBZCxDQUZxQixDQUdyQjs7QUFDQSxTQUFLa0IsSUFBTCxDQUFVQyxRQUFWLENBQW1CSCxPQUFuQixFQUpxQixDQUtyQjs7QUFDQUEsSUFBQUEsT0FBTyxDQUFDSSxXQUFSLENBQW9CLEtBQUtDLGtCQUFMLEVBQXBCLEVBTnFCLENBT3BCOztBQUNBTCxJQUFBQSxPQUFPLENBQUNNLFlBQVIsQ0FBcUIsTUFBckIsRUFBNkJDLElBQTdCLEdBQW9DLElBQXBDO0FBQ0osR0FwREk7QUFzRExGLEVBQUFBLGtCQUFrQixFQUFFLDhCQUFZO0FBQzVCLFFBQUlHLEtBQUssR0FBRyxDQUFaLENBRDRCLENBRTVCOztBQUNBLFFBQUlDLEtBQUssR0FBRyxLQUFLZCxPQUFMLEdBQWVlLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixLQUFLcEIsTUFBTCxDQUFZZSxZQUFaLENBQXlCLFFBQXpCLEVBQW1DTSxVQUFsRSxHQUE4RSxFQUExRixDQUg0QixDQUk1Qjs7QUFDQSxRQUFJQyxJQUFJLEdBQUcsS0FBS1gsSUFBTCxDQUFVWSxLQUFWLEdBQWdCLENBQTNCO0FBQ0FOLElBQUFBLEtBQUssR0FBRyxDQUFDRSxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsR0FBakIsSUFBd0IsQ0FBeEIsR0FBNEJFLElBQXBDLENBTjRCLENBTzVCOztBQUNBLFdBQU9qQyxFQUFFLENBQUNtQyxFQUFILENBQU1QLEtBQU4sRUFBYUMsS0FBYixDQUFQO0FBQ0gsR0EvREk7QUFpRUxPLEVBQUFBLEtBakVLLG1CQWlFSSxDQUVSLENBbkVJO0FBb0VMQyxFQUFBQSxNQXBFSyxrQkFvRUdDLEVBcEVILEVBb0VPLENBRVgsQ0F0RUk7QUF3RUxDLEVBQUFBLFNBQVMsRUFBRSxxQkFBWTtBQUNuQixTQUFLcEIsS0FBTCxJQUFjLENBQWQsQ0FEbUIsQ0FFbkI7O0FBQ0EsU0FBS1AsWUFBTCxDQUFrQjRCLE1BQWxCLEdBQTJCLFlBQVksS0FBS3JCLEtBQTVDO0FBQ0g7QUE1RUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgLy8g6L+Z5Liq5bGe5oCn5byV55So5LqG5pif5pif6aKE5Yi26LWE5rqQXG4gICAgICAgIHN0YXJQcmVmYWI6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcbiAgICAgICAgfSxcbiAgICAgICAgLy8g5pif5pif5Lqn55Sf5ZCO5raI5aSx5pe26Ze055qE6ZqP5py66IyD5Zu0XG4gICAgICAgIG1heFN0YXJEdXJhdGlvbjogMCxcbiAgICAgICAgbWluU3RhckR1cmF0aW9uOiAwLFxuICAgICAgICAvLyDlnLDpnaLoioLngrnvvIznlKjkuo7noa7lrprmmJ/mmJ/nlJ/miJDnmoTpq5jluqZcbiAgICAgICAgZ3JvdW5kOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuICAgICAgICAvLyBwbGF5ZXIg6IqC54K577yM55So5LqO6I635Y+W5Li76KeS5by56Lez55qE6auY5bqm77yM5ZKM5o6n5Yi25Li76KeS6KGM5Yqo5byA5YWzXG4gICAgICAgIHBsYXllcjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfSxcblxuICAgICAgICAgIC8vIHNjb3JlIGxhYmVsIOeahOW8leeUqFxuICAgICAgICBzY29yZURpc3BsYXk6IHtcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcblxuICAgICAgICAvLyDojrflj5blnLDlubPpnaLnmoQgeSDovbTlnZDmoIdcbiAgICAgICAgdGhpcy5ncm91bmRZID0gdGhpcy5ncm91bmQueSArIHRoaXMuZ3JvdW5kLmhlaWdodC8yO1xuICAgICAgICAvLyDnlJ/miJDkuIDkuKrmlrDnmoTmmJ/mmJ9cbiAgICAgICAgdGhpcy5zcGF3bk5ld1N0YXIoKTtcblxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcblxuICAgIH0sXG5cbiAgICBzcGF3bk5ld1N0YXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyDkvb/nlKjnu5nlrprnmoTmqKHmnb/lnKjlnLrmma/kuK3nlJ/miJDkuIDkuKrmlrDoioLngrlcbiAgICAgICAgdmFyIG5ld1N0YXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnN0YXJQcmVmYWIpO1xuICAgICAgICAvLyDlsIbmlrDlop7nmoToioLngrnmt7vliqDliLAgQ2FudmFzIOiKgueCueS4i+mdolxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3U3Rhcik7XG4gICAgICAgIC8vIOS4uuaYn+aYn+iuvue9ruS4gOS4qumaj+acuuS9jee9rlxuICAgICAgICBuZXdTdGFyLnNldFBvc2l0aW9uKHRoaXMuZ2V0TmV3U3RhclBvc2l0aW9uKCkpO1xuICAgICAgICAgLy8g5Zyo5pif5pif57uE5Lu25LiK5pqC5a2YIEdhbWUg5a+56LGh55qE5byV55SoXG4gICAgICAgICBuZXdTdGFyLmdldENvbXBvbmVudCgnU3RhcicpLmdhbWUgPSB0aGlzO1xuICAgIH0sXG5cbiAgICBnZXROZXdTdGFyUG9zaXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJhbmRYID0gMDtcbiAgICAgICAgLy8g5qC55o2u5Zyw5bmz6Z2i5L2N572u5ZKM5Li76KeS6Lez6LeD6auY5bqm77yM6ZqP5py65b6X5Yiw5LiA5Liq5pif5pif55qEIHkg5Z2Q5qCHXG4gICAgICAgIHZhciByYW5kWSA9IHRoaXMuZ3JvdW5kWSArIE1hdGgucmFuZG9tKCkgKiB0aGlzLnBsYXllci5nZXRDb21wb25lbnQoJ1BsYXllcicpLmp1bXBIZWlnaHQgKzUwO1xuICAgICAgICAvLyDmoLnmja7lsY/luZXlrr3luqbvvIzpmo/mnLrlvpfliLDkuIDkuKrmmJ/mmJ8geCDlnZDmoIdcbiAgICAgICAgdmFyIG1heFggPSB0aGlzLm5vZGUud2lkdGgvMjtcbiAgICAgICAgcmFuZFggPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyICogbWF4WDtcbiAgICAgICAgLy8g6L+U5Zue5pif5pif5Z2Q5qCHXG4gICAgICAgIHJldHVybiBjYy52MihyYW5kWCwgcmFuZFkpO1xuICAgIH0sXG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9LFxuICAgIHVwZGF0ZSAoZHQpIHtcbiAgXG4gICAgfSxcblxuICAgIGdhaW5TY29yZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNjb3JlICs9IDE7XG4gICAgICAgIC8vIOabtOaWsCBzY29yZURpc3BsYXkgTGFiZWwg55qE5paH5a2XXG4gICAgICAgIHRoaXMuc2NvcmVEaXNwbGF5LnN0cmluZyA9ICdTY29yZTogJyArIHRoaXMuc2NvcmU7XG4gICAgfSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_v2.0.x_cc.Toggle_event.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a915106lr9ELJz9HgpmraXF', 'use_v2.0.x_cc.Toggle_event');
// migration/use_v2.0.x_cc.Toggle_event.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only compatible with projects prior to v2.1.0.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Toggle in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0 之前版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Toggle，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */
if (cc.Toggle) {
  // Whether the 'toggle' and 'checkEvents' events are fired when 'toggle.check() / toggle.uncheck()' is called in the code
  // 在代码中调用 'toggle.check() / toggle.uncheck()' 时是否触发 'toggle' 与 'checkEvents' 事件
  cc.Toggle._triggerEventInScript_check = true;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbWlncmF0aW9uXFx1c2VfdjIuMC54X2NjLlRvZ2dsZV9ldmVudC5qcyJdLCJuYW1lcyI6WyJjYyIsIlRvZ2dsZSIsIl90cmlnZ2VyRXZlbnRJblNjcmlwdF9jaGVjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUFZQSxJQUFJQSxFQUFFLENBQUNDLE1BQVAsRUFBZTtBQUNYO0FBQ0E7QUFDQUQsRUFBQUEsRUFBRSxDQUFDQyxNQUFILENBQVVDLDJCQUFWLEdBQXdDLElBQXhDO0FBQ0giLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIHNjcmlwdCBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBDb2NvcyBDcmVhdG9yIGFuZCBpcyBvbmx5IGNvbXBhdGlibGUgd2l0aCBwcm9qZWN0cyBwcmlvciB0byB2Mi4xLjAuXG4gKiBZb3UgZG8gbm90IG5lZWQgdG8gbWFudWFsbHkgYWRkIHRoaXMgc2NyaXB0IGluIGFueSBvdGhlciBwcm9qZWN0LlxuICogSWYgeW91IGRvbid0IHVzZSBjYy5Ub2dnbGUgaW4geW91ciBwcm9qZWN0LCB5b3UgY2FuIGRlbGV0ZSB0aGlzIHNjcmlwdCBkaXJlY3RseS5cbiAqIElmIHlvdXIgcHJvamVjdCBpcyBob3N0ZWQgaW4gVkNTIHN1Y2ggYXMgZ2l0LCBzdWJtaXQgdGhpcyBzY3JpcHQgdG9nZXRoZXIuXG4gKlxuICog5q2k6ISa5pys55SxIENvY29zIENyZWF0b3Ig6Ieq5Yqo55Sf5oiQ77yM5LuF55So5LqO5YW85a65IHYyLjEuMCDkuYvliY3niYjmnKznmoTlt6XnqIvvvIxcbiAqIOS9oOaXoOmcgOWcqOS7u+S9leWFtuWug+mhueebruS4reaJi+WKqOa3u+WKoOatpOiEmuacrOOAglxuICog5aaC5p6c5L2g55qE6aG555uu5Lit5rKh55So5YiwIFRvZ2dsZe+8jOWPr+ebtOaOpeWIoOmZpOivpeiEmuacrOOAglxuICog5aaC5p6c5L2g55qE6aG555uu5pyJ5omY566h5LqOIGdpdCDnrYnniYjmnKzlupPvvIzor7flsIbmraTohJrmnKzkuIDlubbkuIrkvKDjgIJcbiAqL1xuXG5pZiAoY2MuVG9nZ2xlKSB7XG4gICAgLy8gV2hldGhlciB0aGUgJ3RvZ2dsZScgYW5kICdjaGVja0V2ZW50cycgZXZlbnRzIGFyZSBmaXJlZCB3aGVuICd0b2dnbGUuY2hlY2soKSAvIHRvZ2dsZS51bmNoZWNrKCknIGlzIGNhbGxlZCBpbiB0aGUgY29kZVxuICAgIC8vIOWcqOS7o+eggeS4reiwg+eUqCAndG9nZ2xlLmNoZWNrKCkgLyB0b2dnbGUudW5jaGVjaygpJyDml7bmmK/lkKbop6blj5EgJ3RvZ2dsZScg5LiOICdjaGVja0V2ZW50cycg5LqL5Lu2XG4gICAgY2MuVG9nZ2xlLl90cmlnZ2VyRXZlbnRJblNjcmlwdF9jaGVjayA9IHRydWU7XG59XG4iXX0=
//------QC-SOURCE-SPLIT------
