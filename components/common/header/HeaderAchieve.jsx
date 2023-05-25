import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

import { images, FONTS, COLORS, SIZES } from "../../../constants";

export default function HeaderAchieve() {
  return (
    <View style={styles.header}>
      <View style={styles.bg}>
        <Image source={images.star} style={styles.star1} />
        <Image source={images.star} style={styles.star2} />
        <Image source={images.star} style={styles.star3} />
        <View style={styles.starsTop}>
          <Image source={images.star} style={styles.starTopLeft} />
          <Image source={images.star} style={styles.starTopRight} />
        </View>
        <View style={styles.starsBottom}>
          <Image source={images.star} style={styles.starBottomLeft} />
          <Image source={images.star} style={styles.starBottomRight} />
        </View>
      </View>
      <Image
        source={images.amonStar}
        style={{ width: 108, height: 108, marginBottom: -12 }}
      />
      <Text style={styles.title}>Capaian</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 224,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    backgroundColor: COLORS.blue,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  bg: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  star1: {
    width: 180,
    height: 180,
    opacity: 0.1,
    position: "absolute",
  },
  star2: {
    width: 240,
    height: 240,
    opacity: 0.1,
    position: "absolute",
  },
  star3: {
    width: 360,
    height: 360,
    opacity: 0.1,
    position: "absolute",
  },
  starsTop: {
    flexDirection: "row",
    width: Dimensions.get("window").width - 48,
    position: "absolute",
    bottom: 50,
    justifyContent: "space-between",
  },
  starTopLeft: {
    width: 24,
    height: 24,
    opacity: 0.8,
    transform: [{ rotate: "-90deg" }],
  },
  starTopRight: {
    width: 24,
    height: 24,
    opacity: 0.8,
    transform: [{ rotate: "90deg" }],
  },
  starsBottom: {
    flexDirection: "row",
    width: Dimensions.get("window").width - 72,
    position: "absolute",
    top: 50,
    justifyContent: "space-between",
  },
  starBottomLeft: {
    width: 24,
    height: 24,
    opacity: 0.8,
    transform: [{ rotate: "-90deg" }],
  },
  starBottomRight: {
    width: 24,
    height: 24,
    opacity: 0.8,
    transform: [{ rotate: "90deg" }],
  },
  title: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.xLarge,
    color: COLORS.white,
  },
});
