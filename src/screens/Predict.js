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
import { Button, Input } from "react-native-elements";

export default function Predict({ navigation, route }) {
  const {
    params: { game },
  } = route;
  const [loading, setLoading] = useState(true);
  const [userPrediction, setUserPrediction] = useState(null);
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);

  useEffect(() => {
    const fetchPredictions = async () => {
      const userResult = await supabase.auth.getUser();
      const user = userResult.data.user;

      const { data } = await supabase
        .from("Predictions")
        .select()
        .eq("userId", user.id)
        .eq("gameId", game.id);
      if (data.length) setUserPrediction(data[0]);
      setLoading(false);
    };
    fetchPredictions();
  }, []);

  const handleSubmit = async () => {
    setLoading(true);

    //TODO export those calls
    const userResult = await supabase.auth.getUser();
    const user = userResult.data.user;

    //TODO write better policies on supabase
    await supabase.from("Predictions").upsert(
      {
        id: userPrediction?.id,
        gameId: game.id,
        userId: user.id,
        result1: score1,
        result2: score2,
      },
      { onConflict: "id" }
    );
    navigation.goBack();
    setLoading(false);
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      {loading ? (
        <View style={globalStyles.loadingOverlay}>
          <ActivityIndicator size="large" color={Colors.Secondary} />
        </View>
      ) : null}
      <Header />
      {userPrediction ? <Text>You already predicted this game.</Text> : null}
      <Input
        value={score1}
        onChangeText={setScore1}
        placeholder="Team1 score"
        keyboardType="number-pad"
      />
      <Input
        value={score2}
        onChangeText={setScore2}
        placeholder="Team1 score"
        keyboardType="number-pad"
      />
      <Button
        onPress={handleSubmit}
        title={userPrediction ? "Edit" : "Submit"}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  something: {
    width: 1,
  },
});
