import colors from "./colors";
import { Platform } from "react-native";

export default {
  colors,
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 4 },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
      },
      android: {
        elevation: 9,
      },
    }),
  },
  shadowLight: {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  shadowDark: {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
      },
      android: {
        elevation: 20,
      },
    }),
  },
  border: {
    width: "100%",
    borderWidth: 1,
    borderColor: colors.lightGrey,
  },
  floatingBtn: {
    width: 50,
    height: 50,
    position: "absolute",
    bottom: 25,
    right: 25,
    borderRadius: 30,
    backgroundColor: "#666666",
    alignItems: "center",
    justifyContent: "center",
  },
};
