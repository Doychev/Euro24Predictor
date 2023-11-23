import { Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get("window");

export const Colors = {
  Secondary: "#FF4500",
  Primary: "#167E8B",
  Blue: "#125C81",
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
  negativeText: {
    fontFamily: "Montserrat-Bold",
    fontSize: 14,
    color: Colors.Secondary,
  },
  button: {
    backgroundColor: "#FF4500", // Button color
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
  },
  buttonSizing: {
    alignSelf: "center",
    width: width * 0.4,
    marginVertical: 10,
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
