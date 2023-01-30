import { StyleSheet } from "react-native";
import theme from "./theme";

export const ConstStyles = StyleSheet.create({
  shadow: {
    shadowColor: theme.BLACK,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 7,
  },
  pageTitle: {
    fontWeight: "700",
    fontSize: 48,
    color: theme.BLACK,
    marginBottom: 16,
  },
  titleYellow: {
    color: theme.YELLOW,
  },
});
