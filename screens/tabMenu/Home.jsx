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
import { ChildDataContext, GoalsContext, MissionsContext } from "../../context";

export default function HomeScreen({ navigation }) {
  const [childData, setChildData] = useContext(ChildDataContext);
  const [goals, setGoals] = useContext(GoalsContext);
  const [missions, setMissions] = useContext(MissionsContext);
  const name = childData?.name;
  const total_points = childData?.total_points;
  const total_savings = childData?.total_savings;

  console.log("GOALS: ", goals);
  console.log("MISI: ", missions);

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
            <SubHeader
              title={"Target"}
              navigation={"Selengkapnya"}
              handlePressNav={() => navigation.navigate("Activity")}
            />
            {goals.length > 0 ? <GoalsFilled goals={goals} /> : <GoalsEmpty />}
          </View>
          <View style={styles.missionsContainer}>
            <SubHeader
              title={"Misi"}
              navigation={"Selengkapnya"}
              handlePressNav={() => navigation.navigate("Activity")}
            />
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
