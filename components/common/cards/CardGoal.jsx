import { View, Text, Pressable, StyleSheet, Image } from "react-native";

import { images, COLORS, FONTS, SIZES } from "../../../constants";
import ButtoninCard from "../button/ButtoninCard";
import { useState } from "react";

export default function CardGoal({
  name,
  end_date,
  reward,
  target,
  current_value,
  handlePress,
}) {
  const [done, setDone] = useState(false);
  const progress = (current_value / target) * 100;
  return (
    <Pressable style={styles.container}>
      <View style={styles.circleContainer}>
        <View style={styles.circle1} />
        <View style={styles.circle2} />
      </View>
      <View style={styles.imgContainer}>
        <Image source={images.amonCoin} style={{ width: 56, height: 56 }} />
      </View>
      <View style={styles.bodyContainer}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.text}>{name}</Text>
          <View style={{ flexDirection: "row", columnGap: 4 }}>
            <Image
              source={images.amonPoint}
              style={{ width: 16, height: 16 }}
            />
            <Text style={styles.text}>{reward}</Text>
          </View>
        </View>
        <Text style={[styles.text, { fontSize: SIZES.xSmall, opacity: 0.7 }]}>
          {end_date}
        </Text>
        <View style={styles.statusBarFull}>
          <View style={[styles.statusBar, { width: `${progress}%` }]} />
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Text style={[styles.text, { fontSize: SIZES.xSmall }]}>
            30/100 ribu
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 24,
    width: "100%",
    backgroundColor: COLORS.orange3,
    borderRadius: 24,
    overflow: "hidden",
  },
  circleContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: "15%",
    top: "56%",
  },
  circle1: {
    backgroundColor: COLORS.orange2,
    opacity: 0.5,
    width: 160,
    height: 160,
    borderRadius: 80,
    position: "absolute",
  },
  circle2: {
    backgroundColor: COLORS.orange2,
    opacity: 0.3,
    width: 200,
    height: 200,
    borderRadius: 100,
    position: "absolute",
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
  },
  bodyContainer: {
    width: "76%",
  },
  text: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.small,
    color: COLORS.neutral,
    lineHeight: 16,
  },
  statusBarFull: {
    marginTop: 12,
    marginBottom: 4,
    width: "100%",
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.white,
  },
  statusBar: {
    height: "100%",
    borderRadius: 4,
    backgroundColor: COLORS.orange,
  },
});
