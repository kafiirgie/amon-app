import { useState, useEffect, useContext } from "react";
import { View, Text, TextInput, Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useRoute } from "@react-navigation/native";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
} from "firebase/firestore";

import { db } from "../config/firebase";
import HomeScreen from "../screens/tabMenu/Home";
import ActivityScreen from "../screens/tabMenu/Activity";
import AchievementScreen from "../screens/tabMenu/Achievement";
import ProfileScreen from "../screens/tabMenu/Profile";
import { icons, COLORS, FONTS, SIZES } from "../constants";
import { AppLoaders } from "../components";
import {
  UserContext,
  SelectedChildIdContext,
  ChildDataContext,
  GoalsContext,
  MissionsContext,
  SavingsContext,
} from "../context";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  const [email, setEmail] = useContext(UserContext);
  const [selectedChildId, setSelectedChildId] = useContext(
    SelectedChildIdContext
  );
  const [childData, setChildData] = useState();
  const [goals, setGoals] = useState([]);
  const [missions, setMissions] = useState([]);
  const [savings, setSavings] = useState([]);

  const [isLoading, setLoading] = useState(false);
  const childRef = doc(db, "parents", email, "children", selectedChildId);
  const getChildData = async () => {
    try {
      setLoading(true);
      const docSnap = await getDoc(childRef);
      const data = docSnap.data();
      setChildData(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const goalsRef = collection(
    db,
    "parents",
    email,
    "children",
    selectedChildId,
    "goals"
  );
  const getGoals = async () => {
    try {
      setLoading(true);
      const q = query(goalsRef, where("is_completed", "==", false));
      const data = await getDocs(q);
      const filteredData = data.docs.map((doc) => {
        const { end_date } = doc.data();
        const end_date_converted = end_date.toDate();
        return {
          ...doc.data(),
          id: doc.id,
          end_date: end_date_converted,
        };
      });
      setGoals(filteredData);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const missionsRef = collection(
    db,
    "parents",
    email,
    "children",
    selectedChildId,
    "missions"
  );
  const getMissions = async () => {
    try {
      setLoading(true);
      const q = query(missionsRef, where("is_done", "==", false));
      const data = await getDocs(q);
      const filteredData = data.docs.map((doc) => {
        const { end_date } = doc.data();
        const end_date_converted = end_date.toDate();
        return {
          ...doc.data(),
          id: doc.id,
          end_date: end_date_converted,
        };
      });
      setMissions(filteredData);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  // const getSavings = async () => {}

  useEffect(() => {
    getChildData();
    getGoals();
    getMissions();
  }, []);

  if (isLoading) {
    return <AppLoaders />;
  }
  return (
    <ChildDataContext.Provider value={[childData, setChildData]}>
      <GoalsContext.Provider value={[goals, setGoals]}>
        <MissionsContext.Provider value={[missions, setMissions]}>
          <SavingsContext.Provider value={[savings, setSavings]}>
            <Tab.Navigator
              initialRouteName="Home"
              screenOptions={{
                headerShown: false,
                tabBarStyle: styles.tabBar,
                tabBarShowLabel: false,
              }}
            >
              <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  tabBarIcon: ({ focused }) => (
                    <View style={styles.iconContainer}>
                      <Image
                        source={focused ? icons.homeColored : icons.homeGrayed}
                        style={{ width: 24, height: 24 }}
                      />
                      <Text
                        style={
                          focused ? styles.labelFocused : styles.labelUnfocused
                        }
                      >
                        Beranda
                      </Text>
                    </View>
                  ),
                }}
              />
              <Tab.Screen
                name="Activity"
                component={ActivityScreen}
                options={{
                  tabBarIcon: ({ focused }) => (
                    <View style={styles.iconContainer}>
                      <Image
                        source={
                          focused ? icons.activityColored : icons.activityGrayed
                        }
                        style={{ width: 24, height: 24 }}
                      />
                      <Text
                        style={
                          focused ? styles.labelFocused : styles.labelUnfocused
                        }
                      >
                        Aktivitas
                      </Text>
                    </View>
                  ),
                }}
              />
              <Tab.Screen
                name="Achievement"
                component={AchievementScreen}
                options={{
                  tabBarIcon: ({ focused }) => (
                    <View style={styles.iconContainer}>
                      <Image
                        source={
                          focused ? icons.achieveColored : icons.achieveGrayed
                        }
                        style={{ width: 24, height: 24 }}
                      />
                      <Text
                        style={
                          focused ? styles.labelFocused : styles.labelUnfocused
                        }
                      >
                        Capaian
                      </Text>
                    </View>
                  ),
                }}
              />
              <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                  tabBarIcon: ({ focused }) => (
                    <View style={styles.iconContainer}>
                      <Image
                        source={
                          focused ? icons.profileColored : icons.profileGrayed
                        }
                        style={{ width: 24, height: 24 }}
                      />
                      <Text
                        style={
                          focused ? styles.labelFocused : styles.labelUnfocused
                        }
                      >
                        Profil
                      </Text>
                    </View>
                  ),
                }}
              />
            </Tab.Navigator>
          </SavingsContext.Provider>
        </MissionsContext.Provider>
      </GoalsContext.Provider>
    </ChildDataContext.Provider>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 24,
    marginHorizontal: 24,
    height: 68,
    borderRadius: 16,
    shadowColor: COLORS.neutral,
    shadowRadius: 24,
    shadowOpacity: 0.9,
    shadowOffset: {
      height: 8,
    },
    paddingBottom: 8,
  },
  iconContainer: {
    position: "absolute",
    top: 16,
    alignItems: "center",
  },
  labelFocused: {
    fontFamily: FONTS.regular,
    color: COLORS.primary,
    fontSize: SIZES.small,
  },
  labelUnfocused: {
    fontFamily: FONTS.regular,
    color: COLORS.neutral2,
    fontSize: SIZES.small,
  },
});
