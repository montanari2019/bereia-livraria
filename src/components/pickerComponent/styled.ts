import { THEME } from "@/src/theme/global";
import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GRAY_100,
    borderColor: THEME.COLORS.GRAY_200,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: THEME.SIZES.SIZE_RADIUS_15,
    padding: 23,
  },
  label: {
    fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_400,
    fontSize: THEME.SIZES.SIZE_XSS_14,
    color: THEME.COLORS.GRAY_300,
  },
  picker: {
    width: "100%",
  },
  selectedValue: {
    fontSize: 16,
    color: THEME.COLORS.GRAY_200,
  },
});
