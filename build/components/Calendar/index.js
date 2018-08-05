var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import View from "react-native-web/dist/cjs/exports/View";
import StyleSheet from "react-native-web/dist/cjs/exports/StyleSheet";


import Header from "./Header";
import Day from "./Day";
import { getCalendarWeeks } from "./dateUtils";

var Calendar = function (_Component) {
  _inherits(Calendar, _Component);

  function Calendar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Calendar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      year: _this.props.year,
      month: _this.props.month
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Calendar, [{
    key: "render",
    value: function render() {
      var _state = this.state,
          year = _state.year,
          month = _state.month;


      return React.createElement(
        View,
        { style: styles.calendar },
        React.createElement(Header, { month: month, year: year }),
        getCalendarWeeks(year, month).map(function (week) {
          return React.createElement(
            View,
            { style: styles.week, key: week },
            week.map(function (day) {
              return React.createElement(Day, { key: day, day: day });
            })
          );
        })
      );
    }
  }]);

  return Calendar;
}(Component);

var styles = StyleSheet.create({
  calendar: {
    shadowColor: "lightgray",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.8,
    shadowRadius: 5
  },
  week: {
    flexDirection: "row"
  }
});

export default Calendar;