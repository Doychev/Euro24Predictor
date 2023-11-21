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
        let result = await supabase
          .from("UserProfiles")
          .insert({
            userUid: user.id,
            allowedToCreateLeagues: false,
          })
          .select();
      }
    };
    checkForProfile();
  }, []);

  const onPressOptions = () => {
    navigation.navigate("Options");
  };

  const onPressCreate = () => {
    navigation.navigate("CreateLeague");
  };

  const onPressGames = () => {
    navigation.navigate("Games");
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      {loading ? (
        <View style={globalStyles.loadingOverlay}>
          <ActivityIndicator size="large" color={Colors.Secondary} />
        </View>
      ) : null}
      <TouchableOpacity onPress={onPressOptions}>
        <Text>Options</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressCreate}>
        <Text>Create League</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressGames}>
        <Text>View Games</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  something: {
    width: 1,
  },
});
