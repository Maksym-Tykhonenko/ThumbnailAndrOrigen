import { StyleSheet } from "react-native";
import { FONTS } from "~/shared/styles/fonts";

export const styles = StyleSheet.create({
  text: {
    fontFamily: FONTS.inter.regular,
    fontSize: 12,
  },
  textContainer: {
    gap: 2,
    alignItems: "center",
  },
  border: {
    width: 5,
    height: 2,
    borderRadius: 2,
  },
});
