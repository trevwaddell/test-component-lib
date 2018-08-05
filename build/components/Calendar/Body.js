import React, { Fragment } from "react";
import View from "react-native-web/dist/cjs/exports/View";
import StyleSheet from "react-native-web/dist/cjs/exports/StyleSheet";


import Day from "./Day";

import { getCalendarWeeks } from "./dateUtils";

export default (function (_ref) {
  var year = _ref.year,
      month = _ref.month;

  return React.createElement(
    Fragment,
    null,
    getCalendarWeeks(year, month).map(function (week) {
      return React.createElement(
        View,
        { style: styles.week, key: week },
        week.map(function (day) {
          return React.createElement(Day, { key: day, day: day.getDate() });
        })
      );
    })
  );
});

var styles = StyleSheet.create({
  week: {
    flexDirection: "row"
  }
});