import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FlatGrid } from "react-native-super-grid";

import CardGoal from "../common/cards/CardGoal";
import { COLORS, FONTS, SIZES } from "../../constants";

export default function GoalsFilled({ goals }) {
  // const navigation = useNavigation();
  // const [selectedMission, setSelectedMission] = useState("");
  // const handleCardPress = (name) => {
  //   setSelectedMission(name);
  //   navigation.navigate("TabNavigation", { selectedMission: name });
  // };
  return (
    <View style={styles.bodyContainer}>
      <Text style={styles.text}>
        Tambahkan tabunganmu hingga mencapai target.
      </Text>
      {goals.map((goal, i) => {
        return <CardGoal {...goal} key={i} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    rowGap: 16,
  },
  text: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.neutral2,
  },
});
