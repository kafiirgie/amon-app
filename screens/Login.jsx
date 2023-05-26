import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { images, COLORS, FONTS, SIZES } from "../constants";
import globalStyles from "../styles/global";
import { LoginForm } from "../components";

export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.androidSafeArea}>
      <ScrollView
        contentContainerStyle={styles.authContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ alignItems: "center" }}>
          <Image source={images.amonLockCircle} style={styles.amonImage} />
        </View>
        <View style={{ marginBottom: 32 }}>
          <Text style={styles.heading}>Masuk</Text>
          <Text style={styles.body}>Silakan masuk sebagai orang tua</Text>
        </View>
        <LoginForm />
        <View
          style={{
            marginTop: 24,
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Text style={styles.body}>Belum punya akun? Daftar </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={[styles.body, { color: COLORS.primary }]}>
              di sini
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  amonImage: {
    width: 280,
    height: 280,
  },
  authContainer: {
    paddingHorizontal: 40,
    paddingTop: "5%",
    paddingBottom: "5%",
  },
  heading: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.xxLarge,
    color: COLORS.primary,
    marginBottom: 10,
  },
  body: {
    fontFamily: FONTS.regular,
    color: COLORS.neutral,
    fontSize: SIZES.medium,
  },
});
