import { THEME } from "@/src/theme/global";
import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  container: {
    // flex: 1,
    width: "100%",
    backgroundColor: THEME.COLORS.BEREIA_BRONW,
    padding: THEME.SIZES.SIZE_MARGIN_HORIZONTA_24,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: "row",
    height: 100,
    gap: THEME.SIZES.SIZE_XSS_14,
  },

  elipseName: {
    width: 50,
    height: 50,
    backgroundColor: THEME.COLORS.GRAY_200,
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  elipseNameText: {
    fontSize: THEME.SIZES.SIZE_XS_16,
    fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_700,
    color: THEME.COLORS.GRAY_500,
  },

  textItemName: {
    color: THEME.COLORS.GRAY_100,
    fontSize: THEME.SIZES.SIZE_XS_16,
    fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_700,
    alignItems: "center",
    justifyContent: "center",
  },

  textDisplayItens: {
    flexDirection: "row",
    alignItems: "center",
    gap: THEME.SIZES.SIZE_XXXS_12,
    paddingVertical: 3,
  },

  textItem: {
    color: THEME.COLORS.GRAY_100,
    fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_400,
    fontSize: THEME.SIZES.SIZE_XS_16,
  },
});
