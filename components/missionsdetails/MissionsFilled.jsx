import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FlatGrid } from "react-native-super-grid";

import CardMission from "../common/cards/CardMission";
import { COLORS, FONTS, SIZES } from "../../constants";

export default function MissionsFilled({ missions }) {
  return (
    <View style={styles.bodyContainer}>
      <Text style={styles.text}>
        Tekan “Tandai Selesai” jika kamu sudah melakukan misi.
      </Text>
      {missions.map((mission) => {
        return (
          <CardMission
            {...mission}
            key={mission.id}
            end_date={mission.end_date.toString()}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 16,
  },
  text: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.neutral2,
  },
});
