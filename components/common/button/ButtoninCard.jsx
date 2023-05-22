import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONT, SIZES } from "../../../constants";

export default function ButtoninCard({ text, handlePress, isGreen }) {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        backgroundColor: isGreen ? COLORS.primary : COLORS.white,
        paddingHorizontal: 24,
        paddingVertical: 6,
        borderRadius: 8,
        alignSelf: "flex-start",
      }}
    >
      <Text
        style={{
          fontFamily: FONT.regular,
          color: isGreen? COLORS.white : COLORS.primary,
          fontSize: SIZES.small,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}
