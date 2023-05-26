import { useState, useContext } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import { useRoute } from "@react-navigation/native";

import globalStyles from "../../styles/global";
import {
  HeaderwithDesc,
  SubHeader,
  CardSaving,
  GoalsEmpty,
  GoalsFilled,
  MissionsEmpty,
  MissionsFilled,
  ModalAddSaving,
} from "../../components";
import { COLORS } from "../../constants";
import {
  ChildDataContext,
  GoalsContext,
  MissionsContext,
  GoalModalContext,
  SavingModalContext,
} from "../../context";

export default function ActivityScreen() {
  const [childData, setChildData] = useContext(ChildDataContext);
  const [goals, setGoals] = useContext(GoalsContext);
  const [missions, setMissions] = useContext(MissionsContext);
  const [goalModalOpen, setGoalModalOpen] = useContext(GoalModalContext);
  const [savingModalOpen, setSavingModalOpen] = useContext(SavingModalContext);
  const total_savings = childData?.total_savings;
  return (
    <SafeAreaView style={globalStyles.androidSafeArea}>
      <ModalAddSaving />
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <HeaderwithDesc
          title={"Aktivitas"}
          desc={"Tetapkan target dan selesaikan misi untuk mendapatkan poin!"}
        />
        <View style={styles.savingContainer}>
          <CardSaving
            amount={total_savings}
            handlePress={() => setSavingModalOpen(true)}
          />
        </View>
        <View style={styles.goalsContainer}>
          <SubHeader title={"Target"} />
          {goals.length > 0 ? <GoalsFilled goals={goals} /> : <GoalsEmpty />}
        </View>
        <View style={styles.missionsContainer}>
          <SubHeader title={"Misi"} />
          {missions.length > 0 ? (
            <MissionsFilled missions={missions} />
          ) : (
            <MissionsEmpty />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // justifyContent: "flex-end",
    backgroundColor: COLORS.white,
    padding: 24,
    paddingBottom: 120,
    rowGap: 16,
  },
});
