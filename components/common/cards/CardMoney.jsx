import { Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { images, COLORS, FONTS, SIZES } from "../../../constants";

export default function CardMoney({ amount }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => navigation.navigate("Activity")}
    >
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
    fontFamily: FONTS.semiBold,
    color: COLORS.neutral,
    fontSize: SIZES.medium,
  },
  text: {
    fontFamily: FONTS.semiBold,
    color: COLORS.neutral2,
    fontSize: SIZES.xSmall,
  },
});
