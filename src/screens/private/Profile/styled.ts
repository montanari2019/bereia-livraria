import { THEME } from "@/src/theme/global";
import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },

  section: {
    padding: THEME.SIZES.SIZE_MARGIN_HORIZONTA_24,
    gap: 40,
  },
  sectionButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: THEME.SIZES.SIZE_XXXS_12,
  },
  sectionButtonText: {
    fontSize: THEME.SIZES.SIZE_XS_16,
    fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_400,
    color: THEME.COLORS.GRAY_500,
  },
});
