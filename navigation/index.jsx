import { signInWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

import { auth } from "../config/firebase";
import UserNavigation from "./UserNavigation";
import AuthNavigation from "./AuthNavigation";
import { useAuth } from "../hooks/useAuth";
import { AppLoaders } from "../components";

export default function RootNavigation() {
  const [isLoading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    authenticateUser()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return isLoading ? (
    <AppLoaders />
  ) : user ? (
    <UserNavigation />
  ) : (
    <AuthNavigation />
  );
}

const authenticateUser = async () => {
  try {
    const userEmail = await AsyncStorage.getItem("userEmail");
    const userPassword = await AsyncStorage.getItem("userPassword");
    if (userEmail && userPassword) {
      signInWithEmailAndPassword(auth, userEmail, userPassword)
        .then(() => {})
        .catch((error) => {
          console.log(error);
        });
    }
  } catch (error) {
    console.log(error);
  }
};
