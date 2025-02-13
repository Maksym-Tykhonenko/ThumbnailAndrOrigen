import { StyleSheet } from "react-native";
import { COLORS } from "~/shared/styles/colors";
import { FONTS } from "~/shared/styles/fonts";
export const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  outerContainer: {
    flex: 1,
    position: "relative",
  },
  innerContainer: {
    justifyContent: "flex-end",
    flex: 1,
    gap: 40,
    alignItems: "flex-start",
    paddingHorizontal: 24,
  },
  image: {
    width: 435,
    height: 435,
    position: "absolute",
    transform: [{ rotate: "344deg" }],
    zIndex: 5,
    top: 30,
    left: 180,
  },
  logo: {
    marginLeft: 24,
  },
  heading: {
    fontFamily: FONTS.openSans.medium,
    fontSize: 48,
    color: COLORS.white,
  },
  text: {
    fontFamily: FONTS.inter.regular,
    color: COLORS.white,
    fontSize: 16,
  },
});
