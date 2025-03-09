import { THEME } from "@/src/theme/global";
import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  button: {
    height: THEME.SIZES.SIZE_HEIGHT_50,
    width: "100%",
    marginVertical: THEME.SIZES.SIZE_XXXS_12,
    borderRadius: THEME.SIZES.SIZE_RADIUS_15,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    textAlign: "center",
    fontSize: THEME.SIZES.SIZE_XS_16,
    fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_700,
  },
});
