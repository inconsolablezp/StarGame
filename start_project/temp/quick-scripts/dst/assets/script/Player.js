
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