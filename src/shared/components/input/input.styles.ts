import { StyleSheet } from "react-native";
import { COLORS } from "~/shared/styles/colors";
import { FONTS } from "~/shared/styles/fonts";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    alignItems: "flex-start",
    width: "100%",
  },
  label: {
    fontFamily: FONTS.inter.regular,
    fontSize: 10,
    color: COLORS.gray,
  },
  input: {
    height: 26,
    fontFamily: FONTS.inter.regular,
    fontSize: 16,
    color: COLORS.black,
    width: "100%",
  },
});
