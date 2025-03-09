import { THEME } from "@/src/theme/global";
import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  containerForms: {
    flex: 1,
    display: "flex",
    gap: THEME.SIZES.SIZE_SM_18,
  },
});
