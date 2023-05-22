import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SelectChildScreen from "../screens/SelectChild";
import AddChildScreen from "../screens/AddChild";
import TabNavigation from "./TabNavigation";

const Stack = createStackNavigator();

export default function UserNavigation() {
  return (
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
  );
}
