import { THEME } from "@/src/theme/global";
import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "space-between",

    flex: 1,
  },

  contaierDisplay: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: THEME.SIZES.SIZE_XXXS_12,
  },

  contaierDisplayText: {
    gap: 8,
  },

  contaierDisplayButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: 5,
  },

  button: {
    width: 45,
    height: 45,
    borderRadius: THEME.SIZES.SIZE_RADIUS_15,
    alignItems: "center",
    justifyContent: "center",
  },
});
