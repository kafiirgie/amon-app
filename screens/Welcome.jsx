import { SafeAreaView, Text, StyleSheet, Image } from "react-native";

import globalStyles from "../styles/global";
import { images, COLORS, FONTS, SIZES } from "../constants";
import { Button } from "../components";

export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView
      style={[globalStyles.androidSafeArea, globalStyles.container]}
    >
      <Image source={images.amonSplash} style={styles.amonBackground} />

      <Text style={styles.body}>
        Ajak orang tuamu untuk melakukan set up akun
      </Text>

      <Button
        text={"Mulai"}
        handlePress={() => navigation.navigate("Login")}
        isLarge={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  amonBackground: {
    width: 384,
    height: 384,
  },
  body: {
    fontFamily: FONTS.regular,
    color: COLORS.primary,
    fontSize: SIZES.large,
    textAlign: "center",
    paddingHorizontal: 40,
    marginTop: 20,
    marginBottom: 36,
  },
});
