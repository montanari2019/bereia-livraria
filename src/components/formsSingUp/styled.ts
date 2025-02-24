import { THEME } from "@/src/theme/global";
import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  containerForms: {
    flex: 1,
    display: "flex",
    // gap: 5,
  },
  buttonCreateAcount: {
    marginVertical: THEME.SIZES.SIZE_LG_24,
    backgroundColor: THEME.COLORS.BEREIA_YELLOW,
    borderRadius: THEME.SIZES.SIZE_RADIUS_15,
    height: THEME.SIZES.SIZE_HEIGHT_50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  textButtonCreateAcount: {
    fontSize: THEME.SIZES.SIZE_XS_16,
    fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_700,
    color: THEME.COLORS.WHITE,
  },
});
