import { View, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { images, COLORS, FONT, SIZES } from "../../../constants";

export default function CardAddChildren({ handlePress }) {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.cardContainer}>
      <View style={styles.circle}>
        <View style={styles.rectH}></View>
        <View style={styles.rectV}></View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary4,
    borderWidth: 3,
    padding: 16,
    margin: 8,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    width: 164,
    height: 208,
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary4,
  },
  rectH: {
    width: 40,
    height: 6,
    backgroundColor: COLORS.white,
  },
  rectV: {
    width: 6,
    height: 40,
    backgroundColor: COLORS.white,
    position: "absolute",
  },
});
