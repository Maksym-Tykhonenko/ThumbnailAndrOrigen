import { StyleSheet } from "react-native";
import { COLORS } from "~/shared/styles/colors";
import { FONTS } from "~/shared/styles/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 40,
  },
  inventory: {
    gap: 32,
    alignItems: "center",
  },
  itemContainer: {
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    minHeight: 170,
  },
  heading: {
    fontFamily: FONTS.openSans.medium,
    fontSize: 32,
    color: COLORS.white,
    alignItems: "center",
  },
  blur: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#14141480",
  },
});
