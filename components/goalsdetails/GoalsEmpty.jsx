import { useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { images, COLORS, FONTS, SIZES } from "../../constants";
import ButtoninCard from "../common/button/ButtoninCard";
import ModalAddGoal from "../common/modals/ModalAddGoal";
import { GoalModalContext } from "../../context";

export default function GoalsEmpty() {
  const [goalModalOpen, setGoalModalOpen] = useContext(GoalModalContext);
  return (
    <View style={styles.container}>
      <ModalAddGoal />
      <View style={styles.imgContainer}>
        <Image source={images.amonSad} style={{ width: 72, height: 72 }} />
      </View>
      <Text style={styles.text}>Oops, Anda belum mengatur target.</Text>
      <View style={styles.buttonContainer}>
        <ButtoninCard
          text={"Tambah Target"}
          isGreen={true}
          handlePress={() => setGoalModalOpen(true)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  imgContainer: {},
  text: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.neutral2,
  },
  buttonContainer: {
    paddingVertical: 8,
  },
});
