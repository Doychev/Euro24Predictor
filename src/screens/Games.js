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
import Header from "../components/Header";
import { supabase } from "../initSupabase";
import { logNicely } from "../util/LoggingUtil";

export default function Games({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const { data } = await supabase.from("Games").select();
      setGames(data);
      setLoading(false);
    };
    fetchGames();
  }, []);

  const onPressGame = (game) => {
    //TODO potentially problematic
    navigation.navigate("Predict", { game });
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      {loading ? (
        <View style={globalStyles.loadingOverlay}>
          <ActivityIndicator size="large" color={Colors.Secondary} />
        </View>
      ) : null}
      <Header hasBack title="Schedule" />
      {games.map((game) => (
        <TouchableOpacity
          key={"game" + game.id}
          onPress={() => onPressGame(game)}
        >
          <Text>
            {game.team1} - {game.team2}
          </Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  something: {
    width: 1,
  },
});
