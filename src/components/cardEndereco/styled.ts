import { THEME } from "@/src/theme/global";
import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: THEME.SIZES.SIZE_RADIUS_15,
    borderColor: THEME.COLORS.GRAY_100,
    padding: THEME.SIZES.SIZE_MARGIN_HORIZONTA_24,
  },

  contaierDisplay: {
    justifyContent: "space-between",
    flexDirection: "row",
    gap: THEME.SIZES.SIZE_XXXS_12,
  },

  contaierDisplayText: {
    gap: 8,
    width: "70%",
  },

  contaierDisplayButton: {
    // flexDirection: "",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    gap: 5,
  },

  button: {
    width: 45,
    height: 45,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
