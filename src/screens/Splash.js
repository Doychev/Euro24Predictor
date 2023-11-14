import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../globalStyles";

export default function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 2000);
  }, []);

  return (
    <View style={globalStyles.container}>
      <Image
        style={styles.splashImage}
        resizeMode="contain"
        source={require("../../assets/splash_illu.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  splashImage: {
    width: "100%",
  },
});
