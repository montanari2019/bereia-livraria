import { THEME } from "@/src/theme/global";
import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  sectionContainer: {
    flex: 1,

    gap: THEME.SIZES.SIZE_XSS_14,
  },

  cardContainer: {
    padding: THEME.SIZES.SIZE_MARGIN_HORIZONTA_24,
    borderWidth: 1,
    borderColor: THEME.COLORS.GRAY_100,
    borderRadius: THEME.SIZES.SIZE_RADIUS_15,
    gap: THEME.SIZES.SIZE_XSS_14,
  },

  containerItens: {
    gap: THEME.SIZES.SIZE_XSS_14,
  },
  totalizerText: {
    fontSize: THEME.SIZES.SIZE_XS_16,
    fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_700,
    color: THEME.COLORS.GRAY_400,
  },

  dateText: {
    color: THEME.COLORS.GRAY_400,
    fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_400,
    fontSize: THEME.SIZES.SIZE_XSS_14,
  },
});
