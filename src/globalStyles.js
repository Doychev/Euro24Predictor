import { StyleSheet } from "react-native";

export const Colors = {
  Secondary: "#FF4500",
  Primary: "#167E8B",
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#167E8B", // Primary color
    padding: 16,
  },
  headline: {
    fontFamily: "Montserrat-Bold",
    fontSize: 24,
    color: Colors.Primary,
    // color: "white",
  },
  button: {
    backgroundColor: "#FF4500", // Button color
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "Montserrat-Bold",
    fontSize: 18,
    color: "white",
  },
  // Add more styles for specific components
});
