import { SafeAreaView, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

import globalStyles from "../../styles/global";
import { HeaderwithDesc } from "../../components";

export default function ProfileScreen() {
  // const { name, total_points, total_savings, year_of_birth } =
  //   route.params?.childData;
  return (
    <SafeAreaView style={globalStyles.androidSafeArea}>
      <HeaderwithDesc
        title={"Profil"}
        desc={"Pantau perkembangan dan jadwalkan misi untuk si Kecil!"}
      />
    </SafeAreaView>
  );
}
