import React, { useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import { Colors, globalStyles } from "../globalStyles";
import Header from "../components/Header";

export default function LeagueDetails({ navigation }) {
  const [loading, setLoading] = useState(false);

  return (
    <SafeAreaView style={globalStyles.container}>
      {loading ? (
        <View style={globalStyles.loadingOverlay}>
          <ActivityIndicator size="large" color={Colors.Secondary} />
        </View>
      ) : null}
      <Header hasBack title="League Details" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  something: {
    width: 1,
  },
});
