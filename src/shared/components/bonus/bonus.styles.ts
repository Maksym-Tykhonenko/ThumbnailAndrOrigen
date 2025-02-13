import { StyleSheet } from "react-native";
import { FONTS } from "~/shared/styles/fonts";
import { COLORS } from "~/shared/styles/colors";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    gap: 20,
    alignItems: "flex-start",
    width: "100%",
    backgroundColor: COLORS.darkPurple,
    borderRadius: 20,
  },
  title: {
    fontFamily: FONTS.inter.semiBold,
    fontSize: 20,
    color: COLORS.white,
    paddingHorizontal: 24,
  },
  btnContainer: {
    paddingHorizontal: 24,
    width: "100%",
    flex: 1,
  },
  bonusContainer: {
    width: "100%",
    paddingHorizontal: 19,
  },
  bonusItemContainer: {
    marginHorizontal: 5,
    height: 90,
    width: 67,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderRadius: 15,
  },
  bonusText: {
    fontFamily: FONTS.inter.semiBold,
    fontSize: 12,
    color: COLORS.white,
  },
  complete: {
    backgroundColor: "#F6F6F64D",
  },
  current: {
    borderWidth: 2,
    borderColor: COLORS.white,
  },
  disabled: {
    opacity: 0.2,
    backgroundColor: "#F6F6F64D",
  },
});
