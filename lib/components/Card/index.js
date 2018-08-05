import React from "react";
import { View, StyleSheet } from "react-native";

const Card = ({ children, width }) => (
  <View style={[styles.card, width ? { width } : null]}>{children}</View>
);

const styles = StyleSheet.create({
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
