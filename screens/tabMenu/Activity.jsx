import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
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

const goals = [];
const missions = [];

export default function ActivityScreen() {
  const route = useRoute();
  const { name, total_points, total_savings, year_of_birth } =
    route.params?.childData;
  return (
    <SafeAreaView style={globalStyles.androidSafeArea}>
      <ScrollView style={styles.screenContainer}>
        <HeaderwithDesc
          title={"Aktivitas"}
          desc={"Tetapkan target dan selesaikan misi untuk mendapatkan poin!"}
        />
        <View style={styles.savingContainer}>
          <CardSaving amount={total_savings} />
        </View>
        <View style={styles.goalsContainer}>
          <SubHeader title={"Target"} />
          {goals.length > 0 ? <GoalsFilled /> : <GoalsEmpty />}
        </View>
        <View style={styles.missionsContainer}>
          <SubHeader title={"Misi"} />
          {missions.length > 0 ? <MissionsFilled /> : <MissionsEmpty />}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    padding: 24,
  },
  savingContainer: {
    marginTop: 16,
  },
  goalsContainer: {
    marginTop: 16,
  },
  missionsContainer: {
    marginTop: 16,
  },
});
