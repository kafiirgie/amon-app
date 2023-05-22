import { SafeAreaView, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

import globalStyles from "../../styles/global";
import { HeaderwithDesc } from "../../components";

export default function AchievementScreen() {
  const route = useRoute();
  const { name, total_points, total_savings, year_of_birth } =
    route.params?.childData;
  return (
    <SafeAreaView style={globalStyles.androidSafeArea}>
      <HeaderwithDesc
        title={"Capaian"}
        desc={"Selesaikan misi dan kumpulkan poin!"}
      />
    </SafeAreaView>
  );
}
