import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "./src/globalStyles";
import { useFonts } from "expo-font";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Login from "./src/screens/Login";

const stackScreenOptions = {
  headerShown: false,
  animationEnabled: false,
};
const generalScreenOptions = {
  swipeEnabled: false,
  headerShown: false,
  drawerPosition: "right",
  drawerType: "front",
};

const Stack = createStackNavigator();

function GetStackNavigator() {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen name="Login" component={Login} />
      {/* <Stack.Screen name="Login" component={Login} /> */}
    </Stack.Navigator>
  );
}

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Italic": require("./assets/fonts/Montserrat-Italic.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={generalScreenOptions}
        backBehavior="history"
      >
        <Stack.Screen name="Euro24Predictor" component={GetStackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
