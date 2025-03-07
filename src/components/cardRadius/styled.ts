import { THEME } from "@/src/theme/global";
import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 1,
    borderRadius: THEME.SIZES.SIZE_RADIUS_15,
    borderColor: THEME.COLORS.GRAY_100,
    padding: THEME.SIZES.SIZE_MARGIN_HORIZONTA_24,
  },
});
