import { THEME } from "@/src/theme/global";
import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.WHITE,
    flex: 1,
  },

  formsContainer: {
    marginHorizontal: THEME.SIZES.SIZE_LG_24,
    marginVertical: THEME.SIZES.SIZE_SM_18,
  },
});
