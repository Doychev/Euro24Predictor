import React, { useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors, globalStyles } from "../globalStyles";
import { supabase } from "../initSupabase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "../components/Header";
import { Button } from "@rneui/themed";

export default function Options({ navigation }) {
  const [loading, setLoading] = useState(false);

  supabase.auth.onAuthStateChange((event) => {
    if (event == "SIGNED_OUT") {
      setLoading(false);
      navigation.navigate("Login");
    }
  });

  const onPressLogout = async () => {
    setLoading(true);
    await AsyncStorage.removeItem("session");
    await AsyncStorage.removeItem("user");
    supabase.auth.signOut();
  };

  const onPressAbout = async () => {
    navigation.navigate("About");
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      {loading ? (
        <View style={globalStyles.loadingOverlay}>
          <ActivityIndicator size="large" color={Colors.Secondary} />
        </View>
      ) : null}
      <Header hasBack title="Options" />
      <TouchableOpacity onPress={onPressAbout}>
        <Text>About</Text>
      </TouchableOpacity>
      <Button
        onPress={onPressLogout}
        title={"Sign out"}
        style={globalStyles.buttonSizing}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
