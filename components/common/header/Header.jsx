import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

export default function Header({
  title,
  leftIcon,
  rightIcon,
  handlePressLeftIcon,
  handlePressRightIcon,
}) {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.headedrIcon}
        onPress={handlePressLeftIcon}
      >
        <Image source={leftIcon} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
      <TouchableOpacity
        style={styles.headedrIcon}
        onPress={handlePressRightIcon}
      >
        <Image source={rightIcon} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headedrIcon: {
    width: 72,
    height: 72,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontFamily: FONTS.semiBold,
    color: COLORS.neutral,
    fontSize: SIZES.xLarge,
    paddingTop: 24,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
