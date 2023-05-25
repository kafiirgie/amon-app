import { View, Text, StyleSheet, Image } from "react-native";

import { images, COLORS, FONTS, SIZES } from "../../constants";
import ButtoninCard from "../common/button/ButtoninCard";

export default function MissionsEmpty() {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={images.amonHappy} style={{ width: 72, height: 72 }} />
      </View>
      <Text style={styles.text}>Horee, tidak ada misi untuk sekarang.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  imgContainer: {},
  text: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.neutral2,
  },
  buttonContainer: {
    paddingVertical: 8,
  },
});
