import { THEME } from "@/src/theme/global";
import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  containerFooter: {
    alignItems: "center",
    marginBottom: THEME.SIZES.SIZE_SM_18,
  },

  textFooter: {
    fontSize: THEME.SIZES.SIZE_XXXS_12,
    color: THEME.COLORS.GRAY_200,
    fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_400,
  },
});
