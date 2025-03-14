import { THEME } from "@/src/theme/global";
import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.WHITE,
    flex: 1,
    // paddingBottom: THEME.SIZES.SIZE_XXXS_12,
  },

  containerBody: {
    paddingHorizontal: THEME.SIZES.SIZE_MARGIN_HORIZONTA_24,
    flex: 1,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: THEME.SIZES.SIZE_XXXS_12,
    paddingBottom: THEME.SIZES.SIZE_XXXS_12,
    gap: THEME.SIZES.SIZE_MD_20,
  },

  textParagraph: {
    color: THEME.COLORS.BEREIA_BRONW,
    fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_700,
    textAlign: "center",
    fontSize: THEME.SIZES.SIZE_XSS_14,
  },
  textParagraphConcluded: {
    color: THEME.COLORS.BEREIA_YELLOW,
    fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_700,
    textAlign: "center",
    fontSize: THEME.SIZES.SIZE_MD_20,
  },
});
