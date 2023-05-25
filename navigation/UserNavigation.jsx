import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SelectChildScreen from "../screens/SelectChild";
import AddChildScreen from "../screens/AddChild";
import TabNavigation from "./TabNavigation";
import {
  UserContext,
  ChildrenContext,
  SelectedChildIdContext,
} from "../context";
import { auth, db } from "../config/firebase";
import { AppLoaders } from "../components";
import { collection, getDocs } from "firebase/firestore";

const Stack = createStackNavigator();

export default function UserNavigation() {
  const [email, setEmail] = useState(auth.currentUser.email);
  const [children, setChildren] = useState([]);
  const [selectedChildId, setSelectedChildId] = useState();

  const [isLoading, setLoading] = useState(false);
  const childrenRef = collection(db, "parents", email, "children");
  const getChildrenName = async () => {
    try {
      setLoading(true);
      const data = await getDocs(childrenRef);
      const filteredData = data.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
      }));
      console.log("Children Name : ", filteredData);
      setChildren(filteredData);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getChildrenName();
  }, []);

  if (isLoading) {
    return <AppLoaders />;
  }

  return (
    <UserContext.Provider value={[email, setEmail]}>
      <ChildrenContext.Provider value={[children, setChildren]}>
        <SelectedChildIdContext.Provider
          value={[selectedChildId, setSelectedChildId]}
        >
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="SelectChild"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="SelectChild" component={SelectChildScreen} />
              <Stack.Screen name="AddChild" component={AddChildScreen} />
              <Stack.Screen name="TabNavigation" component={TabNavigation} />
            </Stack.Navigator>
          </NavigationContainer>
        </SelectedChildIdContext.Provider>
      </ChildrenContext.Provider>
    </UserContext.Provider>
  );
}
