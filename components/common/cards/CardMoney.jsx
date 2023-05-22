import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import { images, COLORS, FONT, SIZES } from "../../../constants";

export default function CardMoney({ amount }) {
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <Image source={images.amonCoin} style={{ width: 56, height: 56 }} />
      <Text style={styles.amount}>Rp{amount}</Text>
      <Text style={styles.text}>ditabung</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary4,
    borderWidth: 3,
    borderRadius: 24,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "48%",
  },
  amount: {
    marginTop: 8,
    fontFamily: FONT.semiBold,
    color: COLORS.neutral,
    fontSize: SIZES.medium,
  },
  text: {
    fontFamily: FONT.semiBold,
    color: COLORS.neutral2,
    fontSize: SIZES.xSmall,
  },
});
