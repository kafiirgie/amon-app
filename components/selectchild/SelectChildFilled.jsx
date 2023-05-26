import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FlatGrid } from "react-native-super-grid";

import { SelectedChildIdContext } from "../../context";
import CardChildren from "../common/cards/CardChildren";
import CardAddChildren from "../common/cards/CardAddChildren";

export default function SelectChildFilled({ children }) {
  const navigation = useNavigation();
  const [selectedChildId, setSelectedChildId] = useContext(
    SelectedChildIdContext
  );
  const handleCardPress = (id) => {
    setSelectedChildId(id);
    navigation.navigate("TabNavigation");
  };
  console.log(selectedChildId);
  return (
    <View style={styles.bodyContainer}>
      <FlatGrid
        showsVerticalScrollIndicator={false}
        itemDimension={164}
        data={[...children, {}]}
        renderItem={({ item }) =>
          item.name ? (
            <CardChildren
              id={item.id}
              name={item.name}
              handlePress={handleCardPress}
            />
          ) : (
            <CardAddChildren
              handlePress={() => navigation.navigate("AddChild")}
            />
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 24,
    justifyContent: "center",
  },
});
