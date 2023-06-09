import {
  View,
  Text,
  Image,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from "react-native";

import globalStyles from "../styles/global";
import { images, icons, COLORS, FONTS, SIZES } from "../constants";
import { Header, AddChildForm } from "../components";

export default function AddChildScreen({ navigation }) {
  return (
    <SafeAreaView style={[globalStyles.androidSafeArea]}>
      <ImageBackground
        source={images.waveBackground}
        resizeMode="cover"
        style={styles.imageBg}
      >
        <ScrollView contentContainerStyle={styles.authContainer}>
          <Header
            leftIcon={icons.backLight}
            handlePressLeftIcon={() => navigation.goBack()}
          ></Header>
          <View style={{ padding: 24 }}>
            <View style={styles.formContainer}>
              <Text style={styles.title}>Buat Akun Anak</Text>
              <View style={styles.imageContainer}>
                <Image
                  source={images.amonDefault}
                  style={{ width: 88, height: 88 }}
                />
              </View>
              <AddChildForm />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageBg: {
    flex: 1,
  },
  authContainer: {},
  formContainer: {
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
    padding: 24,
  },
  title: {
    fontFamily: FONTS.semiBold,
    color: COLORS.neutral,
    fontSize: SIZES.large,
    paddingVertical: 24,
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#FF9696",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
});
