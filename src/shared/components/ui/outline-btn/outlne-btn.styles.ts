import { StyleSheet } from "react-native";
import { COLORS } from "~/shared/styles/colors";
import { FONTS } from "~/shared/styles/fonts";

export const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    borderColor: COLORS.white,
    borderWidth: 2,
    paddingHorizontal: 17,
  },
  text: {
    fontFamily: FONTS.inter.semiBold,
    fontSize: 16,
    color: COLORS.white,
  },
});
