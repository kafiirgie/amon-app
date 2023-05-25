import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FlatGrid } from "react-native-super-grid";

import CardMission from "../common/cards/CardMission";
import { COLORS, FONTS, SIZES } from "../../constants";

export default function MissionsFilled({ missions }) {
  // const navigation = useNavigation();
  // const [selectedMission, setSelectedMission] = useState("");
  // const handleCardPress = (name) => {
  //   setSelectedMission(name);
  //   navigation.navigate("TabNavigation", { selectedMission: name });
  // };
  return (
    <View style={styles.bodyContainer}>
      <Text style={styles.text}>
        Tekan “Tandai Selesai” jika kamu sudah melakukan misi.
      </Text>
      {missions.map((mission, i) => {
        return <CardMission {...mission} key={i} />;
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
