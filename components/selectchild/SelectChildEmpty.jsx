import { View, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Button from "../common/button/Button";
import { images, COLORS, FONTS, SIZES } from "../../constants";

export default function SelectChildEmpty() {
  const navigation = useNavigation();
  return (
    <View style={styles.bodyContainer}>
      <View style={styles.imagesContainer}>
        <Image source={images.amonSad} style={styles.imageAmonSad} />
        <Image source={images.cloud1} style={styles.imageCloud1} />
        <Image source={images.cloud2} style={styles.imageCloud2} />
      </View>
      <Text style={styles.body}>Oops, Anda belum membuat akun anak</Text>
      <Button
        text={"Buat Akun"}
        handlePress={() => navigation.navigate("AddChild")}
        isLarge={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: "40%",
  },
  body: {
    fontFamily: FONTS.regular,
    color: COLORS.neutral2,
    fontSize: SIZES.medium,
    textAlign: "center",
    paddingHorizontal: 40,
    marginTop: 32,
    marginBottom: 24,
  },
  imagesContainer: {},
  imageAmonSad: {
    width: 160,
    height: 160,
  },
  imageCloud1: {
    width: 160,
    height: 160,
    position: "absolute",
    top: "24%",
    right: "16%",
    zIndex: -1,
  },
  imageCloud2: {
    width: 160,
    height: 160,
    position: "absolute",
    bottom: "24%",
    left: "16%",
    zIndex: -1,
  },
});
