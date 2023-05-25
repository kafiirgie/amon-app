import { View, Text, Image, StyleSheet } from "react-native";

import { images, FONTS, COLORS, SIZES } from "../../../constants";

export default function CardBadge({ images, name, point }) {
  return (
    <View style={styles.container}>
      <Image source={images} style={{ width: 180, height: 180 }} />
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{point} poin</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.small,
    color: COLORS.neutral,
  },
});
