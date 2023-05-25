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
} from "../../components";
import { COLORS } from "../../constants";
import { ChildDataContext } from "../../context";

export default function ActivityScreen() {
  const [childData, setChildData] = useContext(ChildDataContext);
  const { name, total_points, total_savings } = childData;
  const [goals, setGoals] = useState([
    {
      name: "Boneka Pony Lucu Banget",
      end_date: "23 HARI LAGI",
      reward: 80,
      target: 100000,
      current_value: 30000,
    },
  ]);
  const [missions, setMissions] = useState([
    {
      name: "Menambah tabungan Rp10.000",
      end_date: "11 hari lagi",
      reward: 10,
      status: "to-do",
    },
    {
      name: "Membaca artikel minggu ini",
      end_date: "1 hari lagi",
      reward: 5,
      status: "pending",
    },
  ]);
  return (
    <SafeAreaView style={globalStyles.androidSafeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <HeaderwithDesc
          title={"Aktivitas"}
          desc={"Tetapkan target dan selesaikan misi untuk mendapatkan poin!"}
        />
        <View style={styles.savingContainer}>
          <CardSaving amount={total_savings} />
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
