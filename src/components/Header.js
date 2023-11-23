import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors, globalStyles } from "../globalStyles";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";

export default function Header({ hasBack, title }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {hasBack ? (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icon
              name="caret-back"
              type="ionicon"
              size={30}
              color={Colors.Primary}
            />
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </View>
      <Text style={[globalStyles.headline, styles.title]}>
        {title ?? "Euro24 Predictor"}
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Options");
        }}
      >
        <View style={styles.iconContainer}>
          <Icon
            name="settings-outline"
            type="ionicon"
            size={30}
            color={Colors.Primary}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    borderBottomWidth: 0.2,
    borderColor: Colors.Primary,
    marginBottom: 6,
  },
  iconContainer: {
    flex: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    flex: 80,
    textAlign: "center",
  },
});
