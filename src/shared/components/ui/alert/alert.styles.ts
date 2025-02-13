import { StyleSheet } from "react-native";
import { COLORS } from "~/shared/styles/colors";
export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  blur: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#14141480",
  },
  alertBox: {
    paddingHorizontal: 22,
    paddingVertical: 34,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    alignItems: "center",
  },
});
