import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { images, COLORS, FONTS, SIZES } from "../../../constants";

export default function CardProfile({ name }) {
  const navigation = useNavigation();
  return (
    <View style={styles.cardContainer}>
      <View>
        <Image source={images.amonDefault} style={{ width: 56, height: 56 }} />
      </View>
      <View style={styles.right}>
        <View style={styles.textContainer}>
          <Text style={styles.greetings}>Selamat datang kembali,</Text>
          <Text style={styles.name}>{name}</Text>
        </View>
        <Pressable
          style={({ pressed }) => [
            styles.buttonContainer,
            pressed && { opacity: 0.6 },
          ]}
          onPress={() => navigation.navigate("SelectChild")}
        >
          <Text style={styles.button}>Bukan Kamu?</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary4,
    borderWidth: 3,
    borderRadius: 24,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  right: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    marginLeft: 8,
  },
  greetings: {
    fontFamily: FONTS.regular,
    color: COLORS.neutral2,
    fontSize: SIZES.xSmall,
  },
  name: {
    fontFamily: FONTS.semiBold,
    color: COLORS.primary,
    fontSize: SIZES.xLarge,
    lineHeight: 30,
  },
  buttonContainer: {
    // justifyContent: "flex-end",
    width: 60,
  },
  button: {
    fontFamily: FONTS.semiBold,
    color: COLORS.red,
    fontSize: SIZES.small,
    textAlign: "center",
  },
});
