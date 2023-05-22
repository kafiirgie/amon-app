import { SafeAreaView, View, Text, StyleSheet, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";

import globalStyles from "../../styles/global";
import {
  CardProfile,
  CardMoney,
  CardPoints,
  CardReadArticle,
  CardGoal,
  CardMission,
  SubHeader,
} from "../../components";

export default function HomeScreen() {
  const route = useRoute();
  const { name, total_points, total_savings, year_of_birth } =
    route.params?.childData;
  return (
    <SafeAreaView style={globalStyles.androidSafeArea}>
      <ScrollView style={styles.screenContainer}>
        <View>
          <CardProfile name={name} />
        </View>
        <View style={styles.pointcoinContainer}>
          <CardMoney amount={total_savings} />
          <CardPoints amount={total_points} />
        </View>
        <View style={styles.articleContainer}>
          <CardReadArticle />
        </View>
        <View style={styles.goalsContainer}>
          <SubHeader title={"Target"} navigation={"Selengkapnya"} />
          <CardGoal />
        </View>
        <View style={styles.missionsContainer}>
          <SubHeader title={"Misi"} navigation={"Selengkapnya"} />
          <CardMission />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    padding: 24,
  },
  pointcoinContainer: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  articleContainer: {
    marginTop: 16,
  },
  goalsContainer: {
    marginTop: 16,
  },
  missionsContainer: {
    marginTop: 16,
  },
});
