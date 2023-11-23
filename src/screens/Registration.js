import React, { useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Colors, globalStyles } from "../globalStyles";
import { supabase } from "../initSupabase";
import { Button, Input } from "@rneui/themed";

export default function Registration({ navigation }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setLoading(true);
    const { user, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (!error && !user) {
      setLoading(false);
      console.warn("Check your email for the login link!");
    }
    if (error) {
      setLoading(false);
      console.warn(error.message);
    }
    await supabase.from("UserProfiles").insert({
      userUid: user.id,
      allowedToCreateLeagues: false,
      username,
    });
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <Text>Registration</Text>
      <Text style={styles.temp} onPress={() => navigation.navigate("Login")}>
        Login
      </Text>
      <Text
        style={styles.temp}
        onPress={() => navigation.navigate("ForgotPassword")}
      >
        Forgot Pass
      </Text>

      <Input
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Input
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
        autoCapitalize="none"
      />
      <Input
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Button onPress={handleRegister} title="Register" />

      {loading ? (
        <View style={globalStyles.loadingOverlay}>
          <ActivityIndicator size="large" color={Colors.Secondary} />
        </View>
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  temp: {
    marginVertical: 16,
  },
});
