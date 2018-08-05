import React, { Fragment } from "react";
import { View, StyleSheet } from "react-native";

import Day from "./Day";

import { getCalendarWeeks } from "./dateUtils";

export default ({ year, month }) => {
  return (
    <Fragment>
      {getCalendarWeeks(year, month).map(week => (
        <View style={styles.week} key={week}>
          {week.map(day => <Day key={day} day={day.getDate()} />)}
        </View>
      ))}
    </Fragment>
  );
};

const styles = StyleSheet.create({
  week: {
    flexDirection: "row"
  }
});
