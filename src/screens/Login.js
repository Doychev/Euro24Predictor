import React, { useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Colors, globalStyles } from "../globalStyles";
import { Button, Input } from "@rneui/themed";
import { supabase } from "../initSupabase";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("martin.doychev.93@gmail.com");
  const [password, setPassword] = useState("admin123");
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
        await AsyncStorage.setItem("session", JSON.stringify(data.session));
        await AsyncStorage.setItem("user", JSON.stringify(data.user));
        //TODO: clean backstack
        setLoading(false);
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
