import { THEME } from "@/src/theme/global";
import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  input: {
    width: "100%",
    height: THEME.SIZES.SIZE_HEIGHT_50,
    borderColor: THEME.COLORS.BEREIA_YELLOW,
    borderWidth: 1,
    paddingHorizontal: THEME.SIZES.SIZE_XS_16,
    borderRadius: THEME.SIZES.SIZE_RADIUS_15,
    color: THEME.COLORS.GRAY_400,
    fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_400,
  },
  inputFocus: {
    width: "100%",
    height: THEME.SIZES.SIZE_HEIGHT_50,
    borderColor: THEME.COLORS.BEREIA_YELLOW,
    borderWidth: 2,
    paddingHorizontal: THEME.SIZES.SIZE_XS_16,
    borderRadius: THEME.SIZES.SIZE_RADIUS_15,
    color: THEME.COLORS.GRAY_400,
    fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_400,
  },
  inputInvalid: {
    width: "100%",
    height: THEME.SIZES.SIZE_HEIGHT_50,
    borderColor: THEME.COLORS.DANGER_500,
    borderWidth: 1,
    paddingHorizontal: THEME.SIZES.SIZE_XS_16,
    borderRadius: THEME.SIZES.SIZE_RADIUS_15,
    color: THEME.COLORS.GRAY_400,
    fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_400,
  },
  textErrorMessage: {
    color: THEME.COLORS.DANGER_500,
    marginBottom: 5,
    fontSize: THEME.SIZES.SIZE_XSS_14,
    fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_400,
    fontWeight: "bold",
  },
});
