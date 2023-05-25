import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

import UserNavigation from "./UserNavigation";
import AuthNavigation from "./AuthNavigation";
import { AppLoaders } from "../components";
import { auth } from "../config/firebase";
import { useAuth } from "../hooks/useAuth";

export default function RootNavigation() {
  const [isLoading, setLoading] = useState(false);
  const { user } = useAuth();

  const authenticateUser = async () => {
    try {
      setLoading(true);
      const userEmail = await AsyncStorage.getItem("userEmail");
      const userPassword = await AsyncStorage.getItem("userPassword");
      if (userEmail && userPassword) {
        signInWithEmailAndPassword(auth, userEmail, userPassword)
          .then(() => {})
          .catch((err) => {
            console.error(err);
          });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  return isLoading ? (
    <AppLoaders />
  ) : user ? (
    <UserNavigation />
  ) : (
    <AuthNavigation />
  );
}
