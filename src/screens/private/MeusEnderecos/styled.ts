import { THEME } from "@/src/theme/global";
import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  sectionContainer: {
    flex: 1,

    gap: THEME.SIZES.SIZE_XSS_14,
  },

  containerButton: {
    paddingHorizontal: THEME.SIZES.SIZE_MARGIN_HORIZONTA_24,
  },
});
