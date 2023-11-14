import React from "react";
import { SafeAreaView, Text } from "react-native";
import { globalStyles } from "../globalStyles";
import { supabase } from "../initSupabase";

export default function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const register = async () => {
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
      alert(error.message);
    }
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <Text>Registration</Text>
    </SafeAreaView>
  );
}
