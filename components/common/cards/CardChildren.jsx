import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { images, COLORS, FONTS, SIZES } from "../../../constants";

export default function CardChildren({ id, name, handlePress }) {
  const onPress = () => {
    handlePress(id);
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image source={images.amonDefault} style={{ width: 90, height: 90 }} />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
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
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF9696",
  },
  nameContainer: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 12,
  },
  name: {
    fontFamily: FONTS.regular,
    color: COLORS.white,
    fontSize: SIZES.medium,
  },
});
