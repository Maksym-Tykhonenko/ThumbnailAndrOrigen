import { StyleSheet } from "react-native";
import { FONTS } from "~/shared/styles/fonts";
import { COLORS } from "~/shared/styles/colors";

export const styles = StyleSheet.create({
  container: {
    gap: 40,
    alignItems: "center",
    width: "100%",
    position: "relative",
  },
  text: {
    position: "absolute",
    top: -26,
    left: 0,
    zIndex: 5,
    fontFamily: FONTS.inter.regular,
    fontSize: 14,
    color: COLORS.black,
    opacity: 0.5,
  },
  formContainer: {
    gap: 32,
    width: "100%",
  },
  inputsContentContainer: {
    gap: 24,
    width: "100%",
  },
  inputsContainer: {
    gap: 16,
    width: "100%",
  },
  rowInputsContainer: {
    width: "100%",
    gap: 16,
    alignItems: "center",
    flexDirection: "row",
  },
  inputsBtnContainer: {
    flexDirection: "row",
    gap: 40,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btnContainer: {
    gap: 12,
    alignItems: "center",
    width: "100%",
  },
  underlineBtn: {
    borderBottomWidth: 1,
    borderColor: COLORS.white,
    flexDirection: "row",
    gap: 8,
    alignItems: "flex-start",
  },
  btnText: {
    fontFamily: FONTS.inter.medium,
    fontSize: 18,
    color: COLORS.white,
  },
  pressed: {
    opacity: 0.7,
  },
  alertContainer: {
    gap: 25,
    alignItems: "center",
    width: "100%",
  },
  alertText: {
    maxWidth: 250,
    fontFamily: FONTS.openSans.medium,
    color: COLORS.black,
    fontSize: 24,
    textAlign: "center",
  },
  alertBtnContainer: {
    gap: 12,
    width: "100%",
  },
});
