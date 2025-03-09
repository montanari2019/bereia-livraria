import { THEME } from "@/src/theme/global";
import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: THEME.SIZES.SIZE_MARGIN_HORIZONTA_24,
    paddingVertical: THEME.SIZES.SIZE_MARGIN_HORIZONTA_24,
    backgroundColor: THEME.COLORS.WHITE,
  },

  itemContainer: {
    marginTop: THEME.SIZES.SIZE_XS_16,
    width: 105,
  },

  itemImage: {
    width: "auto",
    height: 162,
    resizeMode: "cover",
    borderRadius: THEME.SIZES.SIZE_RADIUS_15,
  },

  itemInfo: {
    width: "auto",
    marginTop: 5,
  },

  itemName: {
    width: "auto",
    textTransform: "capitalize",
    fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_700,
    color: THEME.COLORS.GRAY_500,
  },

  itemDetails: {
    fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_400,
    color: THEME.COLORS.GRAY_500,
    fontSize: THEME.SIZES.SIZE_XXXS_12,
  },
});
