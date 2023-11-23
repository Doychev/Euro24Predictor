import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { Colors, globalStyles } from "../globalStyles";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";

const { width } = Dimensions.get("window");

export default function Header({ hasBack, title, hideOptions }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {hasBack && (
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
        )}
      </View>
      <Text style={[globalStyles.headline, styles.title]}>
        {title ?? "Euro24 Predictor"}
      </Text>
      <View style={styles.iconContainer}>
        {!hideOptions && (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Options");
            }}
          >
            <Icon
              name="settings-outline"
              type="ionicon"
              size={30}
              color={Colors.Primary}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    flex: 8,
    textAlign: "center",
  },
});
