import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONT, SIZES } from "../../../constants";

export default function Button({ text, handlePress, isLarge }) {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        backgroundColor: COLORS.primary,
        paddingHorizontal: 40,
        paddingVertical: 12,
        borderRadius: 16,
      }}
    >
      <Text
        style={{
          fontFamily: FONT.regular,
          color: COLORS.white,
          fontSize: isLarge ? SIZES.large : SIZES.medium,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}
