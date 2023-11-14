import React, { useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Colors, globalStyles } from "../globalStyles";
import { Button, Input } from "react-native-elements";
import { supabase } from "../initSupabase";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (!error && !data) {
        setLoading(false);
        console.warn("Check your email for the login link!");
      } else if (error) {
        setLoading(false);
        console.warn(error.message);
      } else {
        //store this in async
        //clean backstack
        navigation.navigate("Home");
      }
    } catch (e) {
      setLoading(false);
      console.warn(e);
    }
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <Text>Login</Text>
      <Text
        style={styles.temp}
        onPress={() => navigation.navigate("Registration")}
      >
        Registration
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
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Button onPress={handleLogin} title="Login" />

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
