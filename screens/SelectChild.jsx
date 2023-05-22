import { useState, useEffect } from "react";
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
import { icons, images, COLORS, FONT, SIZES } from "../constants";

export default function SelectChildScreen() {
  const userEmail = auth.currentUser.email;
  const [children, setChildren] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const querySnapshot = await getDocs(
          collection(db, "parents", userEmail, "children")
        );
        const fetchedData = querySnapshot.docs.map((doc) => doc.data().name);
        console.log("Children Name : ", fetchedData);
        setChildren(fetchedData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

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
            .catch((error) => {
              console.log(error);
            });
        }}
      />
      {isLoading ? (
        <AppLoaders />
      ) : children.length > 0 ? (
        <SelectChildFilled childrenName={children} />
      ) : (
        <SelectChildEmpty />
      )}
    </SafeAreaView>
  );
}
