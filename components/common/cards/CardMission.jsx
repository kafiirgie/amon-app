import { useState } from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";

import { images, COLORS, FONTS, SIZES } from "../../../constants";
import ButtoninCard from "../button/ButtoninCard";

export default function CardMission({
  name,
  end_date,
  reward,
  is_done,
  is_pending,
}) {
  const [done, setDone] = useState(is_done);
  const [pending, setPending] = useState(is_pending);
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
      <View style={styles.circle} />
      <View style={{ height: 32 }}>
        <Text style={styles.text}>{name} </Text>
      </View>
      <Text style={[styles.text, { color: COLORS.primary }]}>
        {diffDays > 7
          ? `${endDate.getDate()} ${
              months[endDate.getMonth()]
            } ${endDate.getFullYear()}`
          : `${diffDays} Hari lagi`}
      </Text>
      <View style={{ flexDirection: "row", columnGap: 4 }}>
        <Image source={images.amonPoint} style={{ width: 16, height: 16 }} />
        <Text style={styles.text}>{reward}</Text>
      </View>
      <ButtoninCard
        text={
          done ? "Selesai" : pending ? "Menunggu Verifikasi" : "Tandai Selesai"
        }
        isFull
        isGreen={pending ? false : true}
        handlePress={() => {
          !done && setPending(!pending);
        }}
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
