import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FlatGrid } from "react-native-super-grid";

import CardChildren from "../common/cards/CardChildren";
import CardAddChildren from "../common/cards/CardAddChildren";

export default function SelectChildFilled({ childrenName }) {
  const navigation = useNavigation();
  const [selectedChild, setSelectedChild] = useState("");
  const handleCardPress = (name) => {
    setSelectedChild(name);
    navigation.navigate("TabNavigation", { selectedChild: name });
  };
  return (
    <View style={styles.bodyContainer}>
      <FlatGrid
        itemDimension={164}
        data={[...childrenName, ""]}
        renderItem={({ item }) =>
          item ? (
            <CardChildren
              name={item}
              handlePress={() => handleCardPress(item)}
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
