import { THEME } from "@/src/theme/global";
import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.WHITE,
    flex: 1,
    // paddingBottom: THEME.SIZES.SIZE_XXXS_12,
  },

  formsContainer: {
    marginHorizontal: THEME.SIZES.SIZE_LG_24,
    marginVertical: THEME.SIZES.SIZE_SM_18,
  },

  buttonForgoutPassword: {
    marginTop: THEME.SIZES.SIZE_MD_20,
    marginBottom: THEME.SIZES.SIZE_MD_20,
  },

  textForgoutPassword: {
    color: THEME.COLORS.GRAY_300,
    fontSize: THEME.SIZES.SIZE_XXXS_12,
    fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_700,
    textAlign: "center",
  },

  textButton: {
    fontSize: THEME.SIZES.SIZE_XS_16,
    fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_700,

    color: THEME.COLORS.WHITE,
  },
  buttonLogin: {
    backgroundColor: THEME.COLORS.BEREIA_YELLOW,
    borderRadius: THEME.SIZES.SIZE_RADIUS_15,
    height: THEME.SIZES.SIZE_HEIGHT_50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
