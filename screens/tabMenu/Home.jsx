import { useState, useContext } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  StatusBar,
} from "react-native";
import { useRoute } from "@react-navigation/native";

import globalStyles from "../../styles/global";
import {
  CardMoney,
  CardPoints,
  CardReadArticle,
  HeaderHome,
  SubHeader,
  GoalsFilled,
  GoalsEmpty,
  MissionsFilled,
  MissionsEmpty,
} from "../../components";
import { COLORS } from "../../constants";
import { ChildDataContext } from "../../context";

export default function HomeScreen() {
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
    <SafeAreaView
      style={[
        globalStyles.androidSafeArea,
        { backgroundColor: COLORS.primary2 },
      ]}
    >
      <ScrollView
        stickyHeaderIndices={[0]}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <HeaderHome name={name} />
        <View style={styles.bodyContainer}>
          <View style={styles.pointcoinContainer}>
            <CardMoney amount={total_savings} />
            <CardPoints amount={total_points} />
          </View>
          <View style={styles.articleContainer}>
            <CardReadArticle />
          </View>
          <View style={styles.goalsContainer}>
            <SubHeader title={"Target"} navigation={"Selengkapnya"} />
            {goals.length > 0 ? <GoalsFilled goals={goals} /> : <GoalsEmpty />}
          </View>
          <View style={styles.missionsContainer}>
            <SubHeader title={"Misi"} navigation={"Selengkapnya"} />
            {missions.length > 0 ? (
              <MissionsFilled missions={missions} />
            ) : (
              <MissionsEmpty />
            )}
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomSticky} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // justifyContent: "flex-end",
    backgroundColor: COLORS.white,
    paddingBottom: 120,
  },
  bodyContainer: {
    paddingHorizontal: 24,
    marginTop: 8,
    rowGap: 16,
  },
  pointcoinContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottomSticky: {
    width: "100%",
    height: 80,
    backgroundColor: COLORS.white,
    opacity: 0.5,
    position: "absolute",
    bottom: 0,
  },
});
