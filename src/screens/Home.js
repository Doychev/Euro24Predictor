import React, { useEffect, useState } from "react";
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
import { logNicely } from "../util/LoggingUtil";
import Header from "../components/Header";

export default function Home({ navigation }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkForProfile = async () => {
      const userResult = await supabase.auth.getUser();
      const user = userResult.data.user;
      const { data: profiles } = await supabase
        .from("UserProfiles")
        .select()
        .eq("userId", user.id);
      if (!profiles.length) {
        await supabase.from("UserProfiles").insert({
          userUid: user.id,
          allowedToCreateLeagues: false,
        });
      }
    };
    checkForProfile();
  }, []);

  const onPressGames = () => {
    navigation.navigate("Games");
  };

  const onPressLeagues = () => {
    navigation.navigate("Leagues");
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      {loading ? (
        <View style={globalStyles.loadingOverlay}>
          <ActivityIndicator size="large" color={Colors.Secondary} />
        </View>
      ) : null}
      <Header />
      <TouchableOpacity onPress={onPressGames}>
        <Text>Schedule</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressLeagues}>
        <Text>Leagues</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  something: {
    width: 1,
  },
});
