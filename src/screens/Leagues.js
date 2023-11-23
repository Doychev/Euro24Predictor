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
import { logNicely } from "../util/LoggingUtil";
import { supabase } from "../initSupabase";
import Header from "../components/Header";
import { Button } from "@rneui/themed";

export default function Leagues({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [currentLeagues, setCurrentLeagues] = useState([]);
  const [invites, setInvites] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchLeagues = async () => {
      const userResult = await supabase.auth.getUser();
      const user = userResult.data.user;

      const { data } = await supabase
        .from("Leagues")
        .select()
        .contains("participantIds", [user.id]);
      setCurrentLeagues(data);
      setLoading(false);
    };

    const fetchProfile = async () => {
      const userResult = await supabase.auth.getUser();
      const user = userResult.data.user;

      const { data } = await supabase
        .from("UserProfiles")
        .select()
        .eq("userId", user.id);
      setUser(data?.[0]);
    };

    fetchLeagues();
    fetchProfile();
  }, []);

  const onPressLeague = (league) => {
    navigation.navigate("LeagueDetails", { league });
  };

  const onPressAcceptInvite = (invite) => {
    //TODO
  };

  const onPressDeclineInvite = (invite) => {
    //TODO
  };

  const onCreateLeague = () => {
    navigation.navigate("CreateLeague");
    //TODO
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      {loading ? (
        <View style={globalStyles.loadingOverlay}>
          <ActivityIndicator size="large" color={Colors.Secondary} />
        </View>
      ) : null}
      <Header hasBack title="Leagues" />
      {!loading && currentLeagues.length == 0 && (
        <Text>You haven't joined any leagues</Text>
      )}
      {currentLeagues.map((league) => (
        <TouchableOpacity
          key={"league" + league.id}
          onPress={() => onPressLeague(league)}
        >
          <Text>{league.name}</Text>
        </TouchableOpacity>
      ))}
      {invites.length > 0 && <Text>Invites</Text>}
      {invites.map((invite) => (
        <>
          <Text>{invite.name}</Text>
          <Text onPress={() => onPressAcceptInvite(invite)}>Accept</Text>
          <Text onPress={() => onPressDeclineInvite(invite)}>Decline</Text>
        </>
      ))}
      {user?.allowedToCreateLeagues && (
        <Button
          onPress={onCreateLeague}
          title="Create a league"
          style={globalStyles.buttonSizing}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  something: {
    width: 1,
  },
});
