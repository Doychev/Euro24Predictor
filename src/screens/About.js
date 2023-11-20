import React, { useState } from "react";
import {
  ActivityIndicator,
  Linking,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Colors, globalStyles } from "../globalStyles";
import Header from "../components/Header";

export default function About({ navigation }) {
  const [loading, setLoading] = useState(false);

  const onPressDonate = () => {
    Linking.openURL("https://revolut.me/martensio");
  };

  //TODO add qr code
  return (
    <SafeAreaView style={globalStyles.container}>
      {loading ? (
        <View style={globalStyles.loadingOverlay}>
          <ActivityIndicator size="large" color={Colors.Secondary} />
        </View>
      ) : null}
      <Header />
      <Text>This app has been created by Martin Doychev.</Text>
      <Text>
        If you want to support the developer, please follow this link:
      </Text>
      <Text onPress={onPressDonate}>revolut.me/martensio</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  something: {
    width: 1,
  },
});
