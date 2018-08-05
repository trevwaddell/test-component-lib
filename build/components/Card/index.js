import React from "react";
import View from "react-native-web/dist/cjs/exports/View";
import StyleSheet from "react-native-web/dist/cjs/exports/StyleSheet";


var Card = function Card(_ref) {
  var children = _ref.children,
      width = _ref.width;
  return React.createElement(
    View,
    { style: [styles.card, width ? { width: width } : null] },
    children
  );
};

var styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 5,
    margin: 5,
    shadowColor: "rgb(0,0,0)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 5
  }
});

export default Card;