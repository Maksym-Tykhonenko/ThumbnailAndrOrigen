import { StyleSheet } from "react-native";
import { FONTS } from "~/shared/styles/fonts";
import { COLORS } from "~/shared/styles/colors";

export const styles = StyleSheet.create({
  container: {
    padding: 24,
    gap: 20,
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
  },
  text: {
    fontFamily: FONTS.inter.regular,
    fontSize: 18,
    color: COLORS.black,
  },
});
