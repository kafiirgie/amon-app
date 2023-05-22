import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

export default function AppLoaders() {
  return (
    <View style={styles.container}>
      <LottieView
        style={{ width: 160, height: 160 }}
        source={require("../../../assets/animation/99833-edupia-loading.json")}
        autoPlay
        loop
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
});
