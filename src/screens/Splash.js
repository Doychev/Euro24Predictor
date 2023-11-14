import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import { globalStyles } from "../globalStyles";

export default function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={globalStyles.container}>
      {/* something to act as a splash screen */}
      <Image source={require("../../assets/splash_illu.png")} />
    </SafeAreaView>
  );
}
