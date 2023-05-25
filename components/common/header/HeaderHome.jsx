import { View, ImageBackground, StyleSheet } from "react-native";

import { images, COLORS } from "../../../constants";
import CardProfile from "../cards/CardProfile";

export default function HeaderHome({ name }) {
  return (
    <ImageBackground
      source={images.waveBackground}
      style={styles.header}
      imageStyle={{
        resizeMode: "cover",
        height: 120,
        position: "absolute",
        top: -20,
      }}
    >
      <View style={{ padding: 24 }}>
        <CardProfile name={name} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 120,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    backgroundColor: COLORS.primary,
    overflow: "hidden",
  },
});
