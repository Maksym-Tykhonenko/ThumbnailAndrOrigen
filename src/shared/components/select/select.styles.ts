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
  item: {
    fontFamily: FONTS.inter.regular,
    fontSize: 16,
    color: COLORS.black,
  },
  select: {
    height: 26,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    gap: 1,
    alignItems: "flex-end",
  },
});
