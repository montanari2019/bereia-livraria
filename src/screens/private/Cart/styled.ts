import { THEME } from "@/src/theme/global";
import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.WHITE,
  },

  header: {
    marginTop: THEME.SIZES.SIZE_MARGIN_HORIZONTA_24,
    padding: THEME.SIZES.SIZE_MARGIN_HORIZONTA_24,
    gap: 8,
  },

  enderecoHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: THEME.SIZES.SIZE_HEIGHT_50,
    backgroundColor: THEME.COLORS.GRAY_100,
    borderWidth: 1,
    borderColor: THEME.COLORS.GRAY_200,
    paddingHorizontal: THEME.SIZES.SIZE_XXXS_12,
    borderRadius: THEME.SIZES.SIZE_RADIUS_15,
  },

  enderecoHeaderText: {
    fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_400,
    fontSize: THEME.SIZES.SIZE_XXXS_12,
    color: THEME.COLORS.GRAY_300,
  },

  enderecoHeaderTextBody: {
    width: "80%",
    textAlign: "center",
    fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_400,
    fontSize: THEME.SIZES.SIZE_XXXS_12,
    color: THEME.COLORS.GRAY_300,
  },

  totalizerContainer: {
    paddingVertical: THEME.SIZES.SIZE_XS_16,
    paddingHorizontal: THEME.SIZES.SIZE_MARGIN_HORIZONTA_24,
    borderTopWidth: 1,
    borderColor: THEME.COLORS.GRAY_200,
  },
  totalText: {
    fontSize: THEME.SIZES.SIZE_SM_18,
    fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_700,
    color: THEME.COLORS.GRAY_500,
  },
});
