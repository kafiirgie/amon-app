import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

export default function SubHeader({ title, navigation, handlePressNav }) {
  return (
    <View style={styles.subheadContainer}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.navContainer} onPress={handlePressNav}>
        <Text style={styles.navigation}>{navigation}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  subheadContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  title: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.xLarge,
    color: COLORS.neutral,
  },
  navContainer: {
    justifyContent: "flex-end",
    paddingBottom: 4,
  },
  navigation: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.small,
    color: COLORS.tosca,
    letterSpacing: 0.8,
  },
});
