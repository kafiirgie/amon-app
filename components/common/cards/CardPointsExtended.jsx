import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { images, COLORS, FONTS, SIZES } from "../../../constants";
import ButtoninCard from "../button/ButtoninCard";

export default function CardPointsExtended({ amount }) {
  const navigation = useNavigation();
  return (
    <View style={styles.cardContainer}>
      <View style={styles.amountContainer}>
        <Image source={images.amonPoint} style={{ width: 56, height: 56 }} />
        <Text style={styles.amount}>{amount} Poin</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.text}>Kerjakan Misi dan kumpulkan Poin!</Text>
        <View>
          <ButtoninCard
            text={"Lihat Misi"}
            isGreen
            handlePress={() => navigation.navigate("Activity")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: COLORS.primary4,
    width: "100%",
    borderRadius: 24,
    flexDirection: "row",
  },
  amountContainer: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary4,
    borderWidth: 3,
    borderRadius: 24,
    padding: 16,
    alignItems: "center",
    width: "40%",
    margin: 8,
  },
  amount: {
    marginTop: 8,
    fontFamily: FONTS.semiBold,
    color: COLORS.neutral,
    fontSize: SIZES.medium,
  },
  bodyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
  },
  text: {
    fontFamily: FONTS.regular,
    color: COLORS.neutral,
    fontSize: SIZES.small,
    textAlign: "center",
    marginBottom: 16,
  },
});
