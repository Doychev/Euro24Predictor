import { StyleSheet } from "react-native";

export const Colors = {
  Secondary: "#FF4500",
  Primary: "#167E8B",
  Gray: "#ADAAA8",
  GrayTransparent: "#ADAAA866",
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.GrayTransparent,
  },
  // Add more styles for specific components
});
