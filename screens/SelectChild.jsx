import { useContext, useEffect } from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { auth, db } from "../config/firebase";
import { signOut } from "firebase/auth";
import globalStyles from "../styles/global";
import {
  Header,
  AppLoaders,
  SelectChildEmpty,
  SelectChildFilled,
} from "../components";
import { icons } from "../constants";
import { ChildrenContext } from "../context";

export default function SelectChildScreen() {
  const [children, setChildren] = useContext(ChildrenContext);

  return (
    <SafeAreaView style={globalStyles.androidSafeArea}>
      <Header
        title={"Pilih Akun Anak"}
        rightIcon={icons.signOut}
        handlePressRightIcon={async () => {
          await AsyncStorage.removeItem("userEmail");
          await AsyncStorage.removeItem("userPassword");
          signOut(auth)
            .then(() => {})
            .catch((err) => {
              console.error(err);
            });
        }}
      />
      {children.length > 0 ? (
        // <Text>{console.log(children.map((child) => child.name))}KAFI</Text>
        // <SelectChildFilled childrenName={children.map((child) => child.name)} />
        <SelectChildFilled children={children} />
      ) : (
        <SelectChildEmpty />
      )}
    </SafeAreaView>
  );
}
