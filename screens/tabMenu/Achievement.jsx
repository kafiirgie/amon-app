import { useContext } from "react";
import { SafeAreaView, View, Text, ScrollView, StyleSheet } from "react-native";

import globalStyles from "../../styles/global";
import {
  HeaderAchieve,
  CardPointsExtended,
  SubHeader,
  CardBadge,
} from "../../components";
import { images, COLORS } from "../../constants";
import { ChildDataContext } from "../../context";

export default function AchievementScreen() {
  const [childData, setChildData] = useContext(ChildDataContext);
  const { name, total_points, total_savings } = childData;
  return (
    <SafeAreaView style={globalStyles.androidSafeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <HeaderAchieve />
        <View style={styles.bodyContainer}>
          <CardPointsExtended amount={total_points} />
          <SubHeader title={"Lencana"} />
          <View style={styles.gridContainer}>
            {/* BRONZE */}
            {total_points >= 1000 ? (
              <CardBadge
                images={images.badgeBronze}
                name={"Bronze"}
                point={"1000"}
              />
            ) : (
              <CardBadge
                images={images.badgeLocked}
                name={"???"}
                point={"1000"}
              />
            )}

            {/* SILVER */}
            {total_points >= 2000 ? (
              <CardBadge
                images={images.badgeSilver}
                name={"Bronze"}
                point={"2000"}
              />
            ) : (
              <CardBadge
                images={images.badgeLocked}
                name={"???"}
                point={"2000"}
              />
            )}

            {/* GOLD */}
            {total_points >= 3000 ? (
              <CardBadge
                images={images.badgeLocked}
                name={"Gold"}
                point={"3000"}
              />
            ) : (
              <CardBadge
                images={images.badgeLocked}
                name={"???"}
                point={"3000"}
              />
            )}

            {/* PLATINUM */}
            {total_points >= 4000 ? (
              <CardBadge
                images={images.badgeLocked}
                name={"Bronze"}
                point={"4000"}
              />
            ) : (
              <CardBadge
                images={images.badgeLocked}
                name={"???"}
                point={"4000"}
              />
            )}

            {/* DIAMOND */}
            {total_points >= 7000 ? (
              <CardBadge
                images={images.badgeLocked}
                name={"Diamond"}
                point={"7000"}
              />
            ) : (
              <CardBadge
                images={images.badgeLocked}
                name={"???"}
                point={"7000"}
              />
            )}

            {/* AMON MASTER */}
            {total_points >= 10000 ? (
              <CardBadge
                images={images.badgeLocked}
                name={"Amon Master"}
                point={"10000"}
              />
            ) : (
              <CardBadge
                images={images.badgeLocked}
                name={"???"}
                point={"10000"}
              />
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.white,
    paddingBottom: 120,
    rowGap: 16,
  },
  bodyContainer: {
    paddingHorizontal: 24,
    rowGap: 16,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 16,
  },
});
