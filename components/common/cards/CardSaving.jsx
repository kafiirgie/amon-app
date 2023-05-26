import { View, Text, StyleSheet, Pressable, Image } from "react-native";

import ButtoninCard from "../button/ButtoninCard";
import { images, COLORS, FONTS, SIZES } from "../../../constants";

export default function CardSaving({ amount, handlePress }) {
  return (
    <Pressable style={styles.cardContainer} handlePress={handlePress}>
      <View style={styles.bgContainer}>
        <View style={styles.circle1} />
        <View style={styles.circle2} />
        <View style={styles.circle3} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Kamu sudah menabung sebanyak</Text>
        <Text style={styles.amount}>Rp{amount}</Text>
        <ButtoninCard
          text={"Catat Tabunganmu"}
          handlePress={handlePress}
          isLarge={false}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image source={images.pig} style={{ width: 96, height: 96 }} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    borderRadius: 24,
    backgroundColor: COLORS.tosca,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  textContainer: {
    width: "68%",
  },
  text: {
    fontFamily: FONTS.regular,
    color: COLORS.white,
    fontSize: SIZES.small,
  },
  amount: {
    fontFamily: FONTS.semiBold,
    color: COLORS.yellow,
    fontSize: SIZES.large,
    marginBottom: 12,
  },
  bgContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    right: "20%",
    // top: "56%",
  },
  circle1: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: COLORS.white,
    opacity: 0.2,
    position: "absolute",
    // left: 240,
    // right: -339,
  },
  circle2: {
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: COLORS.white,
    opacity: 0.2,
    position: "absolute",
    // left: 225,
    // right: -354,
  },
  circle3: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: COLORS.white,
    opacity: 0.2,
    position: "absolute",
    // left: 193,
    // right: -371,
  },
  imageContainer: {
    width: "30%",
    alignItems: "flex-end",
  },
});
