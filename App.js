import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "./src/globalStyles";
import { useFonts } from "expo-font";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Splash from "./src/screens/Splash";
import Login from "./src/screens/Login";
import Registration from "./src/screens/Registration";
import ForgotPassword from "./src/screens/ForgotPassword";
import Home from "./src/screens/Home";

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
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Home" component={Home} />
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
        initialRouteName="Splash"
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
