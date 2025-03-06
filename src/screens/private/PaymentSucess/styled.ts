import { THEME } from "@/src/theme/global";
import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: THEME.SIZES.SIZE_MARGIN_HORIZONTA_24,
    justifyContent: "space-between",
    alignItems: "center",
  },

  textHeader: {
    marginTop: THEME.SIZES.SIZE_MARGIN_HORIZONTA_24,
    fontSize: THEME.SIZES.SIZE_XS_16,
    fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_700,
    color: THEME.COLORS.GRAY_500,
    textAlign: "center",
  },

  containerQrCode: {
    justifyContent: "center",
    alignItems: "center",
  },

  containerInput: {
    width: "100%",
  },

  textInputLabel: {
    fontSize: THEME.SIZES.SIZE_XSS_14,
    fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_700,
    color: THEME.COLORS.GRAY_400,
    marginBottom: -10,
  },

  textIntrucion: {
    fontSize: THEME.SIZES.SIZE_XSS_14,
    fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_400,
    color: THEME.COLORS.GRAY_400,
    textAlign: "center",
    marginTop: THEME.SIZES.SIZE_XXXS_12,
  },
});
