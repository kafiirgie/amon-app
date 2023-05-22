import { useState, useEffect } from "react";
import { View, Text, TextInput, Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useRoute } from "@react-navigation/native";
import { doc, getDoc } from "firebase/firestore";

import { auth, db } from "../config/firebase";
import HomeScreen from "../screens/tabMenu/Home";
import ActivityScreen from "../screens/tabMenu/Activity";
import AchievementScreen from "../screens/tabMenu/Achievement";
import ProfileScreen from "../screens/tabMenu/Profile";
import { images, icons, COLORS, FONT, SIZES } from "../constants";
import { AppLoaders } from "../components";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  const route = useRoute();
  const userEmail = auth.currentUser.email;
  const selectedChild = route.params?.selectedChild;
  const [childData, setChildData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const querySnapshot = await getDoc(
          doc(
            db,
            "parents",
            userEmail,
            "children",
            selectedChild.trim().toLowerCase()
          )
        );
        const fetchedData = querySnapshot.data();
        console.log("Child Data : ", fetchedData);
        setChildData(fetchedData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (isLoading) {
    return <AppLoaders />;
  }
  return (
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
        initialParams={{ childData: childData }}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Image
                source={focused ? icons.homeColored : icons.homeGrayed}
                style={{ width: 24, height: 24 }}
              />
              <Text
                style={focused ? styles.labelFocused : styles.labelUnfocused}
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
        initialParams={{ childData: childData }}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Image
                source={focused ? icons.activityColored : icons.activityGrayed}
                style={{ width: 24, height: 24 }}
              />
              <Text
                style={focused ? styles.labelFocused : styles.labelUnfocused}
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
        initialParams={{ childData: childData }}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Image
                source={focused ? icons.achieveColored : icons.achieveGrayed}
                style={{ width: 24, height: 24 }}
              />
              <Text
                style={focused ? styles.labelFocused : styles.labelUnfocused}
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
        initialParams={{ childData: childData }}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Image
                source={focused ? icons.profileColored : icons.profileGrayed}
                style={{ width: 24, height: 24 }}
              />
              <Text
                style={focused ? styles.labelFocused : styles.labelUnfocused}
              >
                Profil
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 24,
    marginHorizontal: 24,
    height: 68,
    borderRadius: 16,
    shadowColor: COLORS.neutral2,
    shadowOpacity: 0.02,
    shadowOffset: {
      width: 8,
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
    fontFamily: FONT.regular,
    color: COLORS.primary,
    fontSize: SIZES.small,
  },
  labelUnfocused: {
    fontFamily: FONT.regular,
    color: COLORS.neutral2,
    fontSize: SIZES.small,
  },
});
