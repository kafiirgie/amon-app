import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../../../constants";

export default function ButtoninCard({
  text,
  handlePress,
  isGreen,
  isDisabled,
  isFull,
}) {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        {
          backgroundColor: isGreen
            ? COLORS.primary
            : isDisabled
            ? COLORS.neutral3
            : COLORS.white,
          paddingHorizontal: 16,
          paddingVertical: 6,
          borderRadius: 8,
          alignSelf: "flex-start",
          alignItems: "center",
        },
        isFull && { width: "100%" },
      ]}
    >
      <Text
        style={{
          fontFamily: FONTS.regular,
          color: isGreen
            ? COLORS.white
            : isDisabled
            ? COLORS.primary4
            : COLORS.primary,
          fontSize: SIZES.small,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}
