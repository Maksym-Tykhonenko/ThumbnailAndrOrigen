import { StyleSheet } from "react-native";
import { COLORS } from "~/shared/styles/colors";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: 132,
    height: 132,
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: COLORS.white,
    borderRadius: "50%",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  editBtn: {
    position: "absolute",
    zIndex: 5,
    right: 8,
    bottom: 6,
  },
});
