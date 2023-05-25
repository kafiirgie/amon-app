import { View, Text, Pressable, StyleSheet, Image } from "react-native";

import { images, COLORS, FONTS, SIZES } from "../../../constants";
import ButtoninCard from "../button/ButtoninCard";
import { useState } from "react";

export default function CardMission({
  name,
  end_date,
  reward,
  status,
  handlePress,
}) {
  const [done, setDone] = useState(false);
  return (
    <Pressable
      // style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      style={styles.container}
    >
      <View style={styles.circle} />
      <View style={{ height: 32 }}>
        <Text style={styles.text}>{name} </Text>
      </View>
      <Text style={[styles.text, { color: COLORS.neutral2 }]}>{end_date}</Text>
      <View style={{ flexDirection: "row", columnGap: 4 }}>
        <Image source={images.amonPoint} style={{ width: 16, height: 16 }} />
        <Text style={styles.text}>{reward}</Text>
      </View>
      <ButtoninCard
        text={done ? "Selesai" : "Tandai Selesai"}
        isGreen={done ? false : true}
        isFull={true}
        handlePress={() => setDone(!done)}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  circle: {
    backgroundColor: COLORS.white,
    width: 140,
    height: 140,
    borderRadius: 70,
    position: "absolute",
    zIndex: -1,
    left: "-10%",
    top: "-35%",
  },
  container: {
    backgroundColor: COLORS.tosca2,
    width: 172,
    padding: 16,
    overflow: "hidden",
    borderRadius: 24,
    borderWidth: 2,
    borderColor: COLORS.tosca2,
    rowGap: 8,
  },
  pressed: {
    opacity: 0.8,
  },
  text: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.small,
    color: COLORS.neutral,
    lineHeight: 16,
  },
});
