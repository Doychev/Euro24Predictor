import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../globalStyles";
import { supabase } from "../initSupabase";
import { logNicely } from "../util/LoggingUtil";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Splash({ navigation }) {
  useEffect(() => {
    //TODO
    const executeRefresh = async () => {
      let session = await AsyncStorage.getItem("session");
      if (session) {
        session = JSON.parse(session);
        if (session.refresh_token) {
          const { data, error } = await supabase.auth.refreshSession(
            session.refresh_token
          );
          if (error) {
            navigation.navigate("Login");
          }
        }
      } else {
        setTimeout(() => {
          navigation.navigate("Login");
        }, 1000);
      }
    };
    executeRefresh();
  }, []);

  //TODO potentially called multiple times
  //maybe handle all auth events at once?
  supabase.auth.onAuthStateChange((event) => {
    if (event == "SIGNED_IN") {
      setTimeout(() => {
        navigation.navigate("Home");
      }, 1000);
    }
  });

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
