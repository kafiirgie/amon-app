import { SafeAreaView, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

import globalStyles from "../../styles/global";

export default function ProfileScreen() {
  const route = useRoute();
  const { name, total_points, total_savings, year_of_birth } =
    route.params?.childData;
  return (
    <SafeAreaView
      style={[globalStyles.androidSafeArea, globalStyles.container]}
    >
      <Text>ProfileScreen</Text>
    </SafeAreaView>
  );
}
