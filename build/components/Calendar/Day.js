var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import View from "react-native-web/dist/cjs/exports/View";
import Text from "react-native-web/dist/cjs/exports/Text";
import TouchableOpacity from "react-native-web/dist/cjs/exports/TouchableOpacity";
import StyleSheet from "react-native-web/dist/cjs/exports/StyleSheet";

var Day = function (_Component) {
  _inherits(Day, _Component);

  function Day() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Day);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Day.__proto__ || Object.getPrototypeOf(Day)).call.apply(_ref, [this].concat(args))), _this), _this.handlePress = function () {
      return console.log(_this.props.day);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Day, [{
    key: "render",
    value: function render() {
      var day = this.props.day;

      var display = day.getDate();
      var isWeekend = day.getDay() === 0 || day.getDay() === 6;

      return React.createElement(
        View,
        { style: styles.day },
        React.createElement(
          TouchableOpacity,
          { onPress: this.handlePress },
          React.createElement(
            Text,
            {
              style: isWeekend ? styles.weekendTextColor : styles.weekdayTextColor
            },
            display
          )
        )
      );
    }
  }]);

  return Day;
}(Component);

var styles = StyleSheet.create({
  day: {
    width: 100 / 7 + "%",
    alignItems: "center",
    padding: 5,
    height: 45
  },
  weekendTextColor: {
    color: "lightgray"
  },
  weekdayTextColor: {
    color: "rgb(68,68,68)"
  }
});

export default Day;