var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, Fragment } from "react";
import View from "react-native-web/dist/cjs/exports/View";
import Text from "react-native-web/dist/cjs/exports/Text";
import StyleSheet from "react-native-web/dist/cjs/exports/StyleSheet";

import { ArrowLeft, ArrowRight } from "./icons";

import { months, weekdays } from "./dateUtils";

var Arrow = function Arrow(_ref) {
  var symbol = _ref.symbol;
  return React.createElement(
    View,
    { style: styles.arrow },
    React.createElement(
      Text,
      { style: styles.arrowText },
      symbol
    )
  );
};

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          month = _props.month,
          year = _props.year;

      return React.createElement(
        Fragment,
        null,
        React.createElement(
          View,
          { style: styles.header },
          React.createElement(Arrow, { symbol: React.createElement(ArrowLeft, null) }),
          React.createElement(
            View,
            { style: styles.monthYear },
            React.createElement(
              Text,
              { style: styles.month },
              months[month]
            ),
            React.createElement(
              Text,
              null,
              "\xA0"
            ),
            React.createElement(
              Text,
              { style: styles.year },
              year
            )
          ),
          React.createElement(Arrow, { symbol: React.createElement(ArrowRight, null) })
        ),
        React.createElement(
          View,
          { style: styles.week },
          weekdays.map(function (day) {
            return React.createElement(
              View,
              { style: styles.weekday, key: day },
              React.createElement(
                Text,
                { style: styles.weekdayText },
                day
              )
            );
          })
        )
      );
    }
  }]);

  return Header;
}(Component);

var styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 5,
    marginBottom: 5,
    marginTop: 5
  },
  arrow: { flexGrow: 1, alignItems: "center" },
  arrowText: {
    color: "rgb(249,99,2)",
    fontWeight: "bold",
    fontSize: 20
  },
  monthYear: {
    flexDirection: "row",
    flexGrow: 5,
    justifyContent: "center"
  },
  month: { fontWeight: "bold", fontSize: 20 },
  year: { fontSize: 20 },
  week: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 10
  },
  weekday: {
    flexGrow: 1,
    alignItems: "center"
  },
  weekdayText: { fontWeight: "500", color: "rgba(68,68,68,.5)", fontSize: 14 }
});

export default Header;