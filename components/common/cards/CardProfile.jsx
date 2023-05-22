import { View, Text, Image, StyleSheet } from "react-native";

import { images, COLORS, FONT, SIZES } from "../../../constants";

export default function CardProfile({ name }) {
  return (
    <View style={styles.cardContainer}>
      <View>
        <Image source={images.amonDefault} style={{ width: 56, height: 56 }} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.greetings}>Selamat datang kembali,</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary4,
    borderWidth: 3,
    borderRadius: 24,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textContainer: {
    marginLeft: 8,
  },
  greetings: {
    fontFamily: FONT.regular,
    color: COLORS.neutral2,
    fontSize: SIZES.xSmall,
  },
  name: {
    fontFamily: FONT.semiBold,
    color: COLORS.primary,
    fontSize: SIZES.xLarge,
    lineHeight: 30,
  },
});
