import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Colors, globalStyles } from "../globalStyles";
import Header from "../components/Header";
import { supabase } from "../initSupabase";
import { logNicely } from "../util/LoggingUtil";

export default function CreateLeague({ navigation }) {
  const [initialLoading, setInitialLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [allowedToCreate, setAllowedToCreate] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const result = await supabase.auth.getUser();
      const user = result.data.user;
      const { data: profiles } = await supabase
        .from("UserProfiles")
        .select()
        .eq("userId", user.id);
      if (profiles?.length) {
        setAllowedToCreate(profiles[0].allowedToCreateLeagues);
      }
      setInitialLoading(false);
    };
    getUser();
  }, []);

  return (
    <SafeAreaView style={globalStyles.container}>
      {initialLoading || loading ? (
        <View style={globalStyles.loadingOverlay}>
          <ActivityIndicator size="large" color={Colors.Secondary} />
        </View>
      ) : null}
      <Header hasBack title="Create a league" />
      {allowedToCreate ? <Text>Allowed</Text> : null}
      {!allowedToCreate && !initialLoading ? (
        <Text style={[globalStyles.negativeText, styles.warning]}>
          You are not allowed to create new leagues. Please contact the
          administrators to be granted access.
        </Text>
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  warning: {
    padding: 10,
    textAlign: "center",
  },
});
