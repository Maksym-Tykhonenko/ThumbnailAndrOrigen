import { StyleSheet } from "react-native";
import { FONTS } from "~/shared/styles/fonts";
import { COLORS } from "~/shared/styles/colors";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  containerDisabled: {
    opacity: 0.4,
  },
  text: {
    fontFamily: FONTS.inter.semiBold,
    fontSize: 20,
    color: COLORS.white,
    position: "absolute",
    zIndex: 5,
  },
  btnDisabled: {
    width: 58,
    height: 58,
    backgroundColor: COLORS.white,
    borderRadius: 50,
  },
  textDisabled: {
    color: COLORS.black,
  },
});
