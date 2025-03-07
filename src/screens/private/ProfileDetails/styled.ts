import { THEME } from "@/src/theme/global";
import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  contianer: {
    flex: 1,
    padding: THEME.SIZES.SIZE_MARGIN_HORIZONTA_24,
    justifyContent: "space-between",
  },

  contianerSection: {
    justifyContent: "center",
    flex: 1,
    gap: THEME.SIZES.SIZE_XS_16,
  },

  bodyTextSection: {
    gap: THEME.SIZES.SIZE_XXXS_12,
  },
});
