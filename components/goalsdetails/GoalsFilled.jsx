import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FlatGrid } from "react-native-super-grid";

import CardGoal from "../common/cards/CardGoal";
import { COLORS, FONTS, SIZES } from "../../constants";

export default function GoalsFilled({ goals }) {
  return (
    <View style={styles.bodyContainer}>
      <Text style={styles.text}>
        Tambahkan tabunganmu hingga mencapai target.
      </Text>
      {goals.map((goal) => {
        return (
          <CardGoal
            {...goal}
            key={goal.id}
            end_date={goal.end_date.toString()}
          />
        );
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
