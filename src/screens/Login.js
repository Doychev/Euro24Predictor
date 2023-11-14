import React from "react";
import { SafeAreaView, Text } from "react-native";
import { globalStyles } from "../globalStyles";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async () => {
    setLoading(true);
    const { user, error } = await supabase.auth.signIn({
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
      <Text>test</Text>
    </SafeAreaView>
  );
}
