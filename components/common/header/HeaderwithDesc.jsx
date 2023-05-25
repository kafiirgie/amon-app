import { View, Text, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

export default function HeaderwithDesc({ title, desc }) {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
      <Text style={styles.headerDesc}>{desc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "flex-start",
  },
  headerTitle: {
    fontFamily: FONTS.semiBold,
    color: COLORS.neutral,
    fontSize: SIZES.xxLarge,
  },
  headerDesc: {
    fontFamily: FONTS.regular,
    color: COLORS.neutral2,
    fontSize: SIZES.small,
    marginTop: 8,
  },
});
