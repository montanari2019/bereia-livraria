import { THEME } from "@/src/theme/global";
import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  searchInput: {
    marginTop: THEME.SIZES.SIZE_MARGIN_HORIZONTA_24,
    borderWidth: 2,
    borderColor: THEME.COLORS.GRAY_200,
    width: "100%",
    height: THEME.SIZES.SIZE_HEIGHT_50,
    borderRadius: 15,
    color: THEME.COLORS.GRAY_300,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: THEME.SIZES.SIZE_XXXS_12,
    paddingHorizontal: THEME.SIZES.SIZE_SM_18,
  },

  inputSearch: {
    fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_400,
    color: THEME.COLORS.GRAY_500,
  },
});
