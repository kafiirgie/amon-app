import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import ButtoninCard from "../button/ButtoninCard";
import { images, COLORS, FONT, SIZES } from "../../../constants";

export default function CardReadArticle({ handlePress }) {
  return (
    <TouchableOpacity style={styles.cardContainer} handlePress={handlePress}>
      <View style={styles.bgContainer}>
        <View style={styles.circle1} />
        <View style={styles.circle2} />
        <View style={styles.circle3} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Sudahkah kamu membaca{" "}
          <Text style={{ color: COLORS.yellow }}>Artikel</Text> minggu ini?
        </Text>
        <ButtoninCard text={"Baca"} handlePress={handlePress} isGreen={true} />
      </View>
      <View style={styles.imageContainer}>
        <Image source={images.amonEdu} style={{ width: 96, height: 96 }} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    borderRadius: 24,
    backgroundColor: COLORS.purple,
    height: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    paddingHorizontal: 24,
    width: "60%",
    // backgroundColor: "gray",
  },
  text: {
    fontFamily: FONT.regular,
    color: COLORS.white,
    fontSize: SIZES.small,
    marginBottom: 12,
  },
  bgContainer: {
    // position: "absolute",
    // backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
  },
  circle1: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: COLORS.white,
    opacity: 0.1,
    position: "absolute",
    // left: 240,
    right: -339,
  },
  circle2: {
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: COLORS.white,
    opacity: 0.1,
    position: "absolute",
    // left: 225,
    right: -354,
  },
  circle3: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: COLORS.white,
    opacity: 0.1,
    position: "absolute",
    // left: 193,
    right: -371,
  },
  imageContainer: {
    width: "40%",
    alignItems: "center",
    // backgroundColor: "red",
  },
});
