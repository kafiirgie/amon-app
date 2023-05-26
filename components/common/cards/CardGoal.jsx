import { View, Text, Pressable, StyleSheet, Image } from "react-native";

import { images, COLORS, FONTS, SIZES } from "../../../constants";
import ButtoninCard from "../button/ButtoninCard";
import { useState } from "react";

export default function CardGoal({
  id,
  name,
  end_date,
  reward,
  target,
  current_value,
}) {
  const progress = (current_value / target) * 100;
  const currentDate = new Date();
  const endDate = new Date(end_date);
  const diffms = endDate - currentDate;
  const diffDays = Math.ceil(diffms / (1000 * 60 * 60 * 24));
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  return (
    <Pressable style={styles.container}>
      <View style={styles.circleContainer}>
        <View style={styles.circle1} />
        <View style={styles.circle2} />
      </View>
      <View style={styles.imgContainer}>
        <Image source={images.amonCoin} style={{ width: 64, height: 64 }} />
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
        <Text
          style={[
            styles.text,
            { marginTop: 2, fontSize: SIZES.small, opacity: 0.7 },
          ]}
        >
          {diffDays} Hari lagi | {endDate.getDate()}{" "}
          {months[endDate.getMonth() - 1]} {endDate.getFullYear()}
        </Text>
        <View style={styles.statusBarFull}>
          <View style={[styles.statusBar, { width: `${progress}%` }]} />
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Text style={[styles.text, { fontSize: SIZES.xSmall }]}>
            {current_value / 1000}/{target / 1000} ribu
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
    paddingHorizontal: 24,
    paddingVertical: 24,
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
    // backgroundColor: "red",
  },
  bodyContainer: {
    width: "74%",
    // backgroundColor: "gray",
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
