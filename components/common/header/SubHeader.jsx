import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

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
    marginBottom: 16,
    // backgroundColor: "gray",
  },
  title: {
    fontFamily: FONT.semiBold,
    fontSize: SIZES.xLarge,
    color: COLORS.neutral,
  },
  navContainer: {
    justifyContent: "flex-end",
    paddingBottom: 4,
    // backgroundColor: "red",
  },
  navigation: {
    fontFamily: FONT.semiBold,
    fontSize: SIZES.xSmall,
    color: COLORS.neutral,
    // letterSpacing: 1.1,
  },
});
