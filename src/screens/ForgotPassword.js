import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { globalStyles } from "../globalStyles";

export default function ForgotPassword({ navigation }) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <Text>Forgot Pass</Text>
      <Text style={styles.temp} onPress={() => navigation.navigate("Login")}>
        Login
      </Text>
      <Text
        style={styles.temp}
        onPress={() => navigation.navigate("Registration")}
      >
        Registration
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  temp: {
    marginVertical: 16,
  },
});
